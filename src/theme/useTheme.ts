import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	// Обрабатываем случай, если theme или setTheme могут быть undefined
	if (!theme || !setTheme) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toggleTheme,
	}
}
