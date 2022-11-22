import React from "react"
import logo from "../images/troll--face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Scrimba Course - Project 3</h4>
        </header>
    )
}