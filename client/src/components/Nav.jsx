import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <header>
            <nav>
                <Link to ='/'>Home</Link>
                <Link to ='/work'>Work</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/contact'>Contact</Link>
            </nav>
        </header>
    )
}
export default Nav