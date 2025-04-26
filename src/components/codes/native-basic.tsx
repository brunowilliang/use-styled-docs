// @ts-nocheck
import React from 'react'
import { Text, Pressable } from 'react-native'
import { useStyled } from 'use-styled'

export const Button = useStyled(Pressable, {
	base: {
		className: 'active:opacity-80 active:scale-[0.98] transition-all',
	},
	variants: {
		intent: {
			primary: {
				className: 'bg-blue-500',
			},
			secondary: {
				className: 'bg-gray-200',
			},
		},
	},
})

export const ButtonText = useStyled(Text, {
	variants: {
		intent: {
			primary: {
				className: 'text-white',
			},
			secondary: {
				className: 'text-black',
			},
		},
	},
})

export default function Example() {
	return (
		<Button intent='primary'>
			<ButtonText intent='primary'>Hello World</ButtonText>
		</Button>
	)
}
