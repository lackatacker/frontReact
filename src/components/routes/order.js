import '../../styles/Order.css'
import {Link} from 'react-router-dom'
function Order(){
    return(
        <div className='center-items'>
            <h1>Votre ordre final est: </h1>
            <div className="order">
            <br/>
                ID de l'ordre: 123456789    <br/><br/>
                Montant total: 255 MAD      <br/><br/>
                Nombre d'items: 4           <br/><br/>
                email address: ksadki@s2m.ma       
            </div>
                <Link className='proceed-btn' to='/payment'>Proceed to payment</Link>
        </div>
    )
}

export default Order