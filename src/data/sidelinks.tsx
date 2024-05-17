import {
	IconApps,
	IconBarrierBlock,
	IconBoxSeam,
	IconBrowserCheck,
	IconChartHistogram,
	IconChecklist,
	IconComponents,
	IconError404,
	IconExclamationCircle,
	IconHexagonNumber1,
	IconHexagonNumber2,
	IconHexagonNumber3,
	IconHexagonNumber4,
	IconHexagonNumber5,
	IconLayoutDashboard,
	IconNotification,
	IconPalette,
	IconRouteAltLeft,
	IconServerOff,
	IconSettings,
	IconTool,
	IconTruck,
	IconUser,
	IconUsers,
	IconUserShield,
} from '@tabler/icons-react'

export interface NavLink {
	title: string
	label?: string
	href: string
	icon: JSX.Element
}

export interface SideLink extends NavLink {
	sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
	{
		title: 'Dashboard',
		label: '',
		href: '/',
		icon: <IconLayoutDashboard size={18} />,
	},
	{
		title: 'Tasks',
		label: '3',
		href: '/tasks',
		icon: <IconChecklist size={18} />,
	},
	{
		title: 'Extra Components',
		label: '',
		href: '/extra-components',
		icon: <IconComponents size={18} />,
	},
	{
		title: 'Apps',
		label: '',
		href: '/apps',
		icon: <IconApps size={18} />,
	},
	{
		title: 'Authentication',
		label: '',
		href: '',
		icon: <IconUserShield size={18} />,
		sub: [
			{
				title: 'Sign In (email + password)',
				label: '',
				href: '/sign-in',
				icon: <IconHexagonNumber1 size={18} />,
			},
			{
				title: 'Sign In (Box)',
				label: '',
				href: '/sign-in-2',
				icon: <IconHexagonNumber2 size={18} />,
			},
			{
				title: 'Sign Up',
				label: '',
				href: '/sign-up',
				icon: <IconHexagonNumber3 size={18} />,
			},
			{
				title: 'Forgot Password',
				label: '',
				href: '/forgot-password',
				icon: <IconHexagonNumber4 size={18} />,
			},
			{
				title: 'OTP',
				label: '',
				href: '/otp',
				icon: <IconHexagonNumber5 size={18} />,
			},
			{
				title: 'Not Found',
				label: '',
				href: '/404',
				icon: <IconError404 size={18} />,
			},
			{
				title: 'Internal Server Error',
				label: '',
				href: '/500',
				icon: <IconServerOff size={18} />,
			},
			{
				title: 'Maintenance Error',
				label: '',
				href: '/503',
				icon: <IconBarrierBlock size={18} />,
			},
		],
	},
	{
		title: 'Coming Soon',
		label: '10',
		href: '/requests',
		icon: <IconRouteAltLeft size={18} />,
		sub: [
			{
				title: 'Users',
				label: '',
				href: '/users',
				icon: <IconUsers size={18} />,
			},
			{
				title: 'Analysis',
				label: '',
				href: '/analysis',
				icon: <IconChartHistogram size={18} />,
			},
		],
	},
	{
		title: 'Not Working',
		href: '/requests',
		icon: <IconRouteAltLeft size={18} />,
		sub: [
			{
				title: 'Trucks',
				label: '9',
				href: '/trucks',
				icon: <IconTruck size={18} />,
			},
			{
				title: 'Cargos',
				label: '',
				href: '/cargos',
				icon: <IconBoxSeam size={18} />,
			},
		],
	},
	{
		title: 'Settings',
		label: '',
		href: '/settings',
		icon: <IconSettings size={18} />,
		sub: [
			{
				title: 'Profile',
				label: '',
				icon: <IconUser size={18} />,
				href: '/settings',
			},
			{
				title: 'Account',
				icon: <IconTool size={18} />,
				href: '/settings/account',
			},
			{
				title: 'Appearance',
				icon: <IconPalette size={18} />,
				href: '/settings/appearance',
			},
			{
				title: 'Notifications',
				icon: <IconNotification size={18} />,
				href: '/settings/notifications',
			},
			{
				title: 'Display',
				icon: <IconBrowserCheck size={18} />,
				href: '/settings/display',
			},
			{
				title: 'Error Example',
				icon: <IconExclamationCircle size={18} />,
				href: '/settings/error-example',
			},
			{
				title: 'Not Found',
				label: '',
				href: '/404',
				icon: <IconError404 size={18} />,
			},
			{
				title: 'Internal Server Error',
				label: '',
				href: '/500',
				icon: <IconServerOff size={18} />,
			},
			{
				title: 'Maintenance Error',
				label: '',
				href: '/503',
				icon: <IconBarrierBlock size={18} />,
			},
		],
	},
]
