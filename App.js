
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read  from "./components/Read";
import Create from "./components/Create";
import Update from "./components//Update";


function App(){


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exect path="/" element={<Create/>}/>
          <Route exect path="/all" element={<Read/>}/>
          <Route exect path="/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
  