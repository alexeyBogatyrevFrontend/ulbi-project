import { classNames } from '#src/shared/lib/classNames/classNames.ts'
import { FC } from 'react'

import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from '#src/shared/ui/AppLink/AppLink.tsx'

interface NavbarProps {
	className?: string
}

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					О сайте
				</AppLink>
			</div>
		</div>
	)
}

export default Navbar