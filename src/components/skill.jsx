import { GitIcon } from "../assets/git";
import { GithubIcon } from "../assets/github";
import { HtmlIcon } from "../assets/html";
import { CssIcon } from "../assets/css";
import { ExpressIcon } from "../assets/express.jsx"
import { JsIcon } from "../assets/js.jsx";
import { MongodbIcon } from "../assets/mongodb.jsx"
import { NodeIcon } from "../assets/node.jsx"
import { ReactIcon } from "../assets/react.jsx"
import { SqlIcon } from "../assets/sql.jsx"
import { TailwindIcon } from "../assets/tailwind.jsx"
import { TypescriptIcon } from "../assets/typescript.jsx"
import logo from "../assets/icons8-c++-48.png"

export function Skill() {


  return (
    <div className="w-full border rounded-2xl flex flex-wrap gap-4 items-center justify-center p-5 font-display italic">
      <div className="flex flex-col items-center justify-center ">
        <GithubIcon width={'50px'} height={'50px'} />
        <div>GitHub</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <GitIcon width={'50px'} height={'50px'} />
        <div>Git</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <HtmlIcon width={'50px'} height={'50px'} />
        <div>HTML</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <MongodbIcon width={'50px'} height={'50px'} />
        <div>MongoDB</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <JsIcon width={'50px'} height={'50px'} />
        <div>Javascript</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <CssIcon width={'50px'} height={'50px'} />
        <div>CSS</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <TailwindIcon width={'50px'} height={'50px'} />
        <div>TailwindCSS</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <ReactIcon width={'50px'} height={'50px'} />
        <div>ReactJs</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <ExpressIcon width={'50px'} height={'50px'} />
        <div>ExpressJs</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <NodeIcon width={'50px'} height={'50px'} />
        <div>NodeJs</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <TypescriptIcon width={'50px'} height={'50px'} />
        <div>Typescript</div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <SqlIcon width={'50px'} height={'50px'} />
        <div>SQL</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="C++" className="" ></img>
        <div>C++</div>
      </div>
      {/**/}
    </div>
  )
}
