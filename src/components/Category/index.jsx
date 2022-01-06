import "./style.css";
import icon_search from "assets/images/icon-search.svg";
// import user_photo from "assets/images/user_avatar 94.png"
import icon_arrow from "assets/images/arrow.svg";
import mob_icon_user from "assets/images/mob-icon-user.svg";
import arrow_black from "assets/images/arrow-black.svg";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoCloseOutline } from "react-icons/io5";
import { setAuth } from "redux/modals";
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../../axios';
// import { useParams } from "react-router-dom";
import i18n from '../../i18n';



const Category = ({ catalog, setCatalog }) => {
  const dispatch = useDispatch();
  const route = useHistory();
  const [showCatalog, setShowCatalog] = useState(false);
  // const catalogTitile = useParams().catalog
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance.get('category/')
      .then(res => setData(res.data))
  }, [])

  const {t} = useTranslation()

  return (
    <div
      className={`${catalog ? 'w-10/12' : 'w-0'} transition-all duration-500 overflow-hidden category fixed sm:relative top-0 z-50 sm:-ml-4 lg:ml-0 sm:w-full lg:w-4/5 bg-grey-light lg:bg-white lg:border border-grey flex flex-col text-grey-dark ctext-base`}
    >
      {/* background */}
      <IoCloseOutline 
        onClick={() => {
          setCatalog(false)
          setShowCatalog(false)
        }}
        className={`${catalog ? 'block' : 'hidden'} fixed top-0 right-0 text-white text-5xl m-1 z-50`} />
      <div className={`${catalog ? 'block' : 'hidden'} bg-black-black w-full h-full fixed top-0 left-0 opacity-60`}>
      </div>
      {/* user */}
      {/* <div
                    onClick={() => route.push('/user')}
                    className="header-user-info w-full flex lg:hidden justify-center cursor-pointer mt-6 mb-3">
                    <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user-avatar" className="object-cover rounded-full" />
                    <div className="ml-2">
                        <div className="ctext-sm text-grey-dark font-medium">userName</div>
                        <div className="ctext-xs text-grey-dark">123 000 000 сум</div>
                    </div>
                </div> */}
      {/* login user */}
      <div
        onClick={() => dispatch(setAuth(true))}
        className="header-user-login w-full hidden sm:flex xl:hidden justify-center items-center cursor-pointer mt-6 mb-3"
      >
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white border border-grey">
          <img src={mob_icon_user} alt="user-avatar" className="object-cover" />
        </div>
        <div className="ctext-sm text-grey-dark font-medium mx-2 cursor-pointer hover:text-blue">
          {t("header.login")}
        </div>
        <img src={arrow_black} alt="arrow-icon" width="15px" />
      </div>
      {/* search */}
      <div className="header-search hidden sm:flex md:hidden justify-center my-4 mb-8 px-4">
        <input
          type="text"
          placeholder={`${t("placeholders.book_search")}`}
          className="h-full w-full rounded border border-grey focus:outline-none px-3 text-grey-dark"
        />
        <button className="h-full bg-blue rounded px-3 -ml-1 focus:outline-none">
          <img src={icon_search} alt="search-icon" />
        </button>
      </div>
      {/* menu */}
      <div className="menu relative w-screen lg:w-full h-screen lg:h-full overflow-hidden z-40">
        <div className="absolute w-full h-full sm:h-auto bg-grey-light block lg:hidden text-grey-dark font-bold">
          <div
            onClick={() => setShowCatalog(!showCatalog)}
            className="flex p-4 active-menu cursor-pointer"
          >
            {showCatalog ? `${t("back")}` : `${t("header.categories")}`}
            <img
              src={icon_arrow}
              alt="arrow-icon"
              className={`ml-2 transition-all ${
                showCatalog && "transform rotate-180"
              }`}
            />
          </div>
          <div
            onClick={() => {
              setCatalog(false);
              route.push("/discounts");
            }}
            className="p-4 cursor-pointer"
          >
            {t("nav.discounts_and_sales")}
          </div>
          <div
            onClick={() => {
              setCatalog(false);
              route.push("/tops");
            }}
            className="p-4 cursor-pointer"
          >
            {t("nav.top_books")}
          </div>
          <div
            onClick={() => {
              setCatalog(false);
              route.push("/news");
            }}
            className="p-4 cursor-pointer"
          >
            {t("nav.news")}
          </div>
          <div
            onClick={() => {
              setCatalog(false);
              route.push("/payment");
            }}
            className="p-4 cursor-pointer"
          >
            {t("nav.payment")}
          </div>
          <div
            onClick={() => {
              setCatalog(false);
              route.push("/feedback");
            }}
            className="p-4 cursor-pointer"
          >
            {t("nav.service")}
          </div>
        </div>
        {/* list */}
        <div
          className={`list w-full h-full absolute left-0 lg:relative border-r border-blue transition-all duration-700 transform ${
            showCatalog
              ? "trlanslate-x-0"
              : "-translate-x-full lg:translate-x-0"
          } flex flex-col lg:flex-row flex-wrap bg-grey-light lg:bg-white overflow-y-scroll sm:overflow-y-auto`}
        >
          {data.map(category => {
            return(
              <div
                key={category.id}
                onClick={() => {
                  route.push(`/category/${category.title_en}`);
                  setCatalog(false);
                }}
                className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
              >
                <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
                  {/* eslint-disable-next-line */}
                  {eval(`category.title_${i18n.language}`)}
                </div>
              </div>
            )
          })}
          {/* <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Детективы
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/user");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Маркетинг
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Детективы
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Маркетинг
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Маркетинг
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div>
          <div
            onClick={() => {
              route.push("/category");
              setCatalog(false);
            }}
            className="w-full lg:w-1/4 cursor-pointer mt-6 p-3"
          >
            <div className="inline-block border-b-2 border-grey-light lg:border-white hover:border-blue hover:text-blue cursor-pointer">
              Семейные
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
