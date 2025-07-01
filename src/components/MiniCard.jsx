import React from 'react'

const MiniCard = ({ skill }) => {
    return (
        <div className="relative px-4 py-1.5 text-sm text-white rounded-full cursor-pointer z-10 transition-all duration-300 ease-in-out
  bg-gradient-to-br from-white/15 via-white/8 to-white/5
  border border-blue-200
  backdrop-blur-md shadow-sm
  hover:shadow-[0_0_8px_2px_rgba(173,216,230,0.2)] hover:ring-1 hover:ring-blue-200/40">
            {skill}
        </div>
    )
}

export default MiniCard