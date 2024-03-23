import './Footer.scss'
import logo from '../../assets/Logo.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_left">
            <div className="footer_left_top">
                <div className="logo">
                    <img src={logo} alt="" />
                    <a href="">Khurshid</a>
                </div>
                <a href="mailto:khurshidjon.sharopov@gmail.com">
                    <h6>khurshidjon.sharopov@gmail.com</h6>
                </a>
            </div>
            <p>Front-end developer and start-up maker</p>
        </div>
        <div className="footer_right">
            <h4>Media</h4>
            <div className="links">
                <a href=""><i className="fa fa-github"></i></a>
                <a href=""><i className="fa fa-linkedin-square"></i></a>
                <a href=""><i className="fa fa-telegram"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer