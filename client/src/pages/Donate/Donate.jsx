import '../Donate/Donate.css'
import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/DonateComponents/SearchBar/Searchbar'
import Footer from '../../components/Footer'

import img from '../../asserts/images/example.PNG'

const Donate = () => {
  return (
    <section className='Donate'>
        <Navbar />
        <div className="py-3 mx-auto">
            <div className="category container mt-5">
                <div className="pt-5 d-lg-flex justify-content-between align-items-baseline">
                    <ul className="list-unstyled d-flex">
                        <li className='mx-3'>Churches</li>
                        <li className='mx-3'>Schools</li>
                        <li className='mx-3'>Individuals</li>
                        <li className='mx-3'>Business</li>
                        <li className='mx-3'>Hospitals</li>
                    </ul>
                <Searchbar />
                </div>
            </div>

        </div>


        {/* <img src={img} alt="" /> */}
    </section>
  )
}

export default Donate

// backgroundColor={'#1e1e26'}