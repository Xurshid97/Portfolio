import React, { useEffect, useState } from 'react'
import './Projects.scss'
import ImageURL from '../../assets/image.png';
import kitob from '../../assets/kitob.png';
import fake from '../../assets/fake.png';

function Projects({children}) {
    let tempCards = [
        {
            url:ImageURL,
            technologies: ['HTML', 'CSS', 'Python', 'JavaScript'],
            projName: 'Kira.uz',
            descr: 'Delivery platform for Uzbekistan',
            link: 'https://xurshid.pythonanywhere.com/',
            cached: true
        },
        {
            url:kitob,
            technologies: ['HTML', 'SCSS', 'Python', 'Django', 'JavaScript', 'GitHub', 'SEO'],
            projName: 'Kitob Share',
            descr: 'Web store to sell books',
            link: 'http://booksshare.pythonanywhere.com/',
            cached: false
        },
        {
            url:fake,
            technologies: ['HTML', 'CSS', 'SCSS', 'React', 'Webpack'],
            projName: 'Fake Store API',
            descr: 'Working with API in React',
            link: 'https://mellifluous-baklava-1ca46e.netlify.app/',
            cached: false
        },
    ]
    
  return (
    <div className='projects' id='works'>
        <div className="projectHead">
            {children}
            <p>
                View all
            </p>
        </div>
        <div className="projectCards">
            {
                tempCards.map((card, index)=>{
                    return <div className='card' key={index}>
                                <div className='cardImg'>
                                    <img src={card.url} alt="" />
                                </div>

                                <div className='technologies'>
                                    {
                                        card.technologies.map((techn, id)=>{
                                            return <p key={id}>{techn}</p>
                                        })
                                    }
                                </div>

                                <div className="cardBottom">
                                    <h3>{card.projName}</h3>
                                    <p>{card.descr}</p>

                                    <div className="links">
                                        <a target='_blank' href={card.link}>Live</a>
                                        {card.cached && <div className='cached'>Cached</div>}
                                    </div>
                                </div>
                            </div>
                })
            }
        </div>
    </div>
  )
}

export default Projects