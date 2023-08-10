import {BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
function App() {
  
  return (
    <>
    <BrowserRouter>
     <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
