import "./style.css";
import icon_chevron from "assets/images/chevron.svg";
import icon_arrow from 'assets/images/arrow-blue.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowDimensions } from "../../hooks/ScreenWidth";
import { useHistory } from 'react-router-dom';

const TopBooksContainer = () => {

    const route = useHistory()
    const { width } = useWindowDimensions();

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    zIndex: "5",
                    right: "-0px",
                    top: "50%",
                    boxShadow: "4px 4px 4px -1px rgba(0, 0, 0, 0.04)"
                }}
                onClick={onClick}
            >
                <img src={icon_chevron} alt="chevron-icon" className="w-3" />
            </div>
        )
    }
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    background: "#fff",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    zIndex: "5",
                    left: "-0px",
                    top: "50%",
                    justifyContent: "center",
                    boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.04)"
                }}
                onClick={onClick}
            >
                <img src={icon_chevron} alt="chevron-icon" className="w-3 transform rotate-180" />
            </div>
        )
    }

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: width > "1200" ? 2 : 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    }

    return (
        <div className="bg-grey-light py-10 top-books">
            {width > 576 ?
                <Slider  {...settings} className="container mx-auto">
                    <span>
                        <div className="w-full bg-white flex rounded-md py-7 px-9">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="ctext-2xl text-black font-bold uppercase">Топ 100 книг по саморазвитию</div>
                                    <div className="ctext-base text-grey font-medium">Лучшая подборка для тех, кто ищет мотивацию именно в книгах</div>
                                </div>
                                <button
                                    onClick={() => route.push('/top100')}
                                    className="w-min ctext-base font-bold text-white bg-blue rounded-md py-3 px-10 focus:outline-none">Посмотреть</button>
                            </div>
                            <div
                                style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                                className="top-books-img ml-4 rounded-md"
                            ></div>
                        </div>
                    </span>
                    <span>
                        <div className="w-full bg-white flex rounded-md py-7 px-9">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="ctext-2xl text-black font-bold uppercase">Топ 100 книг по саморазвитию</div>
                                    <div className="ctext-base text-grey font-medium">Лучшая подборка для тех, кто ищет мотивацию именно в книгах</div>
                                </div>
                                <button
                                    onClick={() => route.push('/top100')}
                                    className="w-min ctext-base font-bold text-white bg-blue rounded-md py-3 px-10 focus:outline-none">Посмотреть</button>
                            </div>
                            <div
                                style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                                className="top-books-img ml-4 rounded-md"
                            ></div>
                        </div>
                    </span><span>
                        <div className="w-full bg-white flex rounded-md py-7 px-9">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="ctext-2xl text-black font-bold uppercase">Топ 100 книг по саморазвитию</div>
                                    <div className="ctext-base text-grey font-medium">Лучшая подборка для тех, кто ищет мотивацию именно в книгах</div>
                                </div>
                                <button
                                    onClick={() => route.push('/top100')}
                                    className="w-min ctext-base font-bold text-white bg-blue rounded-md py-3 px-10 focus:outline-none">Посмотреть</button>
                            </div>
                            <div
                                style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                                className="top-books-img ml-4 rounded-md"
                            ></div>
                        </div>
                    </span>
                </Slider>
                :
                <div className="container mx-auto">
                    {/* for mobile */}
                    {/* titile */}
                    <div className="w-full flex justify-between mb-4">
                        <div className="ctext-xl text-black font-bold">Топ - 100</div>
                        <div className="ctext-lg text-blue flex items-center cursor-pointer group">Все {width > 410 && "рекомендованные"} <img src={icon_arrow} alt="arrow-icon" className="w-4 h-4 ml-2 transition-all transform group-hover:translate-x-1" /></div>
                    </div>
                    {/* container */}
                    <div
                        onClick={() => route.push('/top100')}
                        className="flex items-center mb-4">
                        <div className="w-20 h-20 flex justify-center items-center rounded-md bg-white border border-grey">
                            <span
                                style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                                className="mob-top-book-img block"
                            ></span>
                        </div>
                        <div className="ctext-lg text-dark font-semibold ml-4">Топ 100 шедевров научной фантастики</div>
                    </div>
                    <div
                        onClick={() => route.push('/top100')}
                        className="flex items-center mb-4">
                        <div className="w-20 h-20 flex justify-center items-center rounded-md bg-white border border-grey">
                            <span
                                style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                                className="mob-top-book-img block"
                            ></span>
                        </div>
                        <div className="ctext-lg text-dark font-semibold ml-4">Топ 100 шедевров научной фантастики</div>
                    </div>
                </div>}
        </div>
    )
}

export default TopBooksContainer;