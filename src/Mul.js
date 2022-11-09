import React from 'react'
import useCountStore from './useStore'

function Mul() {
    const {store}=useCountStore();
  return (
    <div>Mul:{-5* store.count}</div>
  )
}

export default Mul