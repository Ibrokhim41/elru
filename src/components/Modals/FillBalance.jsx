import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setFillBalance } from "redux/modals"

const FillBalance = () => {

    const fillBalance = useSelector(state => state.modals.fillBalance)
    const dispatch = useDispatch()


    return (
        <div className={`fixed ${fillBalance ? 'top-0' : '-top-full'} transition-all w-full h-full bg-white sm:bg-black-black sm:bg-opacity-30 flex justify-center items-center z-40`}>
            <AiOutlineClose
                onClick={() => dispatch(setFillBalance(false))}
                className="absolute top-5 right-5 cursor-pointer text-2xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div
                className="leave-comment w-10/12 bg-white rounded-md">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-black ctext-2xl font-bold text-center mb-5 px-4">Пополнение баланса</div>
                    {false ?
                        <div className="w-2/3">
                            <div className="text-grey-dark ctext-20 font-medium text-center mb-10 px-2">Выберите способ оплаты:</div>
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex items-center ml-6">
                                    <input id="click" type="radio" name="payment" className="cursor-pointer w-5 h-5 border-grey-border" />
                                    <label htmlFor="click" className="ml-2 cursor-pointer">
                                        <div className="text-grey-dark ctext-lg font-bold">Click</div>
                                    </label>
                                </div>
                                <div className="flex items-center ml-6 my-4">
                                    <input id="payme" type="radio" name="payment" className="cursor-pointer w-5 h-5 border-grey-border" />
                                    <label htmlFor="payme" className="ml-2 cursor-pointer">
                                        <div className="text-grey-dark ctext-lg font-bold">Payme</div>
                                    </label>
                                </div>
                                <div className="flex items-center ml-6">
                                    <input id="cart" type="radio" name="payment" className="cursor-pointer w-5 h-5 border-grey-border" />
                                    <label htmlFor="cart" className="ml-2 cursor-pointer">
                                        <div className="text-grey-dark ctext-lg font-bold">Банковской картой</div>
                                    </label>
                                </div>
                            </div>
                            <button className="bg-blue text-white ctext-base w-full font-bold rounded-md py-3 px-8 mt-10">Далее</button>
                        </div> :
                        <div className="w-full sm:w-2/3 grid grid-cols-12 gap-y-4 md:gap-8 mt-6 px-4">
                            <div className="col-span-12 md:col-span-8">
                                <div className="text-grey-dark ctext-base font-medium">Номер карты:<span className="text-red">*</span></div>
                                <input type="text" placeholder="Введите номер карты" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className="text-grey-dark ctext-base font-medium">Срок действия<span className="text-red">*</span></div>
                                <input type="text" placeholder="мм/гг" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                            </div>
                            <button className="bg-blue text-white ctext-base col-span-12 font-bold rounded-md py-3">Пополнить</button>
                            <button
                                onClick={() => dispatch(setFillBalance(false))}
                                className="bg-red text-white ctext-base col-span-12 font-bold rounded-md py-3">Отменять</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default FillBalance;
