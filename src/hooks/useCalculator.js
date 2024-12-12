import { useState } from "react";

export function useCalculator (value) {
  const [count, setCount] = useState(value || 0)

  function sumar () {
    console.log('se presiono el boton')
    setCount(count + 1 )
  }

  function restar () {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function reset () {
    setCount(0)
  }

  function set (value) {
    // valiate typof 
    // setCount(Number.parseInt(value))
    setCount(value)
  }

  return {
    count,
    sumar,
    restar,
    reset,
    set,
  }
}