import '../ContentTwo/ContentTwo.css'
import Eligibility from './Eligibility'
import { useState, useEffect } from 'react'

import { elementSelector } from '../../Selector'




const ContentTwo = () => {

    // //*************** Flying Effect ***************
    const [isVissible, setIsVissible] = useState('')
    const Observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVissible('true')
                
            }
        })
    })


    useEffect(() => {
        const elements = elementSelector('#element')
        elements.forEach(ele => Observer.observe(ele))
    }, [])
    





  return (
    <section className="contentTwo Banner1 d-flex justify-content-center py-5">
        <div className="container px-lg-5">
            <div className="title text-center mb-5" >
                <h1 className="mx-3 display-6" >Who is eligible ?</h1>
                <p className='text-center'>Check who is eligible to raise or donate fund.</p>
            </div>
            <div className={"card-container"}>
                <span className={isVissible == 'true' ? 'show' : 'hidden'}  style={{transition: '0.3s'}}>
                    <Eligibility 
                        title={'Individuals'} 
                        text={'Individuals who are in need financially or medically.'}
                    />
                </span>
                <span className={isVissible == 'true' ? 'show' : 'hidden'}  style={{transition: '0.5s'}}>
                    <Eligibility 
                        title={'Churches'} 
                        text={'Churches for fund raising and offerings.'}
                    />
                </span>
                <span className={isVissible == 'true' ? 'show' : 'hidden'} style={{transition: '0.7s'}}>
                    <Eligibility 
                        title={'schools'} 
                        text={'Schools for fund raising.'}
                    />
                </span>
                <span className={isVissible == 'true' ? 'show' : 'hidden'} id='element' style={{transition: '0.9s'}}>
                    <Eligibility 
                        title={'Small scale business'} 
                        text={'For businesses investment.'}
                    />
                </span>
                <span className={isVissible == 'true' ? 'show' : 'hidden'} style={{transition: '0.90s'}}>
                    <Eligibility 
                        title={'hospitals'} 
                        text={'for medical donations like blood, body organ donors and volunteers.'}
                    />
                </span>
        
            </div>
        </div>
    </section>
  )
}
// px-lg-5
export default ContentTwo