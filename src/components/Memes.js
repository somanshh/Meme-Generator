import React from "react"
import memesData from "../memesData"

export default function Meme() {
   
    const [meme , setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages , setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(prevValue => ({randomImage: memesArray[randomNumber].url})) 
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage} 
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt=""/>
        </main>
    )
}