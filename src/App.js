import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HouseCard from "./components/Card/HouseCard";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/card/:id" element = {<HouseCard/>} />
      {/* <Route path="/sign-in" element ={<SignIn/>} */}
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;


