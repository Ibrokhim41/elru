import "./style.css"
import { VscBook } from "react-icons/vsc"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import cliTruncate from 'cli-truncate';
import animateScrollTo from "animated-scroll-to";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRegionChoose, setStartOrder, setAuth } from "redux/modals"
import RegionChoose from "components/Modals/RegionChoose";
import { useTranslation } from 'react-i18next';
import { addCart, removeAll, removeCart } from "redux/books";

const Basket = () => {

    const { t } = useTranslation();

    const deliveryTo = useSelector(state => state.modals.deliveryTo)
    const books = useSelector(state => state.books.cart)
    const language = useSelector(state => state.modals.getLanguage)

    const dispatch = useDispatch()

    const route = useHistory()

    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <>
            <RegionChoose />
            <div className="container mx-auto my-10 mt-20 sm:mt-0">
                {/* title */}
                <div className="text-black ctext-lg font-bold">Товары для оформления:</div>
                {/* content */}
                <div className="grid grid-cols-12 gap-x-6">
                    {/* left */}
                    {/* top-titiles */}
                    <div className="col-span-12 xl:col-span-8 grid grid-cols-8 text-grey-dark ctext-lg pb-2 border-b border-grey mt-4">
                        <div className="col-span-3 hidden md:block">Название</div>
                        <div className="col-span-3 hidden md:grid grid-cols-2">
                            <div className="col-span-1">Стоимость</div>
                            <div className="col-span-1">Количество</div>
                        </div>
                        <div className="hidden md:block col-span-2">Итоговая сумма</div>
                    </div>
                    {/* books */}
                    <div className="col-span-12 xl:col-span-8 grid grid-cols-8 my-4">
                        {books.length && books.map(book => {
                            return (
                                <div className="relative col-span-12 xl:col-span-8 grid grid-cols-8 my-4">
                                    <div className="col-span-12 md:col-span-3">
                                        <div className="w-11/12 flex items-center">
                                            <div
                                                onClick={() => route.push(`/book/${book.id}`)}
                                                style={{ background: `url('${book.image}')` }}
                                                className="book-smillar cursor-pointer"></div>
                                            <div className="ml-2">
                                                {/* <div 
                                                    onClick={() => route.push(`/book/${book.id}`)}
                                                    // className="text-black-dark text-base font-medium flex-initial cursor-pointer">{cliTruncate(eval(`book.title_${language}`), 50)}</div> */}
                                                <div className="text-black-dark ctext-base mt-2 flex items-center">
                                                    Формат:
                                                    {book.form.map((item, i) => {
                                                        return <div key={i}>
                                                            {
                                                                item === 'paper' ?
                                                                    <div className={`flex`}>
                                                                        <span className="text-grey ml-1">Бумажная</span> <VscBook className="text-grey text-xl ml-1" />
                                                                    </div> :
                                                                    item === 'audio' ?
                                                                        <div className={`flex`}>
                                                                            <span className="text-grey ml-1">Аудио</span> <VscBook className="text-grey text-xl ml-1" />
                                                                        </div> :
                                                                        <div className={`flex`}>
                                                                            <span className="text-grey ml-1">Pdf</span> <VscBook className="text-grey text-xl ml-1" />
                                                                        </div>}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* md-title */}
                                    <div className="col-span-12 xl:col-span-8 grid grid-cols-8 md:hidden text-grey-dark ctext-lg pb-2 border-b border-grey mt-4 mb-2">
                                        <div className="col-span-4 sm:col-span-3">Стоимость</div>
                                        <div className="col-span-4 sm:col-span-3">Количество</div>
                                        <div className="hidden sm:block col-span-2">Итоговая сумма</div>
                                    </div>
                                    {/* content */}
                                    <div className="col-span-12 sm:col-span-6 md:col-span-3 grid grid-cols-2">
                                        <div className="col-span-1 flex items-center">
                                            <div className="text-black ctext-base font-bold">{book.paper_price && book.paper_price} сум</div>
                                        </div>
                                        <div className="col-span-1 flex items-center justify-between pr-16 sm:pr-20 md:pr-8">
                                            <button 
                                                onClick={() => dispatch(removeCart(book.id))}
                                                className="flex justify-center items-cente rounded-md bg-grey-light border border-grey p-1 sm:p-2 group"><AiOutlineMinus className="text-black text-xl group-hover:text-blue" /></button>
                                            <div className="text-black ctext-base">{book.count}</div>
                                            <button 
                                                onClick={() => dispatch(addCart(book.id))}
                                                className="flex justify-center items-cente rounded-md bg-grey-light border border-grey p-1 sm:p-2 group"><AiOutlinePlus className="text-black text-xl group-hover:text-blue" /></button>
                                        </div>
                                    </div>
                                    {/* sm-title */}
                                    <div className="col-span-12 xl:col-span-8 grid grid-cols-8 sm:hidden text-grey-dark ctext-lg pb-2 border-b border-grey mt-4 mb-2">
                                        <div className="sm:hidden col-span-8">Итоговая сумма</div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 md:col-span-2 flex items-center justify-between md:justify-around">
                                        <div className="text-black ctext-base font-bold">{book.paper_price && (book.paper_price * book.count)} сум</div>
                                        <AiOutlineClose 
                                            onClick={() => dispatch(removeAll(book.id))}
                                            className="absolute top-0 right-0 md:relative text-grey-dark text-xl cursor-pointer hover:text-red" />
                                    </div>
                                </div>
                            )
                        })}

                        {/* all-sum */}
                        <div className="col-span-12 text-blue ctext-base font-bold text-right">Итого: сум</div>
                    </div>

                    {/* right */}
                    <div className="col-span-12 xl:col-span-4 mt-8 xl:mt-0">
                        <div className="bg-grey-light border-grey-dark w-full h-64 sm:h-80 rounded-md flex flex-col justify-center items-center">
                            <div className="text-black-dark ctext-lg font-bold">Выберите город или область</div>
                            <button
                                onClick={() => dispatch(setRegionChoose(true))}
                                className={`bg-blue text-white ctext-base font-bold w-64 rounded-md py-3 my-5 focus:outline-none`}>
                                {t('delivery_to')}
                            </button>
                            <div className={`${deliveryTo ? 'flex' : 'hidden'} items-center mb-5`}>
                                <IoLocationSharp className="text-blue text-2xl" />
                                <div className="text-black ctext-20 border-b border-black">{t('delivery_to')}: {deliveryTo}</div>
                            </div>
                            <button
                                onClick={() => {
                                    if (deliveryTo) {
                                        route.push('/order')
                                        dispatch(setAuth(true))
                                        dispatch(setStartOrder(true))
                                    }
                                }}
                                className={`${!deliveryTo ? 'bg-grey cursor-default' : 'bg-blue'} text-white ctext-base w-64 font-bold rounded-md py-3 focus:outline-none`}>Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket;