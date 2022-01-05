import './style.css'
import icon_book from "assets/images/open-book.svg"
import icon_audio from "assets/images/audio-book.svg"
import icon_pdf from "assets/images/pdf-book.svg"
import icon_add_basket from "assets/images/icon-add-basket.svg"
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { axiosInstance } from '../../axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux';
import { addCart, removeCart, setCart } from 'redux/books'

const BookFormat = () => {

    const [format, setFormat] = useState({
        paper: false,
        audio: false,
        pdf: false
    })

    const dispatch = useDispatch()
    const { id } = useParams()
    const language = useSelector(state => state.modals.getLanguage)
    const cart = useSelector(state => state.books.cart)
    const [currentCart, setCurrentCart] = useState([])
    const [data, setData] = useState(null)

    useEffect(() => {
        setCurrentCart(cart.filter(book => book.id.toString() === id.toString()))
    }, [id, cart])
    useEffect(() => {
        axiosInstance.get('user/books/')
            .then(res => {
                const book = res.data.filter(book => book.id.toString() === id.toString())
                setData(book[0])
            })
    }, [language, id])


    return (
        <div className="w-full mt-8 xl:mt-0 sm:border border-grey rounded-md sm:bg-grey-light sm:px-5 xl:px-8 py-5 xl:py-12">
            {/* top-text */}
            <div className="text-black ctext-lg font-bold sm:text-center text-left xl:text-left">Выберите формат:</div>
            {/* book formats */}
            <div className="flex flex-col sm:flex-row justify-between xl:block">
                {data && data.form.map(data => {
                    if (data === 'paper') {
                        return (
                            <div
                                onClick={() => setFormat(format.paper ? { ...format, paper: false } : { ...format, paper: true })}
                                className={`${format.paper ? 'bg-blue' : 'bg-white'} w-full sm:w-1/3 xl:w-full flex flex-row sm:flex-col md:flex-row justify-between items-center cursor-pointer border border-grey rounded-md p-2 mt-5 hover:border-blue`}>
                                <div className={`${format.paper ? 'text-white' : 'text-grey-dark'} flex ctext-base font-medium my-2 md:my-0`}>Бумажная <img src={icon_book} alt="icon-book" className="ml-1" /></div>
                                <div className="flex flex-col">
                                    <div className={`${format.paper ? 'text-white' : 'text-black-dark'} ctext-base font-bold`}>190 000 сум</div>
                                    <div className={`${format.paper ? 'text-white' : 'text-grey'} discount-line relative flex items-center ctext-xs`}>200 000 сум</div>
                                </div>
                            </div>
                        )
                    } else if (data === 'audio') {
                        return (

                            <div
                                onClick={() => setFormat(format.audio ? { ...format, audio: false } : { ...format, audio: true })}
                                className={`${format.audio ? 'bg-blue' : 'bg-white'} w-full sm:w-1/3 xl:w-full flex-row sm:flex-col md:flex-row mx-0 sm:mx-4 xl:mx-0 flex justify-between items-center cursor-pointer border border-grey rounded-md p-2 mt-5 hover:border-blue`}>
                                <div className={`${format.audio ? 'text-white' : 'text-grey-dark'} flex ctext-base font-medium my-2 md:my-0`}>Аудио <img src={icon_audio} alt="icon-book" className="ml-1" /></div>
                                <div className="flex flex-col">
                                    <div className={`${format.audio ? 'text-white' : 'text-black-dark'} ctext-base font-bold`}>138 000 сум</div>
                                    <div className={`${format.audio ? 'text-white' : 'text-grey'} discount-line relative flex items-center ctext-xs`}>200 000 сум</div>
                                </div>
                            </div>
                        )
                    } else {
                        <div
                            onClick={() => setFormat(format.pdf ? { ...format, pdf: false } : { ...format, pdf: true })}
                            className={`${format.pdf ? 'bg-blue' : 'bg-white'} w-full sm:w-1/3 xl:w-full flex-row sm:flex-col md:flex-row mx-0 sm:mx-4 xl:mx-0 flex justify-between items-center cursor-pointer border border-grey rounded-md p-2 mt-5 hover:border-blue`}>
                            <div className={`${format.pdf ? 'text-white' : 'text-grey-dark'} flex ctext-base font-medium my-2 md:my-0`}>PDF<img src={icon_pdf} alt="icon-book" className="ml-1" /></div>
                            <div className="flex flex-col">
                                <div className={`${format.pdf ? 'text-white' : 'text-black-dark'} ctext-base font-bold`}>170 000 сум</div>
                                <div className={`${format.pdf ? 'text-white' : 'text-grey'} discount-line relative flex items-center ctext-xs`}>200 000 сум</div>
                            </div>
                        </div>
                    }
                })}
            </div>
            {/* button */}
            {(!currentCart.length) ?
                <button
                    onClick={() => {
                        (format.paper || format.audio || format.pdf) && dispatch(setCart(data))
                    }}
                    className={`${format.paper || format.audio || format.pdf ? 'text-white bg-blue' : 'text-grey-light bg-grey-light'} w-full flex justify-center items-center ctext-base font-bold p-4 sm:p-5 mt-5 rounded-md focus:outline-none`}>
                    Добавить в корзину {(format.paper || format.audio || format.pdf) && <img src={icon_add_basket} alt="basket" width="22px" height="22px" className="ml-2" />}
                </button> :
                <div className={`flex justify-between items-center mt-5`}>
                    <button
                        onClick={() => dispatch(removeCart(data.id))}
                        className={`bg-blue text-white text-xl py-3 px-5 rounded-md `}>
                        -
                    </button>
                    <div className={`text-xl font-bold text-grey-dark`}>{currentCart.length && currentCart[0].count}</div>
                    <button
                        onClick={() => dispatch(addCart(data.id))}
                        className={`bg-blue text-white text-xl py-3 px-5 rounded-md `}>
                        +
                    </button>
                </div>
            }
        </div>
    )
}

export default BookFormat;