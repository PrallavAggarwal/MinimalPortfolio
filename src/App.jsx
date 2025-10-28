import { IntroSection } from "./components/introSection"
import { Status } from "./components/Status"
import { HorizontalLine } from "./components/horizontalLine"
import { ProjectArray } from "./data/projectDetails"
import { ProjectCard } from "./components/projectCard"
import { Skill } from "./components/skill"
import { Academy } from "./components/academy"
import { Contacts } from "./components/contacts"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { ContactForm } from "./components/contactForm"
import Particles from "./components/particles"
import { AllRoute } from "./routes/route"
import { Routes, Route } from "react-router-dom"
import { DarkMediumBlog } from "./blog/DarkMedium"
import { MarketPriceBlog } from "./blog/MarketPrices"

function App() {

  const { isActive, setActive } = useContext(AppContext)
  console.log('isActive in App : ', isActive)

  function clickHandler(e) {
    if (e.target.id == 'parent') {
      setActive(false)
    }
  }

  return (
    <>

      {/* <Routes> */}
      {/*   <Route path='/DarkMediumBlog' element={<DarkMediumBlog />} /> */}
      {/*   <Route path='/MarketPriceBlog' element={<MarketPriceBlog />} /> */}
      {/* </Routes> */}


      <div className="w-screen z-0 h-screen overflow-y-hidden relative bg-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        >



          <div className={`absolute overflow-y-scroll z-5 top-0 left-0 font-display w-screen m-0 h-screen ${isActive ? 'overflow-hidden' : ''}`}>
            {isActive &&
              <div id="parent" className={`flex items-center justify-center w-full h-full absolute z-10 left-0 top-0 ${isActive ? 'overflow-clip' : ''}`} onClick={(e) => clickHandler(e)}>
                <ContactForm />
              </div>
            }
            <div className="w-[355px] mx-auto py-[46px] text-white flex flex-col gap-10">
              <IntroSection></IntroSection>
              <div className="w-full italic border-white rounded-2xl p-2.5">I’m a <span className="text-orange-700">full-stack developer</span> who builds both frontend and backend with equal strength. No fluff, no jargon—just clean, fast, scalable code that solves your problem. You explain the goal once; I get it done. My stack right now : MERN, but it is upgrading. Let’s talk code.</div>
              <Status></Status>
              <HorizontalLine text={'Work'}></HorizontalLine>
              {
                ProjectArray.map((project) => {
                  return (
                    <>
                      <ProjectCard title={project.title} summary={project.summary} imageUrl={project.imageUrl} githubUrl={project.githubUrl} blogLink={project.blogLink}></ProjectCard>
                    </>
                  )
                })
              }
              <HorizontalLine text='Skills'></HorizontalLine>
              <Skill></Skill>
              <HorizontalLine text={'Academy'}></HorizontalLine>
              <Academy degree={'B.Tech. - 2021-25'} school={'Krishna Engineering College'} place={'Ghaziabad, U.P.'} marks={'7.1 cgpa'}></Academy>
              <Academy degree={'12th(C.B.S.E.) - 2020-21'} school={'Lord Mahavira School'} place={'Saharanpur, U.P.'} marks={'90%'}></Academy>
              <HorizontalLine text={'Contacts'}></HorizontalLine>
              <Contacts></Contacts>
            </div>
          </div>
        </Particles>
      </div>
    </>
  )
}

export default App
