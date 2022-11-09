function makeObservable(target) {
    let listeners = []; // initial listeners can be passed an an argument aswell
    let value = target;
  
    function get() {
      return value;
    }
  
    function set(newValue) {
      if (value === newValue) return;
      value = newValue;
      listeners.forEach((l) => l(value));
    }
  
    function subscribe(listenerFunc) {
      listeners.push(listenerFunc);
    }
  
    return {
      get,
      set,
      subscribe,
    };
  }

  export default makeObservable;