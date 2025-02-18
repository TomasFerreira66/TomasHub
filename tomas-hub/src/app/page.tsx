import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div className="h-screen flex bg-gray-200 overflow-y-auto">
  
  {/* Left Section - Fixed */}
  <div className="flex w-1/4 h-screen flex-col items-center justify-center border border-black gap-6 fixed left-0 top-0">
  
  </div>

  {/* Middle Section - Scrollable */}
  <div className="w-1/2 flex flex-col h-fit m-4 items-center justify-center mx-auto gap-6">
    
    
    <Link href="/hub/tailwindbtts" className="group w-full">
      <div className="cursor-pointer p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-transform transform group-hover:scale-105 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Go to Second Page</h2>
        <p className="text-gray-600 mt-2">Click this card to navigate.</p>
      </div>
    </Link>
  
    

    
    
  </div>
  

  {/* Right Section - Fixed */}
  <div className="w-1/4 h-screen flex flex-col items-center justify-center border border-black gap-6 fixed right-0 top-0">
    
  </div>

</div>
  );
}
