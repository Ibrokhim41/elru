import "./style.css"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowDimensions } from 'hooks/ScreenWidth';
import Cart from "components/Cart";

const BookSmillar = () => {

    const { width } = useWindowDimensions()

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    zIndex: "5",
                    left: width > 1200 ? "100%" : "98%",
                    right: "none",
                    top: "25%",
                    display: width > 768 ? "block" : "none"
                }}
                onClick={onClick}
            >
                <FaChevronCircleRight className="text-grey text-3xl hover:text-blue" />
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
                    zIndex: "5",
                    left: width > 1200 ? "100%" : "98%",
                    top: "55%",
                    display: width > 768 ? "block" : "none"
                }}
                onClick={onClick}
            >
                <FaChevronCircleLeft className="text-grey text-3xl hover:text-blue" />
            </div>
        )
    }

    const settings = {
        dots: false,
        autoplay: true,
        infinite: false,
        speed: 500,
        slidesToShow: width > 1200 ? 3 : 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className="book-smillar-container container mx-auto border-t border-b border-grey">
            <div className="py-4">
                {/* title */}
                <div className="text-black-dark ctext-lg font-bold mb-4">Похожие книги</div>
                {/* body */}
                <div className="book-smillar-slider">
                    <Slider {...settings}>
                        <span>
                            {width > 576 ? <div className="w-11/12 flex items-center">
                                <div
                                    style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                                    className="book-smillar cursor-pointer"></div>
                                <div className="ml-2">
                                    <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                                    <div className="text-grey ctext-sm mt-2">Бумажная, аудио, pdf</div>
                                    <div className="text-grey-dark ctext-default font-medium inline-block cursor-pointer">Скотт Вестерфельд</div>
                                </div>
                            </div>
                                :
                                <Cart />
                            }
                        </span>
                        <span>
                            {width > 576 ? <div className="w-11/12 flex items-center">
                                <div
                                    style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                                    className="book-smillar cursor-pointer"></div>
                                <div className="ml-2">
                                    <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                                    <div className="text-grey ctext-sm mt-2">Бумажная, аудио, pdf</div>
                                    <div className="text-grey-dark ctext-default font-medium inline-block cursor-pointer">Скотт Вестерфельд</div>
                                </div>
                            </div>
                                :
                                <Cart />
                            }
                        </span>
                        <span>
                            {width > 576 ? <div className="flex items-center">
                                <div
                                    style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                                    className="book-smillar cursor-pointer"></div>
                                <div className="ml-2">
                                    <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                                    <div className="text-grey ctext-sm mt-2">Бумажная, аудио, pdf</div>
                                    <div className="text-grey-dark ctext-default font-medium inline-block cursor-pointer">Скотт Вестерфельд</div>
                                </div>
                            </div>
                                :
                                <Cart />
                            }
                        </span>
                        <span>
                            {width > 576 ? <div className="flex items-center">
                                <div
                                    style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                                    className="book-smillar cursor-pointer"></div>
                                <div className="ml-2">
                                    <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                                    <div className="text-grey ctext-sm mt-2">Бумажная, аудио, pdf</div>
                                    <div className="text-grey-dark ctext-default font-medium inline-block cursor-pointer">Скотт Вестерфельд</div>
                                </div>
                            </div>
                                :
                                <Cart />
                            }
                        </span>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BookSmillar;