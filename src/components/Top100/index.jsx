
import animateScrollTo from 'animated-scroll-to';
import CartContainer from 'components/CartContainer';
import { useEffect } from 'react';


const Top100 = () => {

    useEffect(() => {
        animateScrollTo(0)
    }, [])

    return (
        <div>
            {/* title */}
            <div className="container mx-auto text-black ctext-xl font-bold my-8">Топ 100 книг по саморазвитию</div>
            {/* body */}
            <CartContainer />
        </div>
    )
}

export default Top100;