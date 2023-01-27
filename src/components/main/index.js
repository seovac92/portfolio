import './index.css'
import css from '../../assets/icons/css.webp'
import express from '../../assets/icons/express.webp'
import git from '../../assets/icons/git.webp'
import html from '../../assets/icons/html.webp'
import js from '../../assets/icons/js.webp'
import node from '../../assets/icons/node.webp'
import react from '../../assets/icons/react.webp'
import scss from '../../assets/icons/scss.webp'
import vue from '../../assets/icons/vue.webp'
import mars from '../../assets/icons/mars.webp'
import { useState } from 'react'

const Main = () =>{
    const [currentProject,setCurrentProject] = useState(null)

    const handleProject = (e)=>{//making description for every project on hover!!!
        let arr=[...e.target.parentElement.children[1].children[2].children]
        let project={
            title:e.target.innerHTML,
            description:e.target.parentElement.children[1].children[0].innerHTML,
            developed:e.target.parentElement.children[1].children[1].innerHTML,
            list:arr.map(el=>{
                return el.innerHTML
            })
        }
        setCurrentProject(project)
    }

    return (
        <div className="main">
            <p className="border">#############################################################################################################################################################################################################################################################################################################################################################################</p>
            <section className="about">
                <div className="content">
                    <div className="wrapper">
                        <h1 className='title'>&gt;&nbsp;About&nbsp;me&nbsp;&lt;</h1>
                        <p>I'm a frontend developer based in Belgrade, Serbia with the plan to become a full stack developer.</p>
                        <p>Always searching for new knowledge and ideas.</p>
                    </div>
                </div>
            </section>
            <p className="border">#############################################################################################################################################################################################################################################################################################################################################################################</p>
            <section className="projects">
                <div className="big-content">
                    <div className="wrapper">
                        <div className="project-list">
                            <h2 className='title'>&gt;&nbsp;Projects&nbsp;&lt;</h2>
                            <ol>
                                <li>
                                    <a onMouseEnter={handleProject} href="http://784s122.e2.mars-hosting.com/">A la mare</a>
                                    <div style={{display:'none'}}>
                                        <p>Developed a web platform with the goal to unite people who enjoy cooking and sharing recipes among each other. Each user can make and share their own recipes which can then be used in weekly meal plans by other users. This feature is then leveraged in making grocery lists which can be used in grocery shops for easy shopping.</p>  
                                        <p>Developed using:</p> 
                                        <ul>
                                            <li>Vue3</li>
                                            <li>Vuex</li>
                                            <li>Router</li>
                                            <li>Git</li>
                                            <li>MARS</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a onMouseEnter={handleProject} href="https://www.kalorisum.com/">Kalorisum</a>
                                    <div style={{display:'none'}}>
                                        <p>Platform developed to help people determine and manage their diet plans in order to achieve their ideal bodyweight. The platform consists of several important features that allow users to determine their current activity level and manage their calory intake with analytics and weight loss progress. I used ChartJS for visualization of progress and analytics. The software is adapted for both desktop and mobile use allowing for easier control over the lists on the go for easier shopping and daily activity management.</p>  
                                        <p>Developed using:</p> 
                                        <ul>
                                            <li>Vue3</li>
                                            <li>Vuex</li>
                                            <li>Router</li>
                                            <li>Git</li>
                                            <li>MARS</li>
                                            <li>Chart.js</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a onMouseEnter={handleProject} href="https://www.vikendicamiki.com/">Vikendica Miki</a>
                                    <div style={{display:'none'}}>
                                        <p>Website that promotes small family business.</p>  
                                        <p>Developed using:</p> 
                                        <ul>
                                            <li>Next.js</li>
                                            <li>MUI</li>
                                            <li>Git</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a onMouseEnter={handleProject} href="http://867t122.mars2.mars-hosting.com/">Dr. Sanja Tarailo</a>
                                    <div style={{display:'none'}}>
                                        <p>Website that promotes Dr Sanja Tarailo.</p>  
                                        <p>Developed using:</p> 
                                        <ul>
                                            <li>Vue3</li>
                                            <li>Git</li>
                                            <li>Green Sock</li>
                                            <li>Git</li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className="project">
                            {currentProject && <div className="project-description">
                            <h3 className="project-title">{currentProject.title}</h3>
                            <p className="project-text">{currentProject.description}</p>
                            <p>{currentProject.developed}</p>
                            <ul>{currentProject.list.map((el,idx)=>{
                                return <li key={idx}>{el}</li>
                            })}</ul>
                            </div>}
                            {!currentProject && <div className="project-empty"><p>EMPTY</p></div>}
                        </div>
                    </div>
                </div>
            </section>
            <p className="border">#############################################################################################################################################################################################################################################################################################################################################################################</p>
            <section className="skills">
                <div className="content">
                    <div className="wrapper">
                        <h2 className='title'>&gt;&nbsp;Skills&nbsp;&lt;</h2>
                        <div className="logo-container">
                            <img src={js} alt="js" />
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={node} alt="node" />
                            <img src={express} alt="express" />
                            <img src={react} alt="react" />
                            <img src={vue} alt="vue" />
                            <img src={scss} alt="scss" />
                            <img src={git} alt="git" />
                            <img src={mars} alt="mars" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main