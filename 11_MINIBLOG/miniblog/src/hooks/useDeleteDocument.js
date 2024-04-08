/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useReducer } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/config'

const initialState = {
    loading: null, 
    error: null,
}

const deleteReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            }
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case "DELETED_DOC":
            return {
                ...state,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const deleteDocument = async (id) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
            payload: deleteDocument
        });

        try {
            const deleteDocument =await deleteDoc(doc(db, docCollection, id))
            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deleteDocument
            })
        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            })
        }
    };

    useEffect(() => {
        return () => {
            setCancelled(true)
        }
    })

    return { deleteDocument, response};
}