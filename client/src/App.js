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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 