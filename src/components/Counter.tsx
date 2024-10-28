import { useState } from 'react'

import classes from './Counter.module.scss'

const Counter = () => {
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<h1>{counter}</h1>
			<button
				className={classes.button}
				onClick={() => setCounter(prev => prev + 1)}
			>
				increase
			</button>
			<button
				className={classes.button}
				onClick={() => setCounter(prev => prev - 1)}
			>
				decrease
			</button>
		</div>
	)
}

export default Counter
