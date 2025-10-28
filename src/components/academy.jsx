


export function Academy({ degree, school, place, marks }) {


  return (
    <div className="font-display italic p-2.5 border rounded-2xl w-full h-auto flex items-center justify-center gap-2">
      <div>
        <div>{degree},</div>
        <div>{school},</div>
        <div>{place}</div>
      </div>
      <div className="w-[60px] sm:w-[80px] h-[2px] bg-amber-600 my-auto"></div>
      <div>{marks}</div>
    </div>
  )
}
