import React from 'react'
import ReactDOM from 'react-dom'
import Banner from '../src/components/Banner'
import logo from '../src/assets/logoS2M.png'
import './styles/index.css'
import App from './components/App'
import Payment from './components/routes/payment'
import Order from './components/routes/order'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
		<Banner>
					<img src={logo} alt='la maison de la monétique' className='lmj-logo' />
					<h1 className='lmj-title'>La maison de la monétique</h1>
		</Banner>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='payment' element={<Payment />} />
				<Route path='order' element={<Order />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
