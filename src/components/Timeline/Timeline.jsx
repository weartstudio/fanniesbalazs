import { BsInfinity,BsPeople } from "react-icons/bs";
import { GiDiamondRing,GiRing, GiRose } from "react-icons/gi";
import { IoRoseSharp } from "react-icons/io5";
import TimelineDot from "./TimelineDot";


export default function Timeline() {
	return (
		<div className="container mx-auto px-3 py-6">
			<div className="border-l-2 md:border-t-2 md:border-l-0 border-slate-300 relative flex flex-col md:flex-row gap-4 md:text-center ml-4 md:ml-0">

				<div className="flex md:block">
					<TimelineDot><IoRoseSharp/></TimelineDot>
					<div>
						<p>Megismerkedünk</p>
					</div>
				</div>

				<div className="flex md:block">
					<TimelineDot><GiDiamondRing/></TimelineDot>
					<div>
						<p>Eljegyződünk</p>
					</div>
				</div>

				<div className="flex md:block">
					<TimelineDot><GiRing/></TimelineDot>
					<div>
						<p>Összeházasodunk</p>
					</div>
				</div>

				<div className="md:ml-auto flex md:block mt-7 md:mt-0">
					<TimelineDot><BsInfinity/></TimelineDot>
				</div>

			</div>
		</div>
	)
}
