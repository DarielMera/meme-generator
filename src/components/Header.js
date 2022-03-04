import face from '../images/troll-face.png'

export default function Header() {


    return (
        <header className="header">
            <img 
                src={face}
                className="header--image"
                alt="trollface"
            />
            <h2 className="header--title">Meme Generator Project</h2>
        </header>
    )
}