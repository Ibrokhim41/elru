
import Carousel from 'components/Carousel/index';
import CartContainer from 'components/CartContainer'

const Discounts = () => {

    return (
        <>
            <div className="container mx-auto text-black ctext-xl font-bold my-6">Акции и скидки</div>
            <Carousel />
            <CartContainer />
        </>
    )
}

export default Discounts;