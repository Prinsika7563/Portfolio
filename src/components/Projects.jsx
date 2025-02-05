
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='h-full lg:h-screen flex flex-col items-center text-white '>
        
        <h1 className='mt-4 text-center border-b-3 border-white text-3xl md:text-4xl font-extrabold pb-1  bg-gradient-to-r brightness-150 from-emerald-800 via-emerald-800  to-yellow-600 text-transparent bg-clip-text '>
            Projects
        </h1>

        <div className='flex items-center h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-0 gap-8'>
            {/* example project card */}

            {[1, 2, 3, 4, 5, 6].map((project, index) => (
            <div
             key={index}
             className='w-80 h-60 bg-gray-900 rounded-lg shadow-lg p-5 flex flex-col justify-between transform transition-transform hover:scale-105'
             >
                <h2 className='text-xl font-bold text-yellow-500'>
                    Project{index+1}
                </h2>
                <p className='text-sm text-gray-300'>
                    uploading soon...
                </p>
                <button className='mt-4 bg-yellow-600 px-4 py-2 rounded-lg'>
                    view project
                </button>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Projects