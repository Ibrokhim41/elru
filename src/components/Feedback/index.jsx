import { FaPhoneAlt} from "react-icons/fa"

const Feedback = () => {

    return (
        <div className="container mx-auto my-24">
            <div className="text-black ctext-xl font-bold text-center pb-8">Свяжитесь с нами любым удобным способом:</div>
            <div className="text-grey-dark ctext-xl font-medium text-center">1. По номеру телефона</div>
            <div className="text-grey-dark ctext-xl font-medium flex items-center justify-center">
                <FaPhoneAlt className="text-blue text-2xl mr-1" />
                <a href="tel:+998993144263">+998 99 314 42 63</a>
            </div>
            <div className="text-grey-dark ctext-xl font-medium my-4 text-center">2. Обратитесь нашему менеджеру в чате:</div>
            <button className="bg-blue py-2 px-5 text-white rounded-md ctext-base block mx-auto">Написать менеджеру</button>
        </div>
    )
}

export default Feedback;
