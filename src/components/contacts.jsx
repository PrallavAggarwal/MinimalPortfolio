import { GithubIcon } from "../assets/github"
import { ArrowIcon } from "../assets/arrow"
import { XIcon } from "../assets/x"
import { LinkedInIcon } from "../assets/LinkedIn"
import { GmailIcon } from "../assets/gmail"
import { useContext, useState } from "react"
import { AppContext } from "../AppContext.jsx"

export function Contacts() {
  const { setActive, isActive } = useContext(AppContext)
  function clickHandler() {
    setActive(true)
  }

  console.log("isActive in Contacts : ", isActive)

  return (

    <div className="border rounded-2xl border-white w-full h-auto">
      <div className="flex flex-wrap items-center justify-start gap-4 py-2.5 px-2.5">


        <a href={'https://github.com/PrallavAggarwal'} target="_blank" className="group flex gap-1 items-baseline justify-center w-auto">
          <GithubIcon width={'45px'} height={'45px'}></GithubIcon>
          <div className="w-[11px] pb-1.5"><div className="group-hover:scale-100 scale-0 w-full transition-all ease-in-out"><ArrowIcon /></div>
          </div>
        </a>


        <a href={'https://x.com/prallavagg002'} target="_blank" className="group flex gap-1 items-baseline justify-center w-auto">
          <XIcon width={'35px'} height={'35px'}></XIcon>
          <div className="w-[11px] pb-0.5"><div className="group-hover:scale-100 scale-0 w-full transition-all ease-in-out"><ArrowIcon /></div></div>
        </a>

        <a href={'https://www.linkedin.com/in/prallav-aggarwal-8a5168221/'} target="_blank" className="group flex gap-1 items-baseline justify-center w-auto">
          <LinkedInIcon width={'55px'} height={'55px'}></LinkedInIcon>
          <div className="w-[11px] pb-2.5"><div className="group-hover:scale-100 scale-0 w-full transition-all ease-in-out"><ArrowIcon /></div></div>
        </a>


        <div className="group cursor-pointer flex gap-1 items-baseline justify-center w-auto" onClick={clickHandler}>
          <GmailIcon width={'48px'} height={'48px'}></GmailIcon>
          <div className="w-[11px] pb-0.5"><div className="group-hover:scale-100 scale-0 w-full transition-all ease-in-out"><ArrowIcon /></div></div>
        </div>

      </div>

    </div>
  )
}
