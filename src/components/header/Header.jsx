import './Header.scss'
import logo from '../../assets/Logo.svg'
import { useRef} from 'react';

function Header() {
    const navLinksRef = useRef(null)
  let myFunction = ()=> {
    if (navLinksRef.current.className === 'active') {
        navLinksRef.current.className = 'hidden'        
    }else {
        navLinksRef.current.className = 'active'
    }
  }

  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <a href="">Khurshid</a>
        </div>
        <div className='rightNav'>
            <ul id='navLinks' className='active' ref={navLinksRef}>
                <li key='home'><span>#</span><a href="#">home</a></li>
                <li key='works'><span>#</span><a href="#works">works</a></li>
                <li key='about'><span>#</span><a href="#about">about-me</a></li>
                <li key='contact'><span>#</span><a href="#contacts">contacts</a></li>
                <li key='lang'>
                    <select name="" id="eng">
                        <option value="eng">En</option>
                        <option value="uzb">Uz</option>
                    </select>
                </li>
            </ul>
            <a href="#" className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    </nav>
  )
}

export default Header