import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../asserts/images/donation.jpg'

const Navbar = () => {
    const elementSelector = (element) => document.querySelector(element)
   
    //************* Hamburger menu function ******************
    const hamburger = () => {
        let x = elementSelector('.mobile')
        {x.style.display === 'block' ? x.style.display = 'none' : x.style.display = 'block'}
    }

    //************** Navbar Scroll Effect *******************
    const [changeLinkColor, setChangeLinkColor] = useState('')
    const scrollEffect = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY  > 10) {
                elementSelector('header').classList.add('scroll')
                setChangeLinkColor('true')
                
            }else{
                elementSelector('header').classList.remove('scroll')
                setChangeLinkColor('false')
            }
        })
    }
    scrollEffect()
                




  return (
    <>
    <header>
        <div className="container d-flex justify-content-between align-items-baseline py-2 px-lg-5">
            <div style={{width: '50px', height: '50px'}}>
                <img src={Logo} alt="" className="img-fluid rounded-circle" />
            </div>

            <ul className="list-unstyled desktop">
                <div className="d-flex align-items-center">
                    <li><Link to={'/'} className={changeLinkColor != 'true' ? 'nav-link mx-lg-3 text-white': 'nav-link mx-lg-3 text-dark'}>About</Link></li>
                    <li><Link to={'/'} className={changeLinkColor != 'true' ? 'nav-link mx-lg-3 text-white': 'nav-link mx-lg-3 text-dark'}>Contact</Link></li>
                    <li><Link to={'/'} className={changeLinkColor != 'true' ? 'nav-link mx-lg-3 text-white': 'nav-link mx-lg-3 text-dark'}>Transfer fund</Link></li>
                    <li><Link to={'/'} className={changeLinkColor != 'true' ? 'nav-link mx-lg-3 text-white': 'nav-link mx-lg-3 text-dark'}>Sign in</Link></li>
                    <li>
                        <button className='py-2'>
                            <Link to={'/'} className='nav-link font-weight-bold text-white px-4'>Sign up</Link>
                        </button>
                    </li>
                </div>
            </ul>

            <ul className="mobile">
                <div className="d-flex font-weight-bold border-top">
                    <li><Link to={'/'} className='nav-link my-3 text-white'>About</Link></li>
                    <li><Link to={'/'} className='nav-link my-3 text-white'>Contact</Link></li>
                    <li><Link to={'/'} className='nav-link my-3 text-white'>Transfer fund</Link></li>
                    <li><Link to={'/'} className='nav-link my-3 text-white'>Sign in</Link></li>
                    <li><Link to={'/'} className='nav-link my-3 text-white'>Sign up</Link></li>
                </div>
            </ul>

            <div className='hambuger'>
                <i className={changeLinkColor !== 'true' ? 'fa fa-bars text-white fa-2x' : 'fa fa-bars text-dark fa-2x'} onClick={() => hamburger()}></i>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar