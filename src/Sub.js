import React from 'react'
import useCountStore from './useStore'

function Sub() {
    const {store}=useCountStore();
  return (
    <div>Sub:{4 - store.count}</div>
  )
}

export default Sub