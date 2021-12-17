
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
            <div className="container mx-auto text-black ctext-xl font-bold -mt-10 sm:mt-0">Акции и скидки</div>
            <Carousel />
            <CartContainer />
        </>
    )
}

export default Discounts;