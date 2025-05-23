import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import EmailValidation from './components/EmailValidation'
import Counter from './components/Counter'
import TwoWayBinding from './components/TwoWayBinding'
import NewsLetter from './components/NewsLetter'

function App() {
  const [outputText, setCount] = useState("Initial Text")

  return (
    <>
      <BookList />

      <EmailValidation />

      <Counter />

      <TwoWayBinding />

      <NewsLetter />
    </>
  )
}

export default App
