import '../Donate/Donate.css'


import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/Searchbar'
import Fundraiser from '../../components/Fundraiser/Fundraiser'
import Footer from '../../components/Footer'


const Donate = () => {
  return (
    <section className='Donation'>
        <Navbar backgroundColor={'white'}/>

        <div className="container py-3 px-lg-5">
            <nav className='shadow bg-white d-flex justify-content-between align-items-center px-4 py-3'>
                <Searchbar />
                <b className='light-cyan-color hover'>Sort</b>
            </nav>



            <Fundraiser />
            <Fundraiser />
            <Fundraiser />
            <Fundraiser />
        </div>

        <Footer />
    </section>
  )
}

export default Donate

// backgroundColor={'#1e1e26'}