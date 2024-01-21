import About from "./components/About";
import Footer from "./components/Footer";
import HeartData from "./components/HeartData";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DataForm from "./components/DataForm";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/diabetes-predictor" element={<DataForm/>}/>
    <Route path="/heart-disease-predictor" element={<HeartData/>}/>
    <Route path="/about-us" element={<About/>}/>
    </Routes> 
    <Footer/>
    </BrowserRouter>
  )
}

export default App
