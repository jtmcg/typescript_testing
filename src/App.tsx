import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Home from "./Home"

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </BrowserRouter>
  )
}

export default App