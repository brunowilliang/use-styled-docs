// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightNextjsTheme from 'starlight-nextjs-theme'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		starlight({
			logo: {
				dark: './src/assets/logo.png',
				light: './src/assets/logo_dark.png',
				alt: 'use-styled logo',
				replacesTitle: true,
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://usestyled.vercel.app/ogimage.png',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				themes: ['dracula', 'light-plus'],
			},
			plugins: [starlightNextjsTheme()],
			title: 'use-styled',
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
