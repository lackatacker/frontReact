import { useState } from 'react'
import { TpeList } from '../datas/TpeList'
import TpeItem from './TpeItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import '../styles/Button.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = TpeList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{TpeList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<TpeItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<div className='mini-button' onClick={() => addToCart(name, price)}>Ajouter</div>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
