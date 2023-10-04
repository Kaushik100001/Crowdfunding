import React from "react";
import {Route , Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignDetails from "./pages/CampaignDetails";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


export default function App() {
  return (
    <div className="relative sm:-8 p-4 bg-black min-h-screen  flex flex-row text-white">
       {/* <div className="sm:flex mr-10 hidden relative">
        <Sidebar/>
       </div> */}
       <div className="flex-1 max-sm:w-full max-w-[1240px] mx-auto sm:pr-5">
        <Navbar/>
        <div className=" md:mr-10 sm:flex mr-10 hidden relative">
        <Sidebar/>
       </div>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/create-campaign" element={<CreateCampaign/>}/>
          <Route path="/campaign-details/:id" element={<CampaignDetails/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

       </div>
    </div>
  );
}
