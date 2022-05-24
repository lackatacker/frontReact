import verifone from '../assets/verifone.png'
import ingenico from '../assets/ingenico.png'
import ingenicoApos from '../assets/ingenicoApos.png'
import nexgoN3 from '../assets/nexgoN3.png'
import vx520 from '../assets/vx520.png'
import vx805 from '../assets/vx805.png'
import ingenicoMove3500 from '../assets/ingenicoMove3500.png'
import ict220 from '../assets/ict220.png'
import vx820 from '../assets/vx820.png'

export const TpeList = [
	{
		name: 'verifone',
		category: 'classique',
		id: '1ed',
		bestSale: true,
		cover: verifone,
		price: 150
	},
	{
		name: 'ingenico desk',
		category: 'classique',
		id: '2ab',
		cover: ingenico,
		price: 160
	},

	{
		name: 'ingenico apos',
		category: 'android',
		id: '3sd',
		cover: ingenicoApos,
		price: 299
	},
	{
		name: 'nexgoN3',
		category: 'android',
		id: '4kk',
		cover: nexgoN3,
		price: 200
	},
	{
		name: 'vx805',
		category: 'pinpad',
		id: '5pl',
		cover: vx805,
		price: 119
	},

	{
		name: 'vx520',
		category: 'pinpad',
		id: '8fp',
		cover: vx520,
		price: 119
	},
	{
		name: 'ingenicoMove3500',
		category: 'mobile',
		id: '7ie',
		bestSale: true,
		cover: ingenicoMove3500,
		price: 199
	},
	{
		name: 'vx820',
		category: 'mobile',
		id: '9vn',
		cover: vx820,
		price: 99
	},

	{
		name: 'ict220',
		category: 'classique',
		id: '6uo',
		cover: ict220,
		price: 190
	}
]
