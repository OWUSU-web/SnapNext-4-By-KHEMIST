import { auth } from "@/auth";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth(); // Fetch session data
  
  return (
    <div className='bg-[#fffc00]'> {/* Background color */}
      <div className='min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto'>
        <Navbar /> {/* Navbar component */}
        <main className='flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4'>
          <div className='flex-1 md:text-left text-center h-full'>
            <h1 className='text-4xl md:text-6xl font-bold'>Welcome to SnapNext 4</h1>
            <p className='mt-4 text-xl font-semibold'>
            Create charts with friends and gather feedback together. Share, discuss, and improve your visuals collaboratively.
            </p>
            <div className='mt-4'>
              <p className='mt-2 text-lg font-semibold'>What are you waiting for?😂</p>
            </div>
            {/* Conditional rendering based on session */}
            {!session ? (
              <Button
                asChild
                className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
              >
                <Link href={"/login"} className='max-w-max'>
                  <Image src='/GGG-removebg-preview.png' width={20} height={20} alt='GGG-removebg-preview.png' />
                  Log in to explore
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
              >
                <Link href={"/chat"} className='max-w-max'>
                  <Image src='/GGG-removebg-preview.png' width={20} height={20} alt='GGG-removebg-preview.png' />
                  Start chatting
                </Link>
              </Button>
            )}
          </div>
          <div className='flex-1 md:w-full md:flex justify-center'>
            <Image 
              alt='Programming illustration' 
              width={600}  // Further increased width
              height={570} // Further increased height
              src='/GGG-removebg-preview.png' 
              className='w-full max-w-xs h-auto' 
            />
          </div>
        </main>
      </div>
    </div>
  );
}
