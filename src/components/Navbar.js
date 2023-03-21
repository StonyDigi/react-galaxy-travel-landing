import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    //Beúsztatom a menümet a bal oldalról
    const handleClick = () => setClick(!click);

    //Navbar háttérszínének megváltoztatása gördítésre

    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);




  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'><h1>Galaxy Travel</h1></Link>
        <ul className={click ? 'nav-menu nav-active' : 'nav-menu'}>
            <li><Link to='/'>Kezdőoldal</Link></li>
            <li><Link to='/prices'>Árak</Link></li>
            <li><Link to='/training'>Képzés</Link></li>
            <li><Link to='/contact'>Kapcsolat</Link></li>
        </ul>

        <div className="nav-icons" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />)
                   : (<FaBars size={20} style={{color: '#fff'}} />)   
            }
        
        </div>

    </div>
  )
}

export default Navbar