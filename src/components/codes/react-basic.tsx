// @ts-nocheck
import React from 'react'
import { useStyled } from 'use-styled'

export const Button = useStyled('button', {
	base: {
		className: 'active:opacity-80 active:scale-[0.98] transition-all',
	},
	variants: {
		intent: {
			primary: {
				className: 'bg-blue-500 text-white',
			},
			secondary: {
				className: 'bg-gray-200 text-black',
			},
		},
	},
})

export default function Example() {
	return (
		<div>
			<Button intent='primary'>Hello World</Button>
			<Button intent='secondary'>Hello World</Button>
		</div>
	)
}
