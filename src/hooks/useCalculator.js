import { useState } from "react";

export function useCalculator (value) {
  const [count, setCount] = useState(value || 1)

  function sumar () {
    console.log('se presiono el boton')
    setCount(count + 1)
  }

  function restar () {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function reset () {
    setCount(0)
  }

  return { count, sumar, restar, reset }
}