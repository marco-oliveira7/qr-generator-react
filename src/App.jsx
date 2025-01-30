import { useState } from "react";

function App() {
  function generateQR() {
    const code = document.querySelector(".code")
    code.style.height = '376px'
    code.style.opacity = '1'
  }

  return (
    <div className="flex justify-center items-center bg-gray-900 h-screen w-screen">
      <div className="bg-white px-10 py-8 rounded-3xl">
        <input
          type="text"
          placeholder="type the URL here"
          className="bg-gray-300 text-black mr-4 px-2 py-1 rounded-md"
        />
        <button
          className="bg-blue-800 text-white rounded-lg px-2 py-1"
          onClick={generateQR}
        >
          Generate QR
        </button>
        <div className="flex flex-col items-center h-0 opacity-0 code">
          <img
            src="https://afinz.com.br/wp-content/uploads/2022/04/QR_Code_Afinz.png"
            alt=""
            className="w-72 h-72 my-7"
          />
          <button className="bg-green-700 text-white rounded-lg px-2 py-1 ">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
