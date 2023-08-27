import React from "react";
import RightDiv from "./Components/RightDiv";
import LeftDiv from "./Components/LeftDiv";
import ParticleComponent from "./Components/Particle";
import { Toaster } from "react-hot-toast";
import './media-queries.css'

function App() {
  return (
    <div className='Body h-screen px-40'>
      <ParticleComponent className="backGround absolute top-0 left-0 w-full h-full z-2" />
      <div className='Body2 flex flex-row mx-0 h-full bg-[#00342d]'>
          <RightDiv/>
          <LeftDiv/>
          <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default App;
