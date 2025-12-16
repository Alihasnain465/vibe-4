import React from 'react'

const page = () => {
  return (
    
    <div><figure className="md:flex bg-blue-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-3 rounded-full mx-auto" src="/hafiz.jpg" alt="" width="200" height="512"/>
  <div className="pt-6 md:p-8 text-right md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-green-500 dark:text-sky-400">
        PAIB
      </div>
      <div className="text-red-700 dark:text-slate-500">
        Hi,I'm Ali hasnain  
      </div>
    </figcaption>
  </div>
</figure>
      
    </div>
  )
}

export default page
