import "./style.css"
import { FaTelegramPlane } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FaFacebookSquare } from "react-icons/fa"
import google_play from "assets/images/google_play.png"
import app_store from "assets/images/app_store.png"

const Footer = () => {

    return (
        <div className="footer bg-blue-dark hidden sm:block">
            {/* footer-top */}
            <div className="container mx-auto flex flex-col xl:flex-row justify-between flex-wrap mb-10">
                <div className="w-3/5 md:w-5/6 xl:w-4/6 flex mx-auto flex-wrap ctext-base text-white font-bold">
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Акции и скидки</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Новинки</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Новости</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Обратная связь</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Топ - книги</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Популярное</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Оплата</div>
                    <div className="w-2/4 md:w-1/4 pb-4 cursor-pointer">Договор оферты</div>
                </div>
                <div className="w-4/6 xl:w-2/6 mx-auto flex flex-col justify-between items-end mt-8 xl:mt-0">
                    <div className="w-full text-left ctext-base text-white mb-4 xl:mb-0">Оставьте заявку, если у вас есть вопросы:</div>
                    <div className="w-full flex justify-between">
                        <input type="text" placeholder="Номер телефона" className="w-7/12 bg-blue-dark focus:outline-none border border-white p-2 text-white placeholder-white" />
                        <button className="w-4/12 bg-blue h-auto px-6 text-white font-bold focus:outline-none">Отправить</button>
                    </div>
                </div>
            </div>

            {/* footer-bottom */}
            <div className="container mx-auto">
                <div className="flex justify-center lg:justify-end border-t border-grey-dark pt-6 text-white">
                    Следите за нами:
                    <div className="social flex items-center w-32 justify-evenly">
                        <FaTelegramPlane className="hover:text-blue cursor-pointer" />
                        <RiInstagramFill className="hover:text-blue cursor-pointer" />
                        <FaFacebookSquare className="hover:text-blue cursor-pointer" />
                    </div>
                </div>
                <div>
                    <div className="text-center text-white mt-8 lg:-mt-6">Мобильное приложение:</div>
                    <div className="flex justify-center mt-8">
                        <img src={google_play} alt="google-play" width="160px" height="45px" className="cursor-pointer mr-2" />
                        <img src={app_store} alt="app-store" width="160px" height="45px" className="cursor-pointer ml-2" />
                    </div>
                    <div className="text-white ctext-xs text-center mt-10">©2000 - 2021 Elru.uz.Все права защищены.</div>
                </div>
            </div>
        </div>
    )
}


export default Footer;