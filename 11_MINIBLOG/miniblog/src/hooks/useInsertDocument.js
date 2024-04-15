/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
    loading: null, 
    error: null,
}

const insertReducer = (state, action) => {
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
        case "INSERTED_DOC":
            return {
                ...state,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}

export const userInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
            payload: insertDocument
        })
        try {
            const newDocument = {...document, createdAt: Timestamp.now()}
            const insertDocument = await addDoc(
                collection(db, docCollection),
                newDocument,
            )
            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertDocument
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

    return { insertDocument, response};
}