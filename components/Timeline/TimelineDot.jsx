
export default function TimelineDot({ children }) {
	return (
		<div className="md:mx-auto w-8 h-8 text-xl text-white flex items-center bg-gray-700 ring-2 ring-blue-300 hover:ring-blue-500 ring-offset-2 hover:ring-offset-4 rounded-full md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0 justify-center">
			{children}
		</div>
	)
}
