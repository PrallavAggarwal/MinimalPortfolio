


export function HorizontalLine({ text }) {


  return (
    <div className="flex items-start gap-2.5 justify-baseline w-full h-auto">
      <div className="w-[91px] sm:w-[100px] h-[2px] bg-[#8361F3] my-auto"></div>
      <div className="font-display italic text-[#12px]">{text}</div>
    </div>

  )
}
