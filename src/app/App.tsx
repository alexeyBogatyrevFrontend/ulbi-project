import { Link } from 'react-router-dom'
import { classNames } from '#src/shared/lib/classNames/classNames.ts'
import { useTheme } from '#src/app/providers/ThemeProvider/lib/useTheme.ts'
import { AppRouter } from '#src/app/providers/router/index.ts'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>

			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>

			<AppRouter />
		</div>
	)
}

export default App
