import { FaCircle } from "react-icons/fa"
import payment_img from "assets/images/payment.png"

const Payment = () => {

    return (
        <div className="container mx-auto">
            {/* title */}
            <div className="text-black ctext-xl font-bold mt-8">Способы оплаты на нашем сервисе:</div>
            <div className="flex flex-col py-8">
                <div className="flex items-center text-grey-dark ctext-xl"><FaCircle className="text-blue text-sm sm:text-2xl mr-4" />Click</div>
                <div className="flex items-center text-grey-dark ctext-xl"><FaCircle className="text-blue text-sm sm:text-2xl mr-4" />Payme</div>
                <div className="flex items-center text-grey-dark ctext-xl"><FaCircle className="text-blue text-sm sm:text-2xl mr-4" />С помощью снятия средств с вашего баланса</div>
            </div>
            <div className="text-grey-dark ctext-lg font-medium mb-4"><span className="text-red">!</span> Посмотреть ваш баланс, а так же пополнить его вы сможете после
            <br />регистрации в вашем личном профиле:</div>
            <img src={payment_img} alt="payment-img" />
        </div>
    )
}

export default Payment;
