import MagnifyingGlass from "../images/MagnifyingGlass.svg"
import BackgroundImage from "../images/IndexBackground6.jpg";

const Index = () => {
  return (
    <div 
    className="flex flex-col items-center justify-start h-screen w-screen bg-cover bg-center">
      <div className="flex flex-row w-screen bg-[#f4f7f8] h-20">
          <div className="flex flex-col items-end px-8 justify-center w-1/5 border-r-4 border-y-[3px] border-[#3b4d5c]">
            <h1 className="font-roboto text-2xl font-semibold text-[#1a2e3b] tracking-tight">
              LOCALPULSE
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center w-4/5 border-y-[3px] border-[#3b4d5c]"> 

          </div>
      </div>
      <div 
        className="flex flex-col items-center justify-center w-screen h-[80vh] bg-cover bg-[position:center_88%]  bg-neutral-900"
        style={{ backgroundImage: `url(${BackgroundImage})` }}>
      
        <div className="flex flex-row items-center justify-center h-[12%] w-full bg-gray-900 bg-opacity-45">
          {/* Input container */}
          <div className="relative w-[40%]">
            <label
              htmlFor="search-input"
              className="absolute left-1 top-1/2 -translate-y-1/2 text-white text-opacity-40 text-sm pointer-events-none">
              <img src={MagnifyingGlass} alt="Search Icon" className="w-5 h-5 opacity-60 hover:opacity-100" />
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Search..."  
              className="w-full pl-7 pb-1 bg-transparent border-0 border-b border-white border-opacity-[40%]
                text-sm text-white text-opacity-40 focus:text-opacity-100 hover:text-opacity-100
                placeholder-white placeholder-opacity-40
                focus:outline-none focus:border-b focus:border-white focus:ring-0 focus:border-opacity-100
                hover:border-opacity-100"
                autocomplete="off"
            />
          </div>
          <img src={MagnifyingGlass} alt="Search Icon" className="w-6 h-6 ml-3 mt-2" />
        </div>

        <div className="flex flex-row items-center justify-center w-full h-full">
            <div className="flex flex-col justify-center items-center w-[40%] h-full bg-opacity-50 ">

            
              <div className="flex flex-col items-center justify-start w-[90%] h-[90%] border border-red-500 mr-16">
                {/* Welcome Text */}
                <div className="flex flex-col items-center justify-center w-[80%] h-[30%] mt-20 border border-red-500">
                  <h1 className="text-6xl font-bold text-gray-900 font-roboto drop-shadow-lg">
                    LocalPulse
                  </h1>
                  <p className="text-sm text-gray-900 mr-4">
                    Davao's trusted platform for barangay profiling.
                  </p>
                </div>

                <div className="flex w-[60%] h-[6vh] bg-gray-900 opacity-90 rounded-lg"></div>
              </div>
             
              


            </div>




            <div className="flex flex-col items-center w-[60%] h-full">

            </div>

        </div>
      </div>

      


    </div>
  );
};

export default Index;
