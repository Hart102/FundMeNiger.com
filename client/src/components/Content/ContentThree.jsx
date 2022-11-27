import bg from '../../asserts/images/bg-tablet-pattern.svg'
import TextContainer from './TextContainer'

const ContentThree = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row align-items-baseline">
                <section className="col-md-6 align-items-center p-0" style={{background: '#f3f7f8'}}>
                    <div className="px-lg-5 px-4 py-1 mb-1">
                        <TextContainer 
                            number={'01'} 
                            title={'About FundMeNaija'}
                            text={'FundMeNaija is global community designed to provide solutions on funding for everyone with a genuine need globally.'}
                        />
                    </div>
                    <div className="px-lg-5 px-4 py-4">
                        <TextContainer 
                            number={'02'} 
                            title={'Why you should Choose FundMeNaija'}
                            text={'FundMeNaija is a unique Crowdfunding market place that stands on efficiency, global best practice and transparency'}
                        />
                    </div>
                </section>

                <section className="col-md-6 px-lg-5 px-4">
                    <div></div>
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