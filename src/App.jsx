import { useState } from "react";

function App() {
  const [img, setImg] = useState("");
  const [download, setDownload] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=288x288&data=ok"
  );

  function generateQR() {
    const word = document.querySelector("#word");
    if (word.value === "") {
      word.style.border = "1px solid red";
    } else {
      word.style.border = "";
      const code = document.querySelector(".code");
      code.style.height = "376px";
      code.style.opacity = "1";

      setImg(
        `https://api.qrserver.com/v1/create-qr-code/?size=288x288&data=${word.value}`
      );
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-900 h-screen w-screen">
      <div className="bg-white px-10 py-8 rounded-3xl">
        <input
          type="text"
          id="word"
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
          <img src={img} alt="" className="w-72 h-72 my-7" />
          <a href={img} download="QRCode">
            <button className="bg-green-600 text-white rounded-lg px-2 py-1">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
