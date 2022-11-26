import bg from '../../asserts/images/bg-tablet-pattern.svg'
import TextContainer from './TextContainer'

const ContentThree = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row align-items-baseline">
                <section className="col-md-6 align-items-center p-0" style={{background: '#efefef'}}>
                    {/* <div className="d-flex flex-column align-items-center bg-danger p-5"> */}
                        <div className="shadow-sm px-lg-5 px-4 py-1 mb-1 bg-white">
                            <TextContainer 
                                number={'01'} 
                                title={'About us'}
                                text={'Crowdfunding raises capital for real estate investments. When developers or real estate professionals find investment opportunities, they may not want to fund the entire investment themselves (or they may not be able to).'}
                            />
                        </div>
                        <div className="shadow-sm px-lg-5 px-4 py-4 bg-white">
                            <TextContainer 
                                number={'02'} 
                                title={'Why We Chose It'}
                                text={'DiversyFund’s model is unique in the real estate crowdfunding space. Instead of serving as a broker that connects investors with projects, DiversyFund buys, develops, and manages a portfolio of properties, collects the cash flow, and divvies up the profits amongst its investors.'}
                            />
                        </div>
                    {/* </div> */}
                    
                </section>

                <section className="col-md-6 px-lg-5 px-4 shadow-sm" style={{background: '#f3f7f8'}}>
                    <div></div>
                    <TextContainer 
                        number={'03'} 
                        title={'How it works'}
                        text={'PeerStreet is an online marketplace where accredited investors can invest in high-quality private real estate loans. Here’s how it works: Your investment gives lenders capital to lend to real estate borrowers, then PeerStreet collects the monthly payments from the borrowers, and you (the investor) get a share of those monthly payments.'}
                    />
                    <TextContainer 
                        number={'04'} 
                        title={'What Is Real Estate Crowdfunding?'}
                        text={'Crowdfunding is a way to fund a project or venture by pooling small investments from a large group of investors'}
                    />
                    <TextContainer 
                        number={'05'} 
                        title={'How Can You Start in Real Estate Crowdfunding?'}
                        text={'Crowdfunding platforms connect sponsors and real estate investors. To get started in real estate crowdfunding, research the various crowdfunding sites to find an opportunity that interests you—whether that’s an individual property or a fund that owns dozens of properties.'}
                    />
                </section>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContentThree



// Why We Chose It
// DiversyFund’s model is unique in the real estate crowdfunding space. Instead of serving as a broker that connects investors with projects, DiversyFund buys, develops, and manages a portfolio of properties, collects the cash flow, and divvies up the profits amongst its investors.

// Unlike some crowdfunding platforms, it doesn’t charge any management or broker fees. Currently, you can invest in the DiversyFund Growth REIT ($500 minimum).