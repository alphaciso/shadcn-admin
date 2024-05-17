import { Outlet } from 'react-router-dom'
import { Search } from '@/components/search'
import { Separator } from '@/components/ui/separator'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'

export default function Settings() {
	return (
		<Layout fadedBelow fixedHeight>
			<LayoutHeader>
				<div className='ml-auto flex items-center space-x-4'>
					<Search />
					<ThemeSwitch />
					<UserNav />
				</div>
			</LayoutHeader>

			<LayoutBody className='flex flex-col' fixedHeight>
				<div className='space-y-0.5'>
					<h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
						Settings
					</h1>
					<p className='text-muted-foreground'>
						Manage your account settings and set e-mail preferences.
					</p>
				</div>
				<Separator className='my-6' />
				<div className='flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0'>
					<div className='w-full p-1 pr-4 lg:max-w-xl'>
						<div className='pb-16'>
							<Outlet />
						</div>
					</div>
				</div>
			</LayoutBody>
		</Layout>
	)
}
