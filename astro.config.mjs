// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightNextjsTheme from 'starlight-nextjs-theme'
import vercel from '@astrojs/vercel'
import umami from '@yeskunall/astro-umami'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		umami({ id: '2bcaa502-ab29-4e4e-b84d-5a8545c4e7dd' }),
		starlight({
			title: 'usestyled',
			description:
				'A powerful library for creating React/React Native components',
			logo: {
				dark: './src/assets/logo.png',
				light: './src/assets/logo_dark.png',
				alt: 'usestyled logo',
				replacesTitle: true,
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://usestyled.com/ogimage.png',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				themes: ['dracula', 'light-plus'],
			},
			plugins: [starlightNextjsTheme()],
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
