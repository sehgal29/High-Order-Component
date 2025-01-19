import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </div>
  )
}


function Counter() {
  const [count, setcount] = useState(0);
  return (
    <>
      <h3>{count} </h3>
      <button onClick={() => setcount(count + 1)}>Update</button>
    </>
  )
}
//if we have so many counter then, it will difficult to create and manage all
//for reduce the complexity of the program we can use high order component, which means we can pass component as a parameter and get parameter as a component
function HOCRed(props) {
  return (
    <>
      <h3 style={{backgroundColor:"red", width:"150px"}}><props.cmp/>Red Counter</h3>
    </>
  )
}


function HOCGreen(props) {
  return(
    <>
    <h3 style={{backgroundColor:"green", width:"150px"}}><props.cmp/>Green Counter</h3>
    </>
  )
}

export default App
