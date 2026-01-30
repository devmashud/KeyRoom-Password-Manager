import React from 'react'

function Logo() {
  return (
   <div className="flex items-center gap-3 select-none">
  {/* Logo Icon */}
  <div className="relative w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-green-400 to-emerald-600 shadow-md">
    <span className="text-white font-extrabold text-sm tracking-tight">
      KR
    </span>

    {/* inner dot = keyhole hint */}
    <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></span>
  </div>

  {/* Logo Text */}
  <div className="flex flex-col leading-none">
    <span className="text-white font-semibold tracking-wide">
      Key<span className="text-green-400">Room</span>
    </span>
    <span className="text-[10px] text-slate-300 tracking-widest uppercase">
      password vault
    </span>
  </div>
</div>

  )
}

export default Logo
