import Header from './components/Header'
import Timeline from './components/Timeline/Timeline'
import { TfiGallery } from "react-icons/tfi";

export default function App() {
  return (
    <>
      <Header></Header>
      <Timeline />
      <div className='container flex gap-7 mx-auto mt-16 justify-evenly text-center'>
        <div className="flex flex-col gap-5">
          <TfiGallery className='text-6xl mx-auto'/>
          Esküvő
        </div>

        <div className="flex flex-col gap-5">
          <TfiGallery className='text-6xl mx-auto'/>
          Keszthely
        </div>

        <div className="flex flex-col gap-5">
          <TfiGallery className='text-6xl mx-auto'/>
          Szentlőrinckáta
        </div>
      </div>
    </>
  )
}

