import { useState } from 'react'
import { HandlerEmojy } from "./components";

import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HandlerEmojy />
    </>
  )
}
