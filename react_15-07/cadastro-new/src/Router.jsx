import { BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CadNews from "./pages/CadNews";
import Header from "./Components/Header";
import Sobre from "./pages/Sobre";

const Router = () =>{
    return(
        <BrowserRouter>
                <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/cadastro" element={<CadNews/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;