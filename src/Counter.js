import React from 'react'
import useCountStore from './useStore'

function Counter() {
    const {store,actions}=useCountStore();
  return (
    <div>
        <h1>Counter:{store.count}</h1>
        <button onClick={()=>actions.incrementCount()}>Increment</button>
        <button onClick={()=>actions.decrementCount()}>Decrement</button>
        <br/>
    </div>

  )
}

export default Counter