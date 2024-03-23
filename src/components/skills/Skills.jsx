import './Skills.scss'
import skillsShape from '../../assets/skills_shapes.png'

function Skills({children}) {
    const skillCardsTemp = [{
                                name: 'Languages',
                                languages: ['JavaScript', 'Python', 'Java']
                            },
                            {
                                name: 'Databases',
                                languages: ['SQL', 'SQLite', 'MySQL']
                            },
                            {
                                name: 'Tools',
                                languages: ['VsCode', 'Figma', 'Git', 'SCSS', 'BootStrap']
                            }, 
                            {
                                name: 'Other',
                                languages: ['HTML', 'CSS', 'React', 'Webpack', 'Vite']
                            }, 
                            {
                                name: 'Frameworks',
                                languages: ['Django']
                            }]
  return (
    <div className='skills'>
        <div className="projectHead">
            {children}
        </div>

        <div className="skillsBody">
            <div className="skillsShapes">
                <img src={skillsShape} alt="" />
            </div>
            <div className="skillCards">
                {
                    skillCardsTemp.map((card, indx)=> {
                        return <div className="card" key={indx}>
                            <div className="card_header">
                                {card.name}
                            </div>
                            <div className="card_main">
                                {
                                    card.languages.map((langs, i)=> {
                                        return <p key={i}>
                                            {langs}
                                        </p>
                                    })
                                }                                
                            </div>
                        </div>
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Skills