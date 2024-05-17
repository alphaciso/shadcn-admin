import { createBrowserRouter } from 'react-router-dom'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'

const router = createBrowserRouter([
	// Auth routes
	{
		path: '/sign-in',
		lazy: async () => ({
			Component: (await import('./pages/auth/sign-in')).default,
		}),
	},
	{
		path: '/sign-in-2',
		lazy: async () => ({
			Component: (await import('./pages/auth/sign-in-2')).default,
		}),
	},
	{
		path: '/sign-up',
		lazy: async () => ({
			Component: (await import('./pages/auth/sign-up')).default,
		}),
	},
	{
		path: '/forgot-password',
		lazy: async () => ({
			Component: (await import('./pages/auth/forgot-password')).default,
		}),
	},
	{
		path: '/otp',
		lazy: async () => ({
			Component: (await import('./pages/auth/otp')).default,
		}),
	},

	// Main routes
	{
		path: '/',
		lazy: async () => {
			const AppShell = await import('./components/app-shell')
			return { Component: AppShell.default }
		},
		errorElement: <GeneralError />,
		children: [
			{
				index: true,
				lazy: async () => ({
					Component: (await import('./pages/dashboard')).default,
				}),
			},
			{
				path: 'Overview',
				lazy: async () => {
					const AppShell = await import('./pages/dashboard')
					return { Component: AppShell.default }
				},
			},
			{
				path: 'tasks',
				lazy: async () => ({
					Component: (await import('@/pages/tasks')).default,
				}),
			},
			{
				path: 'apps',
				lazy: async () => ({
					Component: (await import('@/pages/apps')).default,
				}),
			},
			{
				path: 'extra-components',
				lazy: async () => ({
					Component: (await import('@/pages/extra-components'))
						.default,
				}),
			},
			{
				path: 'accenture',
				lazy: async () => ({
					Component: (await import('./pages/accenture')).default,
				}),
				errorElement: <GeneralError />,
				children: [
					{
						index: true,
						lazy: async () => ({
							Component: (
								await import('./pages/accenture/clients')
							).default,
						}),
					},
					{
						path: 'clients',
						lazy: async () => ({
							Component: (
								await import('./pages/accenture/clients')
							).default,
						}),
					},
					{
						path: 'projects',
						lazy: async () => ({
							Component: (
								await import('./pages/accenture/projects')
							).default,
						}),
					},
					{
						path: 'workstreams',
						lazy: async () => ({
							Component: (
								await import('./pages/accenture/workstreams')
							).default,
						}),
					},
					{
						path: 'engagements',
						lazy: async () => ({
							Component: (
								await import('./pages/accenture/engagements')
							).default,
						}),
					},
					{
						path: 'reports',
						lazy: async () => ({
							Component: (
								await import('./pages/accenture/reports')
							).default,
						}),
					},
					{
						path: 'error-example',
						lazy: async () => ({
							Component: (
								await import('./pages/settings/error-example')
							).default,
						}),
						errorElement: (
							<GeneralError className='h-[50svh]' minimal />
						),
					},
				],
			},
			{
				path: 'settings',
				lazy: async () => ({
					Component: (await import('./pages/settings')).default,
				}),
				errorElement: <GeneralError />,
				children: [
					{
						index: true,
						lazy: async () => ({
							Component: (
								await import('./pages/settings/profile')
							).default,
						}),
					},
					{
						path: 'account',
						lazy: async () => ({
							Component: (
								await import('./pages/settings/account')
							).default,
						}),
					},
					{
						path: 'appearance',
						lazy: async () => ({
							Component: (
								await import('./pages/settings/appearance')
							).default,
						}),
					},
					{
						path: 'notifications',
						lazy: async () => ({
							Component: (
								await import('./pages/settings/notifications')
							).default,
						}),
					},
					{
						path: 'display',
						lazy: async () => ({
							Component: (
								await import('./pages/settings/display')
							).default,
						}),
					},
					{
						path: 'error-example',
						lazy: async () => ({
							Component: (
								await import('./pages/settings/error-example')
							).default,
						}),
						errorElement: (
							<GeneralError className='h-[50svh]' minimal />
						),
					},
				],
			},
		],
	},

	// Error routes
	{ path: '/500', Component: GeneralError },
	{ path: '/404', Component: NotFoundError },
	{ path: '/503', Component: MaintenanceError },

	// Fallback 404 route
	{ path: '*', Component: NotFoundError },
])

export default router
