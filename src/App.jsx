import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import BounceLoader from "react-spinners/BounceLoader";
import CircleLoader from "react-spinners/CircleLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import ClockLoader from "react-spinners/ClockLoader";
import DotLoader from "react-spinners/DotLoader";
import FadeLoader from "react-spinners/FadeLoader";
import GridLoader from "react-spinners/GridLoader";
import RotateLoader from "react-spinners/RotateLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import SyncLoader from "react-spinners/SyncLoader";
import RingLoader from "react-spinners/RingLoader";
import PropagateLoader from "react-spinners/PropagateLoader";


function App() {

  let [color, setColor] = useState("red");
  return (
    <>
     <div className="sweet-loading" style={{justifyContent: 'center', display:"flex", alignItems:"center",marginLeft: '18%'}}>
    
      <div style={{marginLeft:"200px"}}>
      <ClipLoader
        color={color}
        loading={true}
        size={50}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>

      <BarLoader
        color={color}
        loading={true}
        width={180}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px",display:'flex'}}>
      <BeatLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <BounceLoader
        color={color}
        loading={true}
        size={60}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <CircleLoader
        color={color}
        loading={true}
        size={50}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <ClimbingBoxLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <ClockLoader
        color={color}
        loading={true}
        size={50}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <DotLoader
        color={color}
        loading={true}
        size={60}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <GridLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <RotateLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <FadeLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <MoonLoader
        color={color}
        loading={true}
        size={60}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <PacmanLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>

      <div style={{marginLeft:"50px"}}>
      <RingLoader
        color={color}
        loading={true}
        size={60}
        speedMultiplier={2}
      
      />
      </div>


      <div style={{marginLeft:"50px",display:'flex'}}>
      <SyncLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
      </div>


      <div style={{marginLeft:"100px"}}>
      <PropagateLoader
        color={color}
        loading={true}
        size={15}
        speedMultiplier={2}
      
      />
     </div>

    </div>
<input style={{border: '3px solid red', borderRadius: "5%"}} value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
    </>
  )
}

export default App
// https://www.davidhu.io/react-spinners/ [more about loading in this site] 