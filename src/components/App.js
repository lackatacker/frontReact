import { useState, useEffect } from 'react'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (

		<div>
			<div>
				
				<div className='lmj-layout-inner'>
					<Cart cart={cart} updateCart={updateCart} />
					<ShoppingList cart={cart} updateCart={updateCart} />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
