import React from 'react'
import { IoIosImages } from "react-icons/io";

function Galleries() {
	return (
		<div className="container mx-auto">
			<h2 className='mb-10 text-2xl text-center'>Esküvői képek</h2>
			<div className='flex flex-col justify-center gap-5 text-center md:flex-row'>

				<div className="flex justify-content-center md:flex-col gap-5 min-w-[150px] ">
					<IoIosImages className='text-6xl md:mx-auto'/>
					Esküvő
				</div>

				<div className="flex justify-content-center md:flex-col gap-5 min-w-[150px] ">
					<IoIosImages className='text-6xl md:mx-auto'/>
					Keszthely
				</div>

				<div className="flex justify-content-center md:flex-col gap-5 min-w-[150px]">
					<IoIosImages className='text-6xl md:mx-auto'/>
					Szentlőrinckáta
				</div>

			</div>
		</div>
	)
}

export default Galleries