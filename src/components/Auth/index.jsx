import "./style.css"
import avatar1 from "assets/images/user_avatar 6.png"
import avatar2 from "assets/images/user_avatar 81.png"
import avatar3 from "assets/images/user_avatar 93.png"
import avatar4 from "assets/images/user_avatar 94.png"
import avatar5 from "assets/images/user_avatar 95.png"
import avatar6 from "assets/images/user_avatar 96.png"
import { IoIosAttach, IoIosCheckmarkCircle } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';

const Auth = ({ show, setShow }) => {

    const [typeAuth, setTypeAuth] = useState(true)
    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]
    const [selected, setSelected] = useState(0)

    const Login = <>
        {/* info */}
        <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Логин<span className="text-red">*</span></div>
                    <input type="text" placeholder="Введите логин" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Пароль<span className="text-red">*</span></div>
                    <input type="password" placeholder="Введите пароль" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 my-12">Войти</button>
            <div className="text-back ctext-lg font-bold flex justify-center">Забыли пароль? <div className="text-blue ml-2 border-b border-blue cursor-pointer">Восстановить</div></div>
        </div>
    </>

    const Registration = <>

        {/* info */}
        <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Имя<span className="text-red">*</span></div>
                    <input type="text" placeholder="Введите имя" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Фамилия<span className="text-red">*</span></div>
                    <input type="text" placeholder="Введите Фамилия" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Отчество<span className="text-red">*</span></div>
                    <input type="text" placeholder="Введите Отчество" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Дата рождения (дд / мм / гггг)<span className="text-red">*</span></div>
                    <input type="text" placeholder="Введите дата рождения" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
        </div>

        {/* paymet-type */}
        <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="flex flex-row items-center">
                <div className="text-black ctext-lg font-bold">Ваш пол:</div>
                <div className="flex items-center ml-6">
                    <input id="male" type="radio" name="gender" className="cursor-pointer w-5 h-5 border-grey-border" />
                    <label htmlFor="male" className="ml-2 cursor-pointer">
                        <div className="text-grey-dark ctext-lg font-bold">Мужской</div>
                    </label>
                </div>
                <div className="flex items-center ml-6">
                    <input id="female" type="radio" name="gender" className="cursor-pointer w-5 h-5 border-grey-border" />
                    <label htmlFor="female" className="ml-2 cursor-pointer">
                        <div className="text-grey-dark ctext-lg font-bold">Женский</div>
                    </label>
                </div>
            </div>
        </div>

        {/* avatar */}
        <div className="text-black ctext-lg font-bold my-5 pt-6 border-t border-grey-border">Выберите аватарку профиля:</div>
        <div className="text-grey-dark ctext-base py-2.5 px-2 sm:px-4 border border-grey-border flex items-center w-max rounded-md">
            Фотография
            <button className="bg-blue text-white ctext-base font-semibold rounded-md px-1.5 sm:px-2.5 py-1 sm:py-1.5 flex items-center ml-2">
                <IoIosAttach className="text-white text-2xl sm:text-3xl mr-1 transform rotate-45" />
                Прикрепить файл
            </button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center my-6">
            <div className="text-black ctext-lg font-bold mb-4 md:mb-0">Или выберите готовый:</div>
            <div className="flex flex-wrap">
                {avatars.map((item, i) => {
                    return (
                        <div
                            key={item}
                            onClick={() => setSelected(i)}
                            style={{ backgroundImage: `url('${item}')` }}
                            className="relative default-avatars bg-no-repeat bg-center bg-cover ml-4 cursor-pointer"
                        >
                            {selected === i && <IoIosCheckmarkCircle className="absolute -bottom-2 -right-2 text-4xl text-blue" />}
                        </div>
                    )
                })}
            </div>
        </div>

        {/* rights */}
        <div className="flex items-center my-10">
            <input id="checked" type="radio" name="rights" className="cursor-pointer w-5 h-5 border-grey-border" />
            <label htmlFor="checked" className="ml-2 cursor-pointer">
                <div className={`text-grey-dark ctext-lg font-bold`}>Я принимаю условия пользовательского соглашения</div>
            </label>
        </div>

        <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 mb-20">Далее</button>
    </>

    return (
        <div className={`z-40 fixed ${show ? 'top-0' : '-top-full'} left-0 transition-all w-full h-full bg-white flex justify-center items-center overflow-scroll`}>
            <div
                onClick={() => setShow(false)}
                className="absolute top-10 right-2 sm:right-10 cursor-pointer text-2xl sm:text-3xl lg:text-4xl hover:text-red"><AiOutlineClose /></div>
            <div className="container h-full sm:w-4/5 lg:w-3/4 xl:w-2/3 mt-52">
                {/* login-title */}
                {/* <div className={`text-black-black ${!typeAuth && 'hidden'} ctext-xl font-bold text-center mt-32 mb-10`}>Войдите или зарегистрируйтесь, чтобы начать чат с менеджером</div> */}
                {/* top */}
                <div className="flex border-b border-grey-border">
                    <div
                        onClick={() => setTypeAuth(true)}
                        className={`w-1/2 text-center text-grey-dark ctext-lg font-bold p-2.5 md:p-4 cursor-pointer hover:bg-grey-light ${typeAuth && 'sign-in-up'}`}>Вход</div>
                    <div
                        onClick={() => setTypeAuth(false)}
                        className={`w-1/2 text-center text-grey-dark ctext-lg font-bold p-2.5 md:p-4 cursor-pointer hover:bg-grey-light ${!typeAuth && 'sign-in-up'}`}>Регистрация</div>
                </div>
                {typeAuth ? Login : Registration}
            </div>
        </div>
    )
}

export default Auth;




