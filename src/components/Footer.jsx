import React from 'react'

export default function Footer({children}) {
	return (
		<footer className=' mt-[10vh] border- py-10 bg-slate-50 text-xs text-center text-slate-400'>
			{children}
		</footer>
	)
}
