import React, { useRef, useState } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const container = useRef(null)
    const mobileMenu = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useGSAP(() => {
        gsap.from('.anim-nav', {
            y: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'all'
        })
    }, { scope: container })

    useGSAP(() => {
        if (isMenuOpen) {
            gsap.from(".mob-link", {
                y: -15,
                opacity: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: 'power2.out'
            })

            gsap.from(mobileMenu.current, {
                height: 0,
                duration: 0.4,
                ease: "power2.out"
            })
        }
    }, { dependencies: [isMenuOpen], scope: mobileMenu })


    return (
        <nav ref={container} className='w-full border-b border-gray-200 bg-[#FAF9F6]'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
                <div className='flex items-center gap-2 anim-nav'>
                    <span className='text-2xl'>☕</span>
                    <a href="/" className='text-[#0F5132] text-2xl font-bold'>Brewly</a>
                </div>
                <div className='hidden items-center gap-8 md:flex'>
                    <Link to= "/" className='anim-nav text-sm font-medium hover:text-[#0F5132]'>Home</Link>
                    <Link to= "/features" className='anim-nav text-sm font-medium hover:text-[#0F5132]'>Features</Link>
                    <Link to= "/pricing" className='anim-nav text-sm font-medium hover:text-[#0F5132]'>Pricing</Link>
                    <Link to= "/about" className='anim-nav text-sm font-medium hover:text-[#0F5132]'>About</Link>
                    
                </div>
                <div className='hidden items-center gap-4 md:flex '>
                    <Link to="/login" className='anim-nav text-sm font-medium hover:text-[#0F5132]'>Login</Link>
                    <Link to="/register" className='anim-nav inline-block rounded-full bg-[#1F5132] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#083C2B]'>Get Started</Link>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl md:hidden text-[#0F5132] "> {isMenuOpen ? "✕" : "☰"}</button>
            </div>

            {isMenuOpen && (
                <div className='border-t border-gray-200 bg-[#FAF9F6] px-6 py-6 md:hidden'>
                    <div ref={mobileMenu} className='flex flex-col gap-4'>
                        
                        <Link to= "/" onClick={()=> setIsMenuOpen(false)} className='mob-link text-sm font-medium hover:text-[#0F5132]'>Home</Link>
                        <Link to= "/features" onClick={()=> setIsMenuOpen(false)} className='mob-link text-sm font-medium hover:text-[#0F5132]'>Features</Link>
                        <Link to= "/pricing" onClick={()=> setIsMenuOpen(false)} className='mob-link text-sm font-medium hover:text-[#0F5132]'>Pricing</Link>
                        <Link to= "/about" onClick={()=> setIsMenuOpen(false)} className='mob-link text-sm font-medium hover:text-[#0F5132]'>About</Link>
                        <Link to= "/login" onClick={()=> setIsMenuOpen(false)} className='mob-link text-sm font-bold hover:text-[#0F5132]'>Login</Link>
                        <Link to= "/register" onClick={()=> setIsMenuOpen(false)} className='mob-link mt-2 rounded-full bg-[#0F5132] px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#083C2B]'>Register</Link>
                        
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar
