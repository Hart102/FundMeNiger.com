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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 