import profileImage from '../assets/profile.jpeg'


export function IntroSection() {


  return (
    <div className="flex  items-center justify-between w-full h-auto">
      <div className="text-[24px] w-auto font-Name text-start italic">Prallav Aggarwal</div>
      <div className='border rounded-full h-[80px] w-[80px] overflow-hidden'><img src={profileImage} className='object-fit w-full h-full' /></div>
    </div>
  )
}
