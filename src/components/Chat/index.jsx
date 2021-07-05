import "./style.css"
import { AiOutlineSend} from "react-icons/ai"

const Chat = () => {

    return (
        <div className="container mx-auto mb-16 mt-4">
            {/* top */}
            <div className="flex items-center py-4 border-b border-grey-border mb-8">
                <div
                    style={{ backgroundImage: `url('http://www.venmond.com/demo/vendroid/img/avatar/big.jpg')` }}
                    className="chat-profile-img bg-no-repeat bg-cover bg-center rounded-full"
                ></div>
                <div className="text-black ctext-lg font-bold ml-4">Менеджер Мадина</div>
            </div>

            {!true ? 
            // {/* start-chat */}
            <div className="flex items-center justify-center text-center h-80 sm:h-96">
                <div className="text-grey ctext-xl font-medium">Мы готовы ответить на все ваши вопросы. <br /> Отправьте нам сообщение и мы ответим вам в ближайшее время...</div>
            </div>
            :
            // {/* chat-started */}
            <div>
                {/* content */}
                {/* user */}
                <div className="grid grid-cols-12">
                    <div className="col-start-1 sm:col-start-5 xl:col-start-7 col-end-13 flex flex-col py-4">
                        <div className="flex">
                            {/* message */}
                            <div className="bg-grey-light text-grey-dark ctext-base font-medium rounded-md p-3 mr-4">Здравствуйте, я беспокою вас по поводу доставки моей книги.Можно будет заказать ее как подарок моей бабушке? Просто она живет в Самарканде</div>
                            {/* profile-img */}
                            <div
                                style={{ backgroundImage: `url('https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg')` }}
                                className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                            ></div>
                        </div>
                        <div className="w-full text-left text-grey-dark text-sm font-medium mt-2">25.01.2021 21:00</div>
                    </div>
                </div>
                {/* admin */}
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-8 xl:col-span-6 flex flex-col py-4">
                        <div className="flex">
                            {/* profile-img */}
                            <div
                                style={{ backgroundImage: `url('http://www.venmond.com/demo/vendroid/img/avatar/big.jpg')` }}
                                className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                            ></div>
                            {/* message */}
                            <div className="bg-blue text-white ctext-base font-medium rounded-md p-3 ml-4">Здравствуйте, я беспокою вас по поводу доставки моей книги.Можно будет заказать ее как подарок моей бабушке? Просто она живет в Самарканде</div>
                        </div>
                        <div className="w-full text-right text-grey-dark text-sm font-medium mt-2">25.01.2021 21:00</div>
                    </div>
                </div>
                {/* user */}
                <div className="grid grid-cols-12">
                    <div className="col-start-1 sm:col-start-5 xl:col-start-7 col-end-13 flex flex-col py-4">
                        <div className="flex">
                            {/* message */}
                            <div className="bg-grey-light text-grey-dark ctext-base font-medium rounded-md p-3 mr-4">Здравствуйте, я беспокою вас по поводу доставки моей книги.Можно будет заказать ее как подарок моей бабушке? Просто она живет в Самарканде</div>
                            {/* profile-img */}
                            <div
                                style={{ backgroundImage: `url('https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg')` }}
                                className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                            ></div>
                        </div>
                        <div className="w-full text-left text-grey-dark text-sm font-medium mt-2">25.01.2021 21:00</div>
                    </div>
                </div>
            </div>
            }

            {/* input */}
            <div className="relative mt-5 sm:mt-10">
                <input type="text" placeholder="Ваше сообщение..." className="p-3 sm:p-4 bg-grey-light border border-grey-border rounded-md text-grey-dark ctext-base font-medium w-full focus:outline-none focus:border-blue" />
                <button className="absolute top-0 right-0 h-full flex items-center px-5 bg-blue rounded-r-md"><AiOutlineSend className="text-white text-xl sm:text-2xl" /></button>
            </div>
        </div>
    )
}

export default Chat;