import { Layout, LayoutBody } from '@/components/custom/layout'
import { Outlet } from 'react-router-dom'

export default function Accenture() {
	return (
		<Layout>
			{/* ===== Main ===== */}
			<LayoutBody className='space-y-4'>
				<Outlet />
			</LayoutBody>
		</Layout>
	)
}
