import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/primereact.min.css";

import "primeicons/primeicons.css";

import SignUp from "./user/Signup";
import Login from "./user/Login";
import Homepage from "./Landingpage/homepg/Homepg";
import Moviedetails from "./Moviedetailpage/moviedetails/moviedetails";
import TheaterSelect from "./theaterpage/TheaterSelect";
import Seatselect from "./Seatselectpage/Seatselect";
import DropdownBar from "./components/searchbar/searchbar";
import Moviepage from "./Moviespage/moviepage";
import Summary from "./Summarypage/Summary"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/home" element={<Homepage />}> </Route>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/movie/:id' element={<Moviedetails />}></Route>
        <Route path='/theater/:id' element={<TheaterSelect />}></Route>
        <Route path="/booking/:theatername/:theaterid" element={<Seatselect />} />
        <Route path="/allmovie" element={<Moviepage />}></Route>
        <Route path="/moviepg" element={<DropdownBar />}></Route>
        <Route path="/summary" element={<Summary />}></Route>

      </Routes>
    </Router>
  );
}

export default App;