import { classNames } from '#src/shared/lib/classNames/classNames.ts'
import { useTheme } from '#src/app/providers/ThemeProvider/lib/useTheme.ts'
import { AppRouter } from '#src/app/providers/router/index.ts'
import { Navbar } from '#src/widgets/Navbar/index.ts'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
