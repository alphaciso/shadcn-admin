import {
	IconApps,
	IconBarrierBlock,
	IconBrowserCheck,
	IconChecklist,
	IconComponents,
	IconError404,
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
	IconUser,
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
		title: 'Integrations',
		label: '',
		href: '/apps',
		icon: <IconApps size={18} />,
	},
	{
		title: 'Accenture',
		label: '10',
		href: '/accenture',
		icon: <IconRouteAltLeft size={18} />,
		sub: [
			{
				title: 'Clients',
				label: '3',
				href: '/accenture/clients',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Projects',
				label: '3',
				href: '/accenture/projects',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Workstreams',
				label: '3',
				href: '/accenture/workstreams',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Engagements',
				label: '3',
				href: '/accenture/engagements',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Reports',
				label: '3',
				href: '/accenture/reports',
				icon: <IconChecklist size={18} />,
			},
		],
	},
	{
		title: 'Governance',
		label: '10',
		href: '/requests',
		icon: <IconRouteAltLeft size={18} />,
		sub: [
			{
				title: 'Regulations',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Policies',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Processes',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'People',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Processes',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Assets',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Risks',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
			{
				title: 'Threats',
				label: '3',
				href: '/tasks',
				icon: <IconChecklist size={18} />,
			},
		],
	},
	{
		title: 'Extra Components',
		label: '',
		href: '/extra-components',
		icon: <IconComponents size={18} />,
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
		],
	},
]
