/// <reference types="vite-plugin-svgr/client" />

import { Theme, useTheme } from '#src/app/providers/ThemeProvider/index.tsx'
import { classNames } from '#src/shared/lib/classNames/classNames.ts'
import { FC } from 'react'

import LightIcon from '#src/shared/assets/icons/theme-light.svg?react'
import DarkIcon from '#src/shared/assets/icons/theme-dark.svg?react'

import cls from './ThemeSwitcher.module.scss'
import Button from '#src/shared/ui/Button/Button.tsx'

interface ThemeSwitcherProps {
	className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
		</Button>
	)
}

export default ThemeSwitcher
