import { VscChevronLeft } from "react-icons/vsc"

export const Step2 = (setSteps) => {
    return (
        <div className="col-span-12 xl:col-span-8 mt-10">
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Придумайте логин<span className="text-red">*</span></div>
                    <input type="text" placeholder="Ведите логин" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Номер телефона или E - mail<span className="text-red">*</span></div>
                    <input type="password" placeholder="Ведите номер телефона или e-mail" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 my-12">Получить пароль</button>
            <div
                onClick={() => setSteps('step1')}
                className="text-back ctext-lg font-bold flex justify-center items-center cursor-pointer text-blue"><VscChevronLeft className="" />Назад</div>
        </div>
    ) 
}

export const Step3 = () => {
    return (
        <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="text-red ctext-base font-bold my-4 col-span-12">Внимание! Пароль из сообщения является паролем для входа в ваш аккаунт. Не потеряйте его!</div>
                <div className="col-span-12">
                    <div className="text-grey-dark ctext-base font-medium">Ведите пароль из сообщения<span className="text-red">*</span></div>
                    <input type="text" placeholder="Ведите пароль из сообщения" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 my-12">Подтвердить</button>
            <div className="text-back ctext-lg font-bold flex justify-center">Не пришел пароль ?<div className="text-blue ml-2 border-b border-blue cursor-pointer">Отправить еще раз</div></div>
        </div>
    )
}

export const Recovery = () => {
    return (
        <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="text-red ctext-base font-bold my-4 col-span-12 text-center">Введите ваш email или номер телефона, и мы вышлем вам новый пароль для входа в <br /> ваш аккаунт. Пожалуйста, не потеряйте его!</div>
                <div className="col-span-12">
                    <div className="text-grey-dark ctext-base font-medium">Номер телефона или E-mail<span className="text-red">*</span></div>
                    <input type="text" placeholder="Ведите номер телефона или e-mail*" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 my-12">Получить пароль</button>
            <div className="text-back ctext-lg font-bold flex justify-center">Или обратитесь к менеджеру:<a href="tel:+998989709096" className="text-blue ml-2 border-b border-blue cursor-pointer">+998 98 970 90 96</a></div>
            <div
                // onClick={() => setSelected(4)}
                className="text-back ctext-lg font-bold flex justify-center items-center cursor-pointer text-blue"><VscChevronLeft className="my-4" />Назад</div>
        </div>
    )
}

export const ConfirmRecovery = () => {
    return (
        <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="text-black-black ctext-lg font-bold my-4 col-span-12 text-center">Восстановление пароля</div>
                <div className="col-span-12">
                    <div className="text-grey-dark ctext-base font-medium">Код из сообщения*<span className="text-red">*</span></div>
                    <input type="text" placeholder="Ведите код из сообщения" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 my-12">Подтвердить</button>
            <div className="text-back ctext-lg font-bold flex justify-center">Не пришел пароль ?<div className="text-blue ml-2 border-b border-blue cursor-pointer">Отправить еще раз</div></div>
        </div>
    )
}

export const SetNewPassword = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                <div className="text-black-black ctext-lg font-bold my-4 col-span-12 text-center">Восстановление пароля</div>
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Новый пароль<span className="text-red">*</span></div>
                    <input type="text" placeholder="Ведите новый пароль" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="text-grey-dark ctext-base font-medium">Повторите новый пароль<span className="text-red">*</span></div>
                    <input type="password" placeholder="Ведите повторите новый пароль" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                </div>
            </div>
            <button className="bg-blue text-white ctext-lg font-bold rounded-md w-full py-4 my-12">Подтвердить</button>

        </>)
}