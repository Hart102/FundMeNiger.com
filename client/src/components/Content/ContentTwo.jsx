import img from '../../asserts/images/form_bg2.webp'
import Eligibility from './Eligibility'



const ContentTwo = () => {
  return (
    <section className="contentTwo Banner1 d-flex justify-content-center py-5">
        <div className="container px-lg-5">
            <div className="title text-center mb-5">
                <h4 className="mx-3 display-6" style={{fontWeight: '700'}}>Who is eligible ?</h4>
                <p className='text-center'>Check who is eligible to raise or donate fund.</p>
            </div>
            <div className="card-container">
                <Eligibility 
                    title={'Individuals'} 
                    text={'Individuals who are in need financially or medically.'}
                />

                <Eligibility 
                    title={'Churches'} 
                    text={'Churches for fund raising and offerings.'}
                />
                <Eligibility 
                    title={'schools'} 
                    text={'Schools for fund raising.'}
                />
                <Eligibility 
                    title={'Small scale business'} 
                    text={'For businesses for investment.'}
                />
                <Eligibility 
                    title={'hospitals'} 
                    text={'for medical donations like blood, body organ donors and volunteers.'}
                />
            </div>
        </div>
    </section>
  )
}
// px-lg-5
export default ContentTwo