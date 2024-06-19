import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='headerContainer'>
                <img src={logo} alt='logo' className='logo'/>
                <h1 className='headerTitle'>Meme Generator</h1>
                <p className='project'>React Course - Project 3</p>
            </div>
        </header>
    )
}