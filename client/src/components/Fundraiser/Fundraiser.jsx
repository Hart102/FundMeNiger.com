import '../Fundraiser/Fundraiser.css'

import img from '../../asserts/donateImages/myhome.svg'
import img2 from '../../asserts/images/222.jpg'

const Fundraiser = () => {
  return (
      <section className="Fundraiser p-4 bg-white my-4">
        <div className='d-lg-flex align-items-center'>
            <div className='fundraiser-img'>  

                <picture>
                    <img src={img} 
                        className="img-fluid mx-lg-0 mx-3" 
                    />
                </picture>
            </div>

            <div className="col-md-8 mx-4">
                <div className="fundraiser-name col-md-12 text-truncate">
                    <b className='text-capitalize'>Devine international school</b>
                    <p>Raising for cctv installation, to ensure adequate security of our students.</p>
                    <p className='address text-capitalize'>Address: <span>No 5 Melrose Street</span></p>
                    <b className='light-cyan-color hover'>View</b>
                </div>

            </div>
        </div>

        <div className="d-flex">
            <div className='event-img my-lg-5 my-2'>
                <img src={img2} alt="image" className='img-fluid'/>
            </div>

            <div className='event-img my-lg-5 my-2 mx-lg-2 mx-1'>
                <img src={img2} alt="image" className='img-fluid'/>
            </div>
        </div>
    </section>
  )
}

export default Fundraiser