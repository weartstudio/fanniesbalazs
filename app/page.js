import Header from "@/components/Header"
import Timeline from "@/components/Timeline/Timeline"
import Separator from "@/components/Separator"
import Footer from "@/components/Footer"
import VideoImg from "@/components/VideoImg"
import { IoIosImages } from "react-icons/io";

export default function Home() {
  return (
    <>

      <Header />
      <Timeline />

      <Separator />

      <div className="container mx-auto">
        <h2 className='mb-10 text-2xl text-center'>Esküvői képek</h2>
        <div className='flex justify-center gap-5 text-center'>
          <div className="flex flex-col gap-5 min-w-[150px]">
            <IoIosImages className='mx-auto text-6xl'/>
            Esküvő
          </div>

          <div className="flex flex-col gap-5 min-w-[150px]">
            <IoIosImages className='mx-auto text-6xl'/>
            Keszthely
          </div>

          <div className="flex flex-col gap-5 min-w-[150px]">
            <IoIosImages className='mx-auto text-6xl'/>
            Szentlőrinckáta
          </div>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto text-center">
        <h2 className='mb-10 text-2xl'>Utazásaink</h2>
        <div className='grid grid-cols-4 gap-6'>

          <VideoImg
            img="https://img.youtube.com/vi/JgWmC9r6vd8/mqdefault.jpg"
            url="https://www.youtube.com/watch?v=JgWmC9r6vd8"
            >
            Nászúton Jordániában
          </VideoImg>

          <VideoImg
            img="https://img.youtube.com/vi/kA44WF50NYY/mqdefault.jpg"
            url="https://www.youtube.com/watch?v=kA44WF50NYY"
            >
            Egy nap milánóban
          </VideoImg>

          <VideoImg
            img="https://img.youtube.com/vi/QtRwSiynD-k/mqdefault.jpg"
            url="https://www.youtube.com/watch?v=QtRwSiynD-k"
            >
            Athén - az örök szerelem
          </VideoImg>

          <VideoImg
            img="https://img.youtube.com/vi/UME7hIJxj0Y/mqdefault.jpg"
            url="https://www.youtube.com/watch?v=UME7hIJxj0Y"
            >
            Rodosz 3 nap alatt
          </VideoImg>

          <VideoImg
            img="https://img.youtube.com/vi/QYXlWnaKCIw/mqdefault.jpg"
            url="https://www.youtube.com/watch?v=QYXlWnaKCIw"
            >
            Megnéztük Máltát 3 nap alatt
          </VideoImg>

          <VideoImg
            img="https://img.youtube.com/vi/B3IxLwhPrGI/mqdefault.jpg"
            url="https://www.youtube.com/watch?v=B3IxLwhPrGI"
            >
            Bejártuk Athént 3 nap alatt
          </VideoImg>

        </div>
      </div>

      <Footer>
        Ez az oldal digitális archívumként szolgál számunkra, a segítségével egyszerűbb megőrizni a legfontosabb emlékeinket.
      </Footer>

    </>
  )
}
