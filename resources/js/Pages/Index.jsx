import MagnifyingGlass from "../images/MagnifyingGlass.svg"
import BackgroundImage from "../images/IndexBackground6.jpg";

const Index = () => {
  return (
    <div 
    className="flex flex-col items-center justify-start h-screen w-screen bg-cover bg-center">
      <div className="flex flex-row w-screen border-0.5 border-gray-600  h-20">
          <div className="flex flex-col items-end px-8 justify-center w-1/5 border-r-4 border-y-[3px] border-[#3b4d5c]">
            <h1 className="font-roboto text-2xl font-semibold text-[#1a2e3b] tracking-tight">
              LOCALPULSE
            </h1>
          </div>

          <div className="flex flex-col items-end px-10 justify-center w-4/5 border-y-[3px] border-[#3b4d5c] ml-auto"> 
            <div className="flex space-x-8 ">
              <a href="#home" className="text-[#1a2e3b] font-semibold text-lg hover:text-[#3b4d5c]">Home</a>
              <a href="#about" className="text-[#1a2e3b] font-semibold text-lg hover:text-[#3b4d5c]">About</a>
              <a href="#contact" className="text-[#1a2e3b] font-semibold text-lg hover:text-[#3b4d5c]">Contact</a>
            </div>
          </div>
      </div>
      <div 
        className="flex flex-col items-center justify-center w-screen h-[100vh] bg-cover bg-[position:center_88%]  bg-neutral-900"
        style={{ backgroundImage: `url(${BackgroundImage})` }}>
      
        <div className="flex flex-row items-center justify-center w-full h-full">
            <div className="flex flex-col justify-center items-center w-[40%] h-full bg-opacity-50 ">

            
              <div className="flex flex-col items-center justify-start w-[90%] h-[90%] mr-16">
                {/* Welcome Text */}
                <div className="flex flex-col items-center justify-center w-[80%] h-[30%] mt-40">
                  <h1 className="text-6xl font-bold text-gray-900 font-roboto drop-shadow-lg">
                    LocalPulse
                  </h1>
                  <p className="text-sm text-gray-900 mr-4">
                  Davao's trusted platform for barangay profiling.
                </p>
                </div>

                
                <a href="/login" className="flex border-2 border-black items-center justify-center w-[60%] h-[6vh] bg-gray-900 bg-opacity-80 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg">
                  <div>
                    <h1 className="text-xl font-semibold text-white font-roboto">
                      Get Started
                    </h1>
                  </div>
                </a>

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
