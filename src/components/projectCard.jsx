import { useNavigate } from "react-router-dom"
import { ArrowIcon } from "../assets/arrow"
import { GithubIcon } from "../assets/github"


export function ProjectCard(props) {

  const navigate = useNavigate();

  function goToBlog() {
    navigate(`/${props.blogLink}`)
  }

  return (
    <div className="font-display italic text-[12px] w-full flex flex-col gap-4 p-2.5 border border-white rounded-2xl">
      <div className="flex items-center justify-center gap-4">
        <div className="w-1/3 rounded-2xl contain-content"><img src={props.imageUrl} className="w-full" /></div>
        <div className="text-center"><div className="text-center font-semibold">{props.title}</div><div>{props.summary}</div></div>
      </div>
      <div className="flex items-start justify-start gap-4">
        <a href={props.githubUrl} target="_blank" className="group flex gap-1 items-center justify-center w-auto cursor-pointer">
          <div className="group-hover:font-semibold transition-all ease-in-out w-full flex items-center justify-center gap-1">
            <div>Github</div>
            <GithubIcon width={'15px'} height={'15px'}></GithubIcon>
          </div>
          <div className="w-[11px] "><div className="group-hover:scale-100 scale-0 w-full transition-all ease-in-out"><ArrowIcon /></div>
          </div>
        </a>

        {/**/}
        {/* <div className="group cursor-pointer flex gap-1 items-center justify-center w-auto"><div className="group-hover:font-semibold transition-all ease-in-out" onClick={goToBlog}>Blog</div> */}
        {/*   <div className="w-[11px] "><div className="group-hover:scale-100 scale-0 w-full transition-all ease-in-out"><ArrowIcon /></div></div> */}
        {/* </div> */}
        {/**/}

      </div>
    </div>
  )
}
