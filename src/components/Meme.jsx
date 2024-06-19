import { useState, useId, useEffect } from 'react'

export default function Meme() {
    
    const id = useId();

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg' 
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        console.log('Effect ran')
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [meme])

    console.log(allMemes)

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleClick(){
        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)].url
        setMeme(prevMeme => ({...prevMeme, topText: '',
            bottomText: '', randomImage: randomMeme}))
    }

    return (
        <main className='main'>
            <div className='form'>
                <label htmlFor={id + '-topText'}>
                    Top text
                    <input
                        type='text'
                        id={id + '-topText'}
                        className='input'
                        placeholder='Top text'
                        onChange={handleChange}
                        name='topText'
                        value={meme.topText}
                    />
                </label>
                
                <label htmlFor={id + '-bottomText'}>
                    Bottom text
                    <input
                        type='text'
                        id={id + '-bottomText'}
                        className='input'
                        placeholder='Bottom text'
                        onChange={handleChange}
                        name='bottomText'
                        value={meme.bottomText}
                    />
                </label>
                
                <button
                type=''
                className='button'
                onClick={handleClick}
                >Get a new meme image 🖼️</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt='meme image' className='memeImage'/>
                {meme.topText && <p className='memeText top'>{meme.topText}</p>}
                {meme.bottomText && <p className='memeText bottom'>{meme.bottomText}</p>}
                
            </div>
            

        </main>
    )
}
