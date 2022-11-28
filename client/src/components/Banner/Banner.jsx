import Button from "../Button/Button"

const Banner = () => {
  return (
    <>

    <section className='Banner py-5'>
        <div className="container py-5 px-lg-5 my-5">
            <main className='col-md-9 text-center mx-auto my-2'>
                <h1 className='display-3 font-weight-bold text' style={{color: '#f3613c', opacity: '1', fontWeight: '700'}}>FUND AND GET FUNDED</h1>
                <p className='text-white text-capitalize'>fund and raise funds from people globally to support your projects, bills, daily needs and other things from FundMeNaija today</p>

                <Button btnText={'Get started'}/>
            </main>
        </div>
    </section>


    {/* #f3613c */}


    {/* #bfdf32 */}






















    {/* <section className="Banner">
        <div className="container py-5">
            <div className="py-5 banner-title mt-5 d-flex flex-column align-items-center">
                <div className="title display-3 text-uppercase text-white"><span style={{color: '#f4d34f', fontWeight: 'bold'}}>Fund</span> your loved ones</div>
                
                <div className="btn my-5 px-5 py-3 font-weight-bold" style={{backgroundColor: '#f4d34f'}}>Get started</div>
            </div>
            
            <section className='d-lg-flex py-3'>
                <div className='box px-3 py-2 text-white my-sm-0 my-4 shadow-sm' style={{backgroundColor: '#f36a34', borderRadius: '10px'}}>
                    <h5>Fund top companies</h5>
                    <p>See the 2022 top companies and breakthrough companies</p>
                </div>
                <div className='box px-3 text-white py-3 ml-lg-5 my-sm-0 my-4'>
                    <h5>The new standard deal</h5>
                    <p>When a company is accepted into the fund batch program. We now invest a total of $1000.</p>
                </div>
            </section>
        </div>
    </section>

    <img src={design} alt="" /> */}
    </>
  )
}



export default Banner