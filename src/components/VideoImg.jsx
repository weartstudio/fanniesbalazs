export default function VideoImg({ url, img, children }) {
	return (
		<div className="relative">
			<a href={url}>
				<img src={img} className='w-full' alt="" />
				<div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-black">
					<span className="text-sm text-white">
						{children}
					</span>
				</div>
			</a>
		</div>
	)
}
