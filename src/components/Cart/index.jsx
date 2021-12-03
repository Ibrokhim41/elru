import "./style.css"
import { useHistory } from 'react-router-dom';

const Cart = ({
    img = "https://i.pinimg.com/736x/3a/b7/af/3ab7af70652b87ba70afd133e0258afc.jpg",
    author = "Скотт Вестерфельд",
    classAdd = "",
    name = "Уродина, в поисках пути к счастью и процветанию пути к счастью и процветанию"
    }) => {

    const route = useHistory()

    return (
        // <div className="container mx-auto flex flex-wrap justify-between">
        <div className={`cart-container mx-auto ${classAdd} mb-4`}>
            <div
                onClick={() => route.push('/book')}
                style={{ backgroundImage: `url(${img})` }}
                className="cart relative bg-center bg-cover bg-no-repeat cursor-pointer"
            >
                <div className="absolute bottom-3">
                    <div className="bg-red-dark text-white ctext-xs font-bold py-1 px-2 rounded-r-lg">Бестселлер</div>
                    <div className="inline-block bg-green text-white ctext-xs font-bold py-1 px-2 rounded-r-lg mt-1">Новинка</div>
                </div>
                <div className="absolute bottom-3 right-0 inline-block bg-blue text-white ctext-xs font-bold py-1 px-2 rounded-l-lg">-90%</div>
            </div>
            {/* info */}
            <div>
                <div className="h-12 text-doted ctext-base text-black-dark font-semibold mt-1">{name}</div>
                <div className="text-grey ctext-xs mt-1 font-medium">Бумажная, аудио, pdf</div>
                <div className="text-grey-dark ctext-base mt-1 font-medium cursor-pointer">{author}</div>
            </div>
        </div>
        // </div>
    )
}

export default Cart;