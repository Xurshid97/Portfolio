import './About.scss'
import aboutImg from '../../assets/about.png'
import Button from '../button/Button'
import Resume from '../resume/Resume'
import pdfR from '../../assets/Khurshidjon Sharopov.pdf'

function About({children}) {
  return (
    <div className='about'>
        <div className="aboutHead">
            {children}
        </div>
        <div className="aboutBody">
            <div className="aboutInfo">
                Hello, I’m Khurshidjon!
                <br /><br /><br />
                I’m a self-taught front-end developer studying in Warsaw, Poland. 
                I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                <br /><br /><br />
                Transforming my creativity and knowledge in Front-end and Back-end, give me a chance to make websites which suits business requirements. 
                I have helped clients to establish their presence online. 
                I always strive to learn about the newest technologies and frameworks.
                <br /><br /><br />
                <Resume pdfURL={pdfR} />
                <Button content='Read more -->' />
            </div>
            <div className="aboutImg">
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About