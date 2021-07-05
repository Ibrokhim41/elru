
import animateScrollTo from 'animated-scroll-to';
import Carousel from 'components/Carousel/index';
import CartContainer from 'components/CartContainer'
import { useEffect } from 'react';

const Discounts = () => {

    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <>
            <div className="container mx-auto text-black ctext-xl font-bold my-6">Акции и скидки</div>
            <Carousel />
            <CartContainer />
        </>
    )
}

export default Discounts;