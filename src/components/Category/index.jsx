import "./style.css"
import icon_search from "assets/images/icon-search.svg"
import user_photo from "assets/images/user_avatar 94.png"
import icon_arrow from "assets/images/arrow.svg"
import mob_icon_user from "assets/images/mob-icon-user.svg"
import arrow_black from "assets/images/arrow-black.svg"
import { useState } from "react"

const Category = () => {

    const [showCatalog, setShowCatalog] = useState(false)

    return (
        <div className="category w-full lg:w-4/5 bg-grey-light lg:bg-white lg:border border-grey flex flex-col text-grey-dark ctext-base">
            {/* user */}
            <div className="header-user-info w-full flex lg:hidden justify-center cursor-pointer mt-6 mb-3">
                <img src={user_photo} alt="user-avatar" className="object-cover" />
                <div className="ml-2">
                    <div className="ctext-sm text-grey-dark font-medium">userName</div>
                    <div className="ctext-xs text-grey-dark">123 000 000 сум</div>
                </div>
            </div>
            {/* login user */}
            <div className="header-user-login w-full flex lg:hidden justify-center items-center cursor-pointer mt-6 mb-3">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white border border-grey">
                    <img src={mob_icon_user} alt="user-avatar" className="object-cover" />
                </div>
                <div className="ctext-sm text-grey-dark font-medium mx-2 cursor-pointer hover:text-blue">Войти</div>
                <img src={arrow_black} alt="arrow-icon" width="15px" />
            </div>
            {/* search */}
            <div className="header-search flex md:hidden justify-center my-4 mb-8 px-4">
                <input type="text" placeholder="Введите книгу, автора..." className="h-full w-full rounded border border-grey focus:outline-none px-3 text-grey-dark" />
                <button className="h-full bg-blue rounded px-3 -ml-1 focus:outline-none"><img src={icon_search} alt="search-icon" /></button>
            </div>
            {/* menu */}
            <div className="menu relative w-screen lg:w-full h-screen lg:h-full overflow-hidden">
                <div className="absolute w-full bg-grey-light block lg:hidden text-grey-dark font-bold">
                    <div
                        onClick={() => setShowCatalog(!showCatalog)}
                        className="flex p-4 active-menu">
                        {showCatalog ? "Назад" : "Категории"}
                        <img src={icon_arrow} alt="arrow-icon" className={`ml-2 transition-all ${showCatalog && 'transform rotate-180'}`} />
                    </div>
                    <div className="p-4">Акции и скидки </div>
                    <div className="p-4">Топ - книги </div>
                    <div className="p-4">Новости </div>
                    <div className="p-4">Оплата </div>
                    <div className="p-4">Обратная связь </div>
                </div>
                {/* list */}
                <div className={`list absolute lg:relative border-r border-blue transition-all duration-1000 ${showCatalog ? 'right-0' : 'right-full'} lg:left-0 flex lg:flex-row flex-wrap bg-grey-light lg:bg-white`}>
                    <div className="w-full lg:w-1/4 mt-6 p-3">
                        <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
                            Детективы
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">
                        <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
                            Маркетинг
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">
                        <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
                            Семейные
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Дизайн</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Фантастика</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Медицина</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Маркетинг</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Семейные</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Дизайн</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Фантастика</div>
                    <div className="w-full lg:w-1/4 cursor-pointer mt-6 p-3">Медицина</div>
                </div>
            </div>
        </div>
    )
}

export default Category;