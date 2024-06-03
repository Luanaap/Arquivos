import React, { useContext } from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'

const Home = () => {
  const {contextValue} = useContext(SomeContext);

  return (
    <div>
      <HookUseState></HookUseState>
      <HookUseReducer></HookUseReducer>
      <HookUseEffect></HookUseEffect>
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr/>
      <HookUseRef></HookUseRef>
    </div>
  )
}

export default Home