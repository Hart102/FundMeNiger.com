import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// CSS 
// import '../src/asserts/CSS/bootstrap.min.css'
// import './asserts/CSS/font-awesome-4.7.0/css/font-awesome.min.css'

// PAGES 
import Index from './pages/Index/Index'
import Dashboard from "./pages/User/Dashboard";
import CreateAccount from "./pages/Forms/CreateAccount";
import Login from "./pages/Forms/Login";
import AdminDash from "./pages/Admin/AdminDash";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Fundraisedetails from "./pages/FundraiserDetails/Fundraisedetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/details" element={<Fundraisedetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 