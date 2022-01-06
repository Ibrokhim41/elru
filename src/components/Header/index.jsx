import "./style.css";
import elru_logo from "assets/images/logo_elru.svg";
import icon_phone from "assets/images/icon-phone.svg";
import icon_search from "assets/images/icon-search.svg";
import icon_chat from "assets/images/icon-chat.svg";
import icon_order from "assets/images/icon-order.svg";
import icon_basket from "assets/images/icon-basket.svg";
import mob_icon_home from "assets/images/mob-icon-home.svg";
import mob_icon_basket from "assets/images/mob-icon-basket.svg";
import mob_icon_user from "assets/images/mob-icon-user.svg";
import mob_icon_search from "assets/images/mob-icon-search.svg";
import arrow_black from "assets/images/arrow-black.svg";
import Category from "components/Category";
import Auth from "components/Auth";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setLanguage, setStartChat } from "redux/modals";
import { useTranslation } from "react-i18next";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useWindowDimensions } from 'hooks/ScreenWidth';
import { useCallback } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import axios from 'axios';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.modals.auth)
  const { t, i18n } = useTranslation();
  const changeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    await setCheckLanguage(language);
    await dispatch(setLanguage(i18n.language))
  };
  const route = useHistory();
  const [catalog, setCatalog] = useState(false);
  const { width } = useWindowDimensions();
  const ref = useDetectClickOutside({
    onTriggered: () => {
      width > 1024 && setCatalog(false)
    }
  });

  const [search, setSearch] = useState("");
  const submitSearch = (e) => {
    e.preventDefault();
    route.push(`/searchresults/${search}`);
    setSearch("")
  };

  const handleCatalog = () => {
    setCatalog(!catalog);
  };

  const [checkLanguage, setCheckLanguage] = useState("");
  useEffect(() => {
    setCheckLanguage(localStorage.getItem("i18nextLng"));
  }, []);
  useEffect(() => {
    auth ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
  }, [auth])

  // const [count] = useState(4)
  const count = useSelector(state => state.books.cart)

  const [y, setY] = useState(0);
  const [isUp, setIsUp] = useState(true);

  const handleScroll = useCallback(() => {
    if (y > window.scrollY) {
      setIsUp(true)
    } else {
      setIsUp(false)
    }
    window.scrollY < 100 && setIsUp(true)
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll])

  // delete
  // const test = () => {
  //   axios.post('https://data.elru.uz/ru/accounts/login/', {
  //     "login": "elruadmin",
  //     "password": "elruadmin2021"
  //   }).then(res => {
  //     console.log(res);
  //   })
  // }
  // const test_get = () => {
  //   axios.get('https://data.elru.uz/ru/accounts/profile/', {
  //     headers: {
  //       Authorization: 'Bearer .eJxVjEEOwiAQRe_C2pAOI7S4dO8ZCDAzUjU0Ke3KeHfbpAvd_vfef6sQ16WEtfEcRlIXBer0u6WYn1x3QI9Y75POU13mMeld0Qdt-jYRv66H-3dQYitb7TE5EcuuS2cyaJwbiElg8CzkYvYUoWeDuBnsc-pMj4CQLSZhAas-X_mHOGY:1n4c5T:6U9ofh5Z7NMaPPFcWUME2qpCt81fapaIVtrwmuiRHTA'
  //     }
  //   }).then(res => {
  //     console.log(res);
  //   })
  // }

  return (
    <>
      <div className={`${isUp ? 'top-0' : '-top-full'} fixed transition-all duration-300 header bg-white w-full z-50`}>
        <Auth />
        {/* header-top */}
        <div className="header-top container mx-auto hidden sm:flex items-center text-grey-dark font-bold">
          {/* logo */}
          <div className="flex-auto">
            <div>
              <img src={elru_logo} alt="elru.uz_logo" onClick={() => route.push("/")} className="cursor-pointer" />
            </div>
          </div>
          {/* nav-top */}
          <div className="nav-top hidden xl:flex flex-auto justify-around ctext-xs">
            <div
              onClick={() => route.push("/discounts")}
              className="hover:text-blue cursor-pointer"
            >
              {t("nav.discounts_and_sales")}
            </div>
            <div
              onClick={() => route.push("/tops")}
              className="hover:text-blue cursor-pointer"
            >
              {t("nav.top_books")}
            </div>
            <div
              onClick={() => route.push("/news")}
              className="hover:text-blue cursor-pointer"
            >
              {t("nav.news")}
            </div>
            <div
              onClick={() => route.push("/payment")}
              className="hover:text-blue cursor-pointer"
            >
              {t("nav.payment")}
            </div>
            <div
              onClick={() => route.push("/feedback")}
              className="hover:text-blue cursor-pointer"
            >
              {t("nav.service")}
            </div>
          </div>
          {/* tel & lang */}
          <div className="flex flex-auto xl:justify-center ctext-xs">
            <img src={icon_phone} alt="phone-icon" className="mr-1" />
            <a href="tel:+998993144263" className="hover:text-blue">
              +998 99 314 42 63
            </a>
          </div>
          <div className="lang flex justify-items-end text-sm text-grey">
            <div
              onClick={() => changeLanguage("ru")}
              className={`hover:text-blue cursor-pointer ${checkLanguage === "ru" && "text-blue"
                }`}
            >
              RU
            </div>
            <span className="px-1 lg:px-3">/</span>
            <div
              onClick={() => changeLanguage("uz")}
              className={`hover:text-blue cursor-pointer ${checkLanguage === "uz" && "text-blue"
                }`}
            >
              UZ
            </div>
          </div>
        </div>

        {/* header */}
        <div className="hidden sm:block bg-grey-light">
          <div className="relative container mx-auto flex items-center justify-between">
            <div
              className={`absolute w-full lg:w-11/12 top-full  z-20 ${catalog ? "block showCategory" : "hidden"
                }`}
            >
              <Category
                setCatalog={setCatalog}
                setShow={setAuth}
              />
            </div>
            <button
              ref={ref}
              onClick={handleCatalog}
              className="burger flex justify-center items-center h-full text-white bg-blue font-bold ctext-base focus:outline-none cursor-pointer"
            >
              <Hamburger toggled={catalog} size={20} />
              <span className="hidden lg:block">{t("header.categories")}</span>
            </button>
            {/* search */}
            <form onSubmit={submitSearch} className="header-search hidden md:flex">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder={`${t("placeholders.book_search")}`}
                className="h-full w-full rounded border border-grey focus:outline-none px-3 text-grey-dark"
              />
              <button
                onClick={submitSearch}
                type="submit"
                className="h-full bg-blue rounded px-3 -ml-1 focus:outline-none"
              >
                <img src={icon_search} alt="search-icon" />
              </button>
            </form>
            {/* user-route */}
            <div className="flex header-user font-medium ctext-sm">
              <button
                onClick={() => {
                  dispatch(setStartChat(true));
                  dispatch(setAuth(true));
                  route.push("/chat");
                }}
                className="flex flex-col items-center cursor-pointer text-grey-dark hover:text-blue"
              >
                <img src={icon_chat} alt="chat-icon" />
                {t("header.chat")}
              </button>
              <button
                onClick={() => route.push("/myorders")}
                className="flex flex-col items-center cursor-pointer text-grey-dark hover:text-blue mx-10"
              >
                <img src={icon_order} alt="order-icon" />
                {t("header.orders")}
              </button>
              <button
                onClick={() => route.push("/basket")}
                className="basket relative flex flex-col justify-between items-center cursor-pointer text-grey-dark hover:text-blue"
              >
                {/* <img src={icon_basket} alt="basket-icon" />
               */}
                <div style={{
                  backgroundImage: `url(${icon_basket})`,
                  backgroundRepeat: "no-repeat",
                  width: "38px",
                  height: "29px"
                }}>
                  <span
                    className="order-count absolute text-blue font-bold"
                    style={{
                      left: `${count.length > 9 ? '41%' : '47%'}`
                    }}>{count.length}</span>
                </div>
                {t("header.basket")}
              </button>
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
                <img
                  src={mob_icon_user}
                  alt="user-avatar"
                  className="object-cover"
                />
              </div>
              <div
                onClick={() => dispatch(setAuth(true))}
                className="ctext-sm text-grey-dark font-medium mx-2 cursor-pointer hover:text-blue"
              >
                {t("header.login")}
              </div>
              <img src={arrow_black} alt="arrow-icon" width="15px" />
            </div>
          </div>
        </div>

        {/* for mob size */}
        <div
          style={{ marginBottom: "80px" }}
          className="sm:hidden">
        </div>
        <div className={`sm:hidden`}>
          <Category
            catalog={catalog}
            setCatalog={setCatalog}
            setShow={setAuth}
          />
        </div>
        <form onSubmit={submitSearch} className="flex sm:hidden mob-top fixed top-0 sm:relative container bg-grey-light z-40">
          <div
            onClick={handleCatalog}
            className="text-blue mr-1 rounded-md font-bold ctext-base focus:outline-none cursor-pointer"
          >
            <Hamburger toggled={catalog} size={25} />
            <span className="hidden lg:block">{t("header.categories")}</span>
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder={`${t("placeholders.book_search")}`}
            className="w-full focus:outline-none pl-2 sm:pl-10 pr-10 sm:pr-0 border border-grey rounded text-grey-dark"
          />
          <button
            onClick={(e) => {
              route.push(`/searchresults/${search}`);
            }}
            className="absolute right-5 md:left-0 focus:outline-none"
          >
            <img src={mob_icon_search} alt="search-icon" />
          </button>
        </form>
        <div className="mob-bottom z-30 fixed bottom-0 left-0 w-full sm:hidden flex justify-around text-grey-dark ctext-xs bg-grey-light border-t border-grey">
          <div
            onClick={() => route.push("/")}
            className="flex flex-col items-center cursor-pointer"
          >
            <img src={mob_icon_home} alt="home-icon" />
            <span>Магазин</span>
          </div>
          <div
            onClick={() => route.push("/myorders")}
            className="flex flex-col items-center cursor-pointer"
          >
            <img src={icon_order} alt="order-icon" />
            <span>Мои заказы</span>
          </div>
          <div
            onClick={() => route.push("/basket")}
            className="relative flex flex-col items-center cursor-pointer"
          >
            <img src={mob_icon_basket} alt="basket-icon" />
            <span>Корзина</span>
            <div className={`${!count && 'hidden'} absolute top-0 right-0 bg-blue text-white font-bold rounded-full w-5 h-5 flex justify-center items-center`}>{count.length}</div>
          </div>
          <div
            onClick={() => {
              route.push("/user");
              setAuth(true);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <img src={mob_icon_user} alt="user-icon" />
            <span>Профиль</span>
          </div>
        </div>
        {/* mobile-chat */}
        <div
          onClick={() => route.push('/chat')}
          className={`${route.location.pathname === '/chat' && 'hidden'} block sm:hidden fixed bottom-16 right-5 bg-blue p-2 rounded-full`}>
          <IoChatbubbleEllipsesOutline className={`text-2xl text-white`} />
        </div>
      </div>
      <div className={`sm:mb-36`}></div>
    </>
  );
};

export default Header;
