import React from 'react'
import useCountStore from './useStore'

function Div() {
    const {store}=useCountStore();
  return (
    <div>Div:{6/ store.count}</div>
  )
}

export default Div