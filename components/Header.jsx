

export default function Header() {
	return (
		<div className="mb-10">
			<div className="relative min-h-[75vh] w-full bg-slate-100 flex">
				<div className="absolute bottom-0 flex items-end justify-center w-full bg-gradient-to-t from-white h-1/2">
					<h1 className="flex items-center gap-3 text-4xl text-center md:text-6xl">
						<span className="underline decoration-sky-300 underline-offset-8 decoration-2">Fanni</span>
						<span className="text-4xl">&</span>
						<span className="underline decoration-sky-300 underline-offset-8 decoration-2">Balázs</span></h1>
				</div>
				<div className="hidden w-1/3 bg-cover h-100 lg:block" style={{backgroundImage:"url('/img/mako1.jpeg')"}}></div>
				<div className="w-full bg-center bg-cover md:w-1/2 lg:w-1/3 h-100" style={{backgroundImage:"url('/img/hazassag2.jpeg')"}}></div>
				<div className="hidden w-1/2 bg-cover lg:w-1/3 h-100 md:block" style={{backgroundImage:"url('/img/jordan1.jpeg')"}}></div>
			</div>
		</div>
	)
}
