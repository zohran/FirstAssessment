import React , {useEffect, useMemo, useState} from "react";
import makeObservable from "./MakeObservable";
const countStore = makeObservable({ count: 0 });

const useCountStore = () => {
  const [store, setStore] = useState(countStore.get());

  useEffect(() => {
    return countStore.subscribe(setStore);
  }, []);

  const actions = useMemo(() => {
    return {
      incrementCount: () => countStore.set({ ...store, count:store.count+1 }),
      decrementCount: () => countStore.set({...store, count:store.count-1 }),
    }
  }, [store])

  return {
    store,
    actions
  }
}

export default useCountStore;