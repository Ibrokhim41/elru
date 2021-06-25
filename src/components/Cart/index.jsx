import "./style.css"
import cart_img from "assets/images/Rectangle 19.png"

const Cart = () => {

    return (
        <div>
            <div 
                style={{ backgroundImage: `url(assets/images/Rectangle 19.png)`}}
                className="cart bg-center bg-cover">

            </div>
            {/* <img src={cart_img} alt="cart-image" /> */}
        </div>
    )
}

export default Cart;