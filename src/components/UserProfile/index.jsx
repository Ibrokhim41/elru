import "./style.css"
import { BiPencil } from "react-icons/bi"
import { ImExit, ImPhone } from "react-icons/im"
import { useEffect } from 'react';
import animateScrollTo from "animated-scroll-to";
import FillBalance from "components/Modals/FillBalance";
import { setFillBalance, setNewName, setNewPhoneNumber } from "redux/modals"
import { useDispatch } from 'react-redux';
import ChangeName from "components/Modals/ChangeName";
import ChangePhoneNumber from "components/Modals/ChangePhoneNumer";

const UserProfile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <>
            <ChangeName />
            <FillBalance />
            <ChangePhoneNumber />
            <div className="container mx-auto grid grid-cols-12 mt-20">
                <div className="col-span-12 grid grid-cols-12 bg-grey-light rounded-md py-8 px-4 xl:px-2">
                    {/* user-image */}
                    <div className="col-span-12 sm:col-span-4 xl:col-span-2 flex flex-col items-center">
                        <div
                            style={{ backgroundImage: "url('https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg')" }}
                            className="bg-no-repeat bg-center bg-cover rounded-full w-32 h-32 md:w-40 md:h-40"></div>
                        <div className="text-grey-dark ctext-base font-medium border-b border-grey-dark cursor-pointer mt-2">Сменить фото</div>
                    </div>

                    {/* user-info */}
                    <div className="col-span-12 sm:col-span-8 lg:col-span-5 xl:col-span-4 flex flex-col justify-center items-center sm:items-start mt-4 sm:mt-0">
                        <div className="flex items-center text-black ctext-lg font-bold">
                            Адбуллаев Абдулазиз Абдуллаевич 
                            <BiPencil 
                                onClick={() => dispatch(setNewName(true))}
                                className="cursor-pointer ml-2 text-blue text-xl" />
                        </div>
                        <div className="flex items-center text-black mt-2 ctext-base font-medium">Логин: abdu08 <BiPencil className="cursor-pointer ml-2 text-blue text-xl" /></div>
                        <div className="flex items-center text-black mt-2 ctext-base font-medium">Дата рождения: <span className="text-grey ml-2">21.01.2000</span> <BiPencil className="cursor-pointer ml-2 text-blue text-xl" /></div>
                        <div className="flex items-center text-black mt-2 ctext-base font-medium">Пол: <span className="text-grey ml-2">Мужской</span> <BiPencil className="cursor-pointer ml-2 text-blue text-xl" /></div>
                        <div className="flex items-center flex-col sm:flex-row text-black mt-2 ctext-base font-medium">
                            <div>
                                Телефон: <span className="text-grey ml-2">+998 94 616 75 39</span></div>
                                <button 
                                    onClick={() => dispatch(setNewPhoneNumber(true))}
                                    className="text-white ctext-xs font-bold bg-blue py-2 px-4 rounded-md sm:ml-2 mt-2 sm:mt-0 focus:outline-none">Привязать другой</button></div>
                    </div>

                    {/* user-balance */}
                    <div className="col-span-12 order-last xl:order-none xl:col-span-3 py-4">
                        <div className="xl:border-l border-grey xl:pl-4 h-full flex flex-col justify-center items-center xl:items-start">
                            <div className="text-blue ctext-base font-medium">ID: 124 609</div>
                            <div className="text-black ctext-lg font-bold mt-1">Ваш баланс: 1 230 000 сум</div>
                            <button 
                                onClick={() => dispatch(setFillBalance(true))}
                                className="text-white ctext-base font-bold py-2 px-4 mt-4 bg-blue rounded-md focus:outline-none">Пополнить баланс</button>
                        </div>
                    </div>
                    {/* log-out */}
                    <div className="col-span-12 lg:col-span-3 order-last sm:order-first lg:order-none flex flex-col sm:flex-row  justify-end items-center sm:items-start mt-4 sm:mt-0">
                        <div className="text-grey ctext-base border-b border-grey mr-4 cursor-pointer">Удалить аккаунт</div>
                        <div className="text-red ctext-base font-bold flex items-center cursor-pointer mt-4 sm:mt-0">Выйти <ImExit className="text-red ml-2" /></div>
                    </div>
                </div>

                {/* service */}
                <div className="col-span-12 flex flex-col items-center py-10">
                    <div className="mx-auto text-black ctext-lg font-bold">Служба поддержки</div>
                    <div className="flex items-center mt-2">
                        <ImPhone className="text-blue text-xl mr-2" />
                        <a href="tel:+998993144263" className="text-grey-dark">+998 99 314 42 63</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;