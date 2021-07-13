import "./style.css"
import elru_logo from "assets/images/logo_elru.svg"
import icon_phone from "assets/images/icon-phone.svg"
import icon_search from "assets/images/icon-search.svg"
import icon_chat from "assets/images/icon-chat.svg"
import icon_order from "assets/images/icon-order.svg"
import icon_basket from "assets/images/icon-basket.svg"
import mob_icon_home from "assets/images/mob-icon-home.svg"
import mob_icon_basket from "assets/images/mob-icon-basket.svg"
import mob_icon_user from "assets/images/mob-icon-user.svg"
import mob_icon_search from "assets/images/mob-icon-search.svg"
import arrow_black from "assets/images/arrow-black.svg"
import Category from "components/Category"
import Auth from "components/Auth"
import { Squash as Hamburger } from 'hamburger-react'
import { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setAuth, setStartChat } from "redux/modals"

const Header = () => {

    const dispatch = useDispatch()

    const route = useHistory()
    const [catalog, setCatalog] = useState(false)
    let menuRef = useRef()

    return (
        <div className="header">
            <Auth />
            {/* header-top */}
            <div className="header-top container mx-auto hidden sm:flex items-center text-grey-dark font-bold">
                {/* logo */}
                <div className="flex-auto">
                    <div
                        onClick={() => route.push('/')}
                        className="cursor-pointer">
                        <img src={elru_logo} alt="elru.uz_logo" />
                    </div>
                </div>
                {/* nav-top */}
                <div className="nav-top hidden xl:flex flex-auto justify-around ctext-xs">
                    <div
                        onClick={() => route.push('/discounts')}
                        className="hover:text-blue cursor-pointer">Акции и скидки</div>
                    <div
                        onClick={() => route.push('/tops')}
                        className="hover:text-blue cursor-pointer">Топ - книги</div>
                    <div
                        onClick={() => route.push('/news')}
                        className="hover:text-blue cursor-pointer">Новости</div>
                    <div
                        onClick={() => route.push('/payment')}
                        className="hover:text-blue cursor-pointer">Оплата</div>
                    <div 
                        onClick={() => route.push('/feedback')}
                        className="hover:text-blue cursor-pointer">Обратная связь</div>
                </div>
                {/* tel & lang */}
                <div className="flex flex-auto xl:justify-center ctext-xs">
                    <img src={icon_phone} alt="phone-icon" className="mr-1" />
                    <a href="tel:+998993144263" className="hover:text-blue">+998 99 314 42 63</a>
                </div>
                <div className="lang flex justify-items-end text-sm text-grey">
                    <div className="hover:text-blue cursor-pointer text-blue">RU</div>
                    <span className="px-1 lg:px-3">/</span>
                    <div className="hover:text-blue cursor-pointer">UZ</div>
                </div>
            </div>

            {/* header */}
            <div className="hidden sm:block bg-grey-light">
                <div className="relative container mx-auto flex items-center justify-between">
                    <div className={`absolute w-full lg:w-11/12 top-full  z-20 ${catalog ? 'block showCategory' : 'hidden'}`}>
                        <Category setCatalog={setCatalog} setShow={setAuth} menuRef={menuRef} />
                    </div>
                    <div
                        ref={menuRef}
                        onClick={() => setCatalog(!catalog)}
                        className="burger flex items-center h-full text-white bg-blue font-bold ctext-base focus:outline-none cursor-pointer">
                        <Hamburger toggled={catalog} size={20} />
                        <span className="hidden lg:block">Категории</span>
                    </div>
                    <div className="header-search hidden md:flex">
                        <input type="text" placeholder="Введите книгу, автора..." className="h-full w-full rounded border border-grey focus:outline-none px-3 text-grey-dark" />
                        <button
                            onClick={() => route.push('/searchresults')}
                            className="h-full bg-blue rounded px-3 -ml-1 focus:outline-none"><img src={icon_search} alt="search-icon" /></button>
                    </div>
                    {/* user-route */}
                    <div className="flex header-user font-medium ctext-sm">
                        <div
                            onClick={() => {
                                dispatch(setStartChat(true))
                                dispatch(setAuth(true))
                                route.push('/chat')
                            }}
                            className="flex flex-col cursor-pointer text-grey-dark hover:text-blue">
                            <img src={icon_chat} alt="chat-icon" />
                            Чат
                        </div>
                        <div
                            onClick={() => route.push('/myorders')}
                            className="flex flex-col cursor-pointer text-grey-dark hover:text-blue mx-10">
                            <img src={icon_order} alt="order-icon" />
                            Мои заказы
                        </div>
                        <div
                            onClick={() => route.push('/basket')}
                            className="relative flex flex-col cursor-pointer text-grey-dark hover:text-blue">
                            <img src={icon_basket} alt="basket-icon" />
                            <span className="order-count absolute text-blue ctext-base font-bold">14</span>
                            Корзина
                        </div>
                    </div>
                    {/* user-info */}
                    {/* <div 
                        onClick={() => route.push('/user')}
                        className="hidden xl:flex header-user-info cursor-pointer">
                        <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user-avatar" className="object-cover rounded-full" />
                        <div className="ml-2">
                            <div className="ctext-sm text-grey-dark font-medium">userName</div>
                            <div className="ctext-xs text-grey-dark">123 000 000 сум</div>
                        </div>
                    </div> */}
                    <div className="hidden xl:flex items-center header-user-login">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white border border-grey">
                            <img src={mob_icon_user} alt="user-avatar" className="object-cover" />
                        </div>
                        <div
                            onClick={() => dispatch(setAuth(true))}
                            className="ctext-sm text-grey-dark font-medium mx-2 cursor-pointer hover:text-blue">Войти</div>
                        <img src={arrow_black} alt="arrow-icon" width="15px" />
                    </div>
                </div>
            </div>

            {/* for mob size */}
            <div className="block sm:hidden mob-top relative container bg-grey-light">
                <input type="text" placeholder="Введите книгу, автора..." className="w-full focus:outline-none pl-10 border border-grey rounded text-grey-dark" />
                <button className="absolute left-0 focus:outline-none">
                    <img src={mob_icon_search} alt="search-icon" />
                </button>
            </div>
            <div className="mob-bottom z-30 fixed bottom-0 left-0 w-full sm:hidden flex justify-around text-grey-dark ctext-xs bg-grey-light border-t border-grey">
                <div
                    onClick={() => route.push('/')}
                    className="flex flex-col items-center cursor-pointer">
                    <img src={mob_icon_home} alt="home-icon" />
                    Магазин
                </div>
                <div
                    onClick={() => route.push('/myorders')}
                    className="flex flex-col items-center cursor-pointer">
                    <img src={icon_order} alt="order-icon" />
                    Мои заказы
                </div>
                <div
                    onClick={() => route.push('/basket')}
                    className="flex flex-col items-center cursor-pointer">
                    <img src={mob_icon_basket} alt="basket-icon" />
                    Корзина
                </div>
                <div
                    onClick={() => {
                        route.push('/user')
                        setAuth(true)
                    }}
                    className="flex flex-col items-center cursor-pointer">
                    <img src={mob_icon_user} alt="user-icon" />
                    Профиль
                </div>
            </div>
        </div>
    )
}

export default Header;
