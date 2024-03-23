import Button from '../button/Button'
import './Showcase.scss'
import myPhoto from '../../assets/Image.svg'

function Showcase() {
  return (
    <section className="showcase">
        <div className="left_showcase">
            <div className="content">
                Khurshid is a <span>software developer</span> with
                a focus on <span>front-end.</span>
            </div>
            <p>
                I craft responsive websites where technologies meet creativity
            </p>
            <a target='_blank' href="https://www.linkedin.com/in/khurshidjon-sharopov-141280202/">
                <Button content='Contact me!!'/>
            </a>
        </div>
        <div className="right_showcase">
            <img src={myPhoto} alt="" />
            <div className="dev_res">
                <input type="checkbox" className='square' /> Currently working on Portfolio
            </div>
        </div>
    </section>
  )
}

export default Showcase