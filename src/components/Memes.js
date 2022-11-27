import React from "react"
import memesData from "../memesData"

export default function Meme() {
   
    const [meme , setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    

    const [allMemeImages , setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevValue => ({randomImage: memesArray[randomNumber].url})) 
    }

    function setText(event){
        // const{name , value} = event.target
        setMeme(prevValue => ({
            ...prevValue,
            [event.target.name] : event.target.value
        }))
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={setText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={setText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage} 
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                    <img className="meme--image" src={meme.randomImage} alt=""/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}