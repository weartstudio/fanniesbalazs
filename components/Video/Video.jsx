import React from 'react'
import VideoImg from './VideoImg'

function Video() {
	return (
		<div className="container mx-auto text-center">
			<h2 className='mb-10 text-2xl'>Utazásaink</h2>
			<div className='grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4'>

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
	)
}

export default Video