import '../Index/Index.css'
import Navbar from "../../components/Navbar/Navbar"
import Banner from '../../components/Banner/Banner'
import ContentOne from '../../components/Content/ContentOne'
import ContentTwo from '../../components/Content/ContentTwo'
import ContentThree from '../../components/Content/ContentThree'
import Footer from '../../components/Footer'



const Index = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <ContentOne />
    <ContentThree />
    <ContentTwo />
    <Footer />
    </>
  )
}

export default Index