import { useEffect, useState } from 'react'
import bg from '../../asserts/images/bg-tablet-pattern.svg'
import TextContainer from './TextContainer'
import { elementSelector } from '../Selector'

const ContentThree = () => {
    //*************** Flying Effect ***************
    const [Vissible, setVissible] = useState('')
    const Observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setVissible('true')
                
            }
        })
    })


    useEffect(() => {
        const elements = elementSelector('#item1')
        elements.forEach(ele => Observer.observe(ele))
    }, [])


  return (
    <>
    <section>
        <div className="container">
            <div className="row align-items-baseline">
                <section className="col-md-6 align-items-center p-0" style={{background: '#f3f7f8'}} >
                    <div className={Vissible == 'true' ? "show px-lg-5 px-4 py-1 mb-1" : 'hidden px-lg-5 px-4'} style={{transition: '0.5s'}}>
                        <TextContainer 
                            number={'01'} 
                            title={'About FundMeNaija'}
                            text={'FundMeNaija is global community designed to provide solutions on funding for everyone with a genuine need globally.'}
                        />
                    </div>
                    <div className={Vissible == 'true' ? "show px-lg-5 px-4 py-4" : 'hidden px-lg-5 px-4'} style={{transition: '0.7s'}}>
                        <TextContainer 
                            number={'02'} 
                            title={'Why you should Choose FundMeNaija'}
                            text={'FundMeNaija is a unique Crowdfunding market place that stands on efficiency, global best practice and transparency'}
                        />
                    </div>
                </section>

                <section className={Vissible == 'true' ? "show col-md-6 px-lg-5 px-4" : 'hidden col-md-6 px-lg-5 px-4'} id='item1' style={{transition: '0.9s'}}>
                    <TextContainer 
                        number={'03'} 
                        title={'How FundMeNaija works'}
                        text={'Everyone is welcomed to FundMeNaija as a fundraiser or a donor, both as individuals and organization, we will server you just by creating a fundraiser wallet and get approved in seconds.'}
                    />
                </section>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContentThree