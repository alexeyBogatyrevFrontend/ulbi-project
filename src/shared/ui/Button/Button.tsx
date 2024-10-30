import { classNames } from '#src/shared/lib/classNames/classNames.ts'
import { ButtonHTMLAttributes, FC } from 'react'

import cls from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({
	className = '',
	children,
	theme = ThemeButton.CLEAR,
	...otherProps
}) => {
	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
