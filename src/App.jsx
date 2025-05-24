import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import EmailValidation from './components/EmailValidation'
import Counter from './components/Counter'
import TwoWayBinding from './components/TwoWayBinding'
import NewsLetter from './components/NewsLetter'
import Calculator from './components/Calculator'
import ConditionalRender from './components/ConditionalRender'
import BtnOrAnchor from './components/BtnOrAnchor'
import ListOfItems from './components/ListOfItems'

function App() {
  const [outputText, setCount] = useState("Initial Text")

  return (
    <>
      {/* <BookList />

      <EmailValidation />

      <Counter />

      <TwoWayBinding />

      <NewsLetter />

      <Calculator /> */}

      <ConditionalRender />

      <BtnOrAnchor isBtn={true}>
        Click
      </BtnOrAnchor>

      <ListOfItems />
    </>
  )
}

export default App
