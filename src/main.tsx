import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/ThemeProvider/index.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
)
