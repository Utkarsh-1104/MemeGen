import React from 'react'
import '../components/Form.css'

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomImage = Math.floor( Math.random() * allMemes.length )
        const url = allMemes[randomImage].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="formdata">
                <div className="form">
                    <div className="inputs">
                        <input 
                            type="text" 
                            placeholder='Top text'
                            className='form--input'
                            name='topText'
                            value={meme.topText}
                            onChange={handleChange}
                            />
                        <input 
                            type="text" 
                            placeholder='Bottom text'
                            className='form--input'
                            name='bottomText'
                            value={meme.bottomText}
                            onChange={handleChange}
                            />
                    </div>
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                        >
                        Get a new meme image 🖼
                    </button>
                </div>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className='meme--image' alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}