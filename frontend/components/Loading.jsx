import React from 'react'

const Loading = () => {
  return (
    // Loading message start
    <div className="w-full h-[100vh] bg-white flex flex-col gap-5 justify-center items-center">
      <img src="/logo.svg" width={150} />
      <span className="text-xl md:text-2xl font-medium">Cargando...</span>
    </div>
    // Loading message end
  )
}

export default Loading