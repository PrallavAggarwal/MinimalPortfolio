import { useRef, useState } from "react";
import { Star } from "../assets/starSvg";


export function StarFeedBack() {
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();
  const star4 = useRef();
  const star5 = useRef();

  const [isColor, setColor] = useState('#7F7F7F')
  const [isHovered, setHovered] = useState(false)
  function mouseEnterHandler() {
    setHovered(true)
  }
  function mouseExitHandler() {
    setHovered(false)
  }

  function mouseOverHandler(e) {
    console.log('e.target : ', e.target)


  }

  return (
    <div>

      <div ref={star1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler} className={`hover:bg-white transition-all ease-in-out duration-100`}>
        <Star height={'30px'} width={'30px'} color={isColor} />
      </div>
      <div ref={star2} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
        <Star height={'30px'} width={'30px'} color={isColor} />
      </div>
      <div ref={star3} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
        <Star height={'30px'} width={'30px'} color={isColor} />
      </div>
      <div ref={star4} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
        <Star height={'30px'} width={'30px'} color={isColor} />
      </div>
      <div ref={star5} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
        <Star height={'30px'} width={'30px'} color={isColor} />
      </div>
    </div >


  )
}
