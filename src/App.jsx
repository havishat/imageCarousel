import {useState} from "react";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

const App = () => {
  const [imageIdx, setImageIdx] = useState(1);
  
  return (
    <div className="flex justify-center my-8">
      <button 
        onClick={() => {
          if (imageIdx > 0) {
            setImageIdx(imageIdx - 1);
          } 
        }}
        
      >
        <i className="m-4 text-5xl fa-solid fa-circle-chevron-left text-cyan-400 hover:text-cyan-500"></i>
      </button>
      <div className="flex flex-col items-center">
        <div className="mb-4 text-3xl text-cyan-600">Dog {imageIdx + 1}</div>
        <img className="object-cover h-[500px] w-[400px] rounded-lg" src={IMAGE_URLS[imageIdx]} />
      </div>
      <button
        onClick={() => {
          if (imageIdx < IMAGE_URLS.length - 1) {
            setImageIdx(imageIdx + 1);
          } 
        }}
      >
        <i className="m-4 text-5xl fa-solid fa-circle-chevron-right text-cyan-400 hover:text-cyan-500"></i>
      </button>
    </div>
  );
};

export default App;
