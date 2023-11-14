import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import React from "react"

import Navbar from "../components/Navbar"
import { Home } from "../components/pages/Home"
import UserCrud from "../components/pages/UserCrud"

function App() {
    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<UserCrud />}/>
            </Routes>
        </div>
    )
}

export default App;