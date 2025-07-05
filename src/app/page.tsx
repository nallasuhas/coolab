import Image from "next/image";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";

export default function LandingPage() {
  return (
   
       <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] ">
           <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
          <div className="text-center">
            <Image
              className="inline-block"
              src="/icon.png"
              width="200"
              height="200"
              alt="dev finder logo"
            />

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Find other awesome devs to pair with online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              This platform is for sharing your screen and working with other
              random developers online so that you can work together
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/browse"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        
       </Vortex>
     </div>
    
  );
}