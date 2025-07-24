import React ,{useState}from "react";

const Cal = () => {
    const [input ,setInput] = useState("");
    

    const handleClick = (value) => {
        if (value === "C") {
          setInput("");
        } else if (value === "=") {
          try {
            const sanitizedInput = input.replace(/x/g, "*").replace(/÷/g, "/"); // Fix multiplication & division
            setInput(eval(sanitizedInput).toString()); 
          } catch {
            setInput("Error");
          }
        } else {
          setInput(input + value);
        }
      };

    const buttons = [
        "7", "8", "9", "÷",
        "4", "5", "6", "x",
        "1", "2", "3", "-",
        "C", "0", "=", "+"
      ];
    return (
  <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center
  w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg
  h-auto min-h-[400px] lg:min-h-[500px] 2xl:min-h-[600px]"> 
    <div className="bg-gray-200 h-16 w-full rounded-xl flex items-center justify-end p-4 
          text-lg sm:text-xl md:text-2xl font-semibold mb-4 
          overflow-hidden overflow-x-auto whitespace-nowrap text-right">
 {input || 0}
     </div>
     <div className="grid grid-cols-4 gap-2 w-full">
      {buttons.map((btn,index) => (
        <button
            key={index}
            onClick= {()=> handleClick(btn)}
            className={`p-4 rounded-full text-lg font-semibold shadow-md ${
                btn === "C" ? "bg-gray-900 text-white" :
                btn === "=" ? "bg-gray-200 text-black" :
                btn === "+" ? "bg-green-500 text-white" :
                btn === "x" ? "bg-yellow-500 text-white" :
                btn === "÷" ? "bg-blue-500 text-white" :
                btn === "-" ? "bg-red-500 text-white" :
                "bg-gray-200 text-gray-900"
              }`}
            >
            {btn}
        </button>
      ))}
     </div>
  </div>
    );
}; 

export default Cal;

