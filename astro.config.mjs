// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightNextjsTheme from 'starlight-nextjs-theme'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightNextjsTheme()],
			title: 'use-styled ⚡️',
			description:
				'A powerful library for creating React/React Native components',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/brunowilliang/use-styled',
				},
			],
			sidebar: [
				{
					label: 'Introduction',
					slug: 'introduction',
					autogenerate: {
						directory: 'introduction',
					},
				},
				{
					label: 'Getting started',
					slug: 'getting-started',
					autogenerate: {
						directory: 'get-started',
					},
				},
				{
					label: 'useStyled',
					slug: 'use-styled',
					autogenerate: {
						directory: 'use-styled',
					},
				},
				{
					label: 'useSlot',
					slug: 'use-slot',
					autogenerate: {
						directory: 'use-slot',
					},
				},
				{
					label: 'Basic Usage',
					slug: 'basic-usage',
					autogenerate: {
						directory: 'basic-usage',
					},
				},
				{
					label: 'Advanced Usage',
					slug: 'advanced-usage',
					autogenerate: {
						directory: 'advanced-usage',
					},
				},
				{
					label: 'Typescript',
					slug: 'typescript',
					autogenerate: {
						directory: 'typescript',
					},
				},
				{
					label: 'Acknowledgements',
					slug: 'acknowledgements',
					autogenerate: {
						directory: 'acknowledgements',
					},
				},
			],
		}),
	],
})
