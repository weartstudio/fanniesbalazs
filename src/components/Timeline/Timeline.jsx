import { BsInfinity,BsAirplane } from "react-icons/bs";
import { GiDiamondRing,GiRing } from "react-icons/gi";
import { IoRoseSharp } from "react-icons/io5";
import TimelineDot from "./TimelineDot";


export default function Timeline() {
	return (
		<div className="container px-3 my-[12vh] mx-auto">
			<div className="relative flex flex-col gap-5 ml-4 border-l-2 md:border-t-2 md:border-l-0 border-slate-300 md:flex-row md:text-center md:ml-0">

				<div className="flex md:block">
					<TimelineDot><IoRoseSharp/></TimelineDot>
					<div>
						<p className="text-xs font-semibold uppercase text-slate-400">2015. Jan. 23.</p>
						<p>Megismerkedünk</p>
					</div>
				</div>

				<div className="flex md:block">
					<TimelineDot><GiDiamondRing/></TimelineDot>
					<div>
						<p className="text-xs font-semibold uppercase text-slate-400">2021. Okt. 29.</p>
						<p>Eljegyződünk</p>
					</div>
				</div>

				<div className="flex md:block">
					<TimelineDot><GiRing/></TimelineDot>
					<div>
						<p className="text-xs font-semibold uppercase text-slate-400">2023. Jún. 03.</p>
						<p>Összeházasodunk</p>
					</div>
				</div>

				<div className="flex md:block">
					<TimelineDot><BsAirplane/></TimelineDot>
					<div>
						<p className="text-xs font-semibold uppercase text-slate-400">2023. Jún. 07.</p>
						<p>Nászútra megyünk</p>
					</div>
				</div>

				<div className="flex md:ml-auto md:block mt-7 md:mt-0">
					<TimelineDot><BsInfinity/></TimelineDot>
				</div>

			</div>
		</div>
	)
}
