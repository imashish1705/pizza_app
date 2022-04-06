import React from 'react'
import Navigation from "../components/Navigation"
function Home() {
  return (
    <>
    <Navigation>
    < div className="hero py-16" >
      <div div className="container mx-auto" >
        <div className='w-1/2'>
          <h6 className='text-lg'><em>Are you hungry?</em></h6>
          <h1 className='text-3xl md:6xl font-bold'>Don't wait!</h1>
          <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yello-500 hover:bg-yellow-600'>
            Order Now!</button>
        </div>
        <div className='w-1/2'></div>
      </div>
    </div>
    </Navigation>
    </>
  )
}

export default Home