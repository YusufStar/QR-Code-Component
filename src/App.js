import React from "react";
import "./index.css"
import qr from "./qrCode.png"

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-bg overflow-hidden">
      <div className="bg-cardbg flex flex-col items-center p-6 w-[360px] h-[525px] rounded-3xl big:w-[400px] big:h-[575px] fold:w-[250px] samsung:w-[330px] phone:w-[300px]">
        <img src={qr} className="w-[100%] rounded-xl" alt="" />
        <h1 className="text-paragraf font-[700] text-center text-2xl p-3">Improve you front-end skills by building projects</h1>
        <p className="text-text text-center font-[400] text-[15px] big:text-[17px] p-3">Scan the QR code too visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;