'use client'

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import DeployToken from "@/components/deployToken";

export default function TokenLaunch() {
  return (
    <main className="h-full w-full flex flex-col">
      <Navbar />
      <section className="w-full px-6 xl:px-0 md:w-[1000px] xl:w-[1300px] m-auto mt-4">
        <div className="flex justify-between flex-row">
          <h1 className="md:text-6xl xl:text-[78px] relative z-10 font-bold text-black flex flex-col gap-2.5">
            <span className="max-w-max px-1.5 bg-white">Meme Token Launch</span>
            <span className="flex gap-2">
              <span className="bg-custom-green px-1.5 w-max xl:text-5xl">
                Memes
              </span>
              <span className="bg-title px-1.5 w-max xl:text-5xl">
                on Rootstock
              </span>
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-custom-green text-white rounded-md">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <div className="flex w-[760px]">
            <DeployToken />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
