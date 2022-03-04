import { useState, useEffect } from "react"

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState()

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        let ramdonNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[ramdonNumber].url
        setMeme((prevMeme)=>({
            topText: " ",
            bottomText: " ",
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {value, name} = event.target
        setMeme((prevMeme)=> {
            return {
            ...prevMeme,
            [name]: value
            }
        })
    }
    

    return(
        <> 
        <div className="form">
            <div className="form--input-container">

            <input 
            className="form-inputs" 
            type="text" 
            placeholder="Top text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
            />

            <input 
            className="form-inputs" 
            type="text" 
            placeholder="Bottom text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
            />
            </div>

            <div className="form--button-container">
            <button className="form--button" type="button" onClick={getMemeImage}>Get new meme</button>
            </div>
        </div>
         <div className="img--container">
             <h1 className="img--top-text img--texts">{meme.topText}</h1>
             <h1 className="img--bottom-text img--texts">{meme.bottomText}</h1>
              <img className="img--image" src={meme.randomImage} alt="random image" /> 
         </div>

        </>

    )
}