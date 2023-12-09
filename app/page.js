import Timeline from "@/components/Timeline/Timeline"
import Separator from "@/components/Separator"
import Galleries from "@/components/Galleries"
import Video from "@/components/Video/Video"

export default function Home() {
  return (
    <>
      <Timeline />
      <Separator />
      <Galleries />
      <Separator />
      <Video />
    </>
  )
}
