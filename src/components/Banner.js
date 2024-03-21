import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    {/* <div className='relative'>
        <img className='aspect-[16/10] md:aspect-auto object-cover' src='/banner2.jpg' />
        <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Welcome to my website</h1> */}
        {/* <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
        <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
        <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}

    {/* </div> */}

    <div className="bg-cover bg-center h-auto text-white py-60 px-10 object-fill" style={{backgroundImage: "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"}}>
       <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">Attractive designs for your brand</p>
        <Link to="#" className="bg-gray-700 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</Link>
        </div>  
    </div>
    </>
  )
}

export default Banner