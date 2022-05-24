import '../../styles/payment-page.css'
function Payment(){
    return (
        <div className='iframe-div'>
            <iframe     src="https://pay.sandbox.checkout.com/page/hpp_BYBhNFC44znG"
                        title="test-payment-page"
                        className='iframe-payment'
                    >

            </iframe>
        </div>
      );
}

export default Payment