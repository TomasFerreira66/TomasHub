import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="h-screen flex bg-gray-200 items-center justify-center">

    <div className="flex flex-col gap-6">
      
      <Link href="/hub/3dmodelviewer" className="group">
        <div className="cursor-pointer p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-transform transform group-hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">Go to Second Page</h2>
          <p className="text-gray-600 mt-2">Click this card to navigate.</p>
        </div>
      </Link>
  
      <Link href="/hub/3dmodelviewer" className="group">
        <div className="cursor-pointer p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-transform transform group-hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">Go to Second Page</h2>
          <p className="text-gray-600 mt-2">Click this card to navigate.</p>
        </div>
      </Link>
  
    </div>
  
  </div>
  );
}
