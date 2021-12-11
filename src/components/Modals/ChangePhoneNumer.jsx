import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setNewPhoneNumber } from "redux/modals"


const ChangePhoneNumber = () => {

    const newPhoneNumber = useSelector(state => state.modals.newPhoneNumber)
    const dispatch = useDispatch()

    return (
        <div className={`fixed ${newPhoneNumber ? 'top-0' : '-top-full'} transition-all w-full h-full bg-white sm:bg-black-black sm:bg-opacity-30 flex justify-center items-center z-40`}>
            <AiOutlineClose
                onClick={() => dispatch(setNewPhoneNumber(false))}
                className="absolute top-5 right-5 cursor-pointer text-2xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div
                className="leave-comment w-10/12 bg-white rounded-md">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-black ctext-2xl font-bold text-center mb-5 px-4">Изменить номер телефона</div>
                    {false ?
                        <div className="w-full sm:w-2/3 grid grid-cols-12 gap-y-4 md:gap-8 mt-6 px-4">
                            <div className="col-span-12">
                                <div className="text-grey-dark ctext-base font-medium">Новый номер телефона<span className="text-red">*</span></div>
                                <input type="text" placeholder="Ведите новый номер телефона" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                            </div>
                            <button className="bg-blue text-white ctext-base col-span-12 font-bold rounded-md py-3">Получить пароль</button>
                        </div> :
                        <div className="w-full sm:w-2/3 grid grid-cols-12 gap-y-4 md:gap-8 mt-6 px-4">
                            <div className="col-span-12">
                                <div className="text-grey-dark ctext-base font-medium">Код из смс<span className="text-red">*</span></div>
                                <input type="text" placeholder="Ведите код из смс" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                            </div>
                            <button className="bg-blue text-white ctext-base col-span-12 font-bold rounded-md py-3">Подтвердить</button>
                            <button 
                                onClick={() => dispatch(setNewPhoneNumber(false))}
                                className="bg-red text-white ctext-base col-span-12 font-bold rounded-md py-3">Отменять</button>
                            <div className="text-back ctext-lg font-bold col-span-12 flex flex-col sm:flex-row text-center justify-center items-center">Не пришел пароль?<div className="text-blue mt-2 sm:mt-0 sm:ml-2 border-b border-blue cursor-pointer w-max">Отправить еще раз</div></div>
                        </div>
                    }
                </div>
            </div>
        </div>

    )

}

export default ChangePhoneNumber;
