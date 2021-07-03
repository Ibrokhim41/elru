import "./style.css";
import icon_arrow from 'assets/images/arrow-blue.svg';
import icon_chevron from "assets/images/chevron.svg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from 'components/Cart';
import { useWindowDimensions } from "../../hooks/ScreenWidth"

const CartSliderContainer = ({title, linkText}) => {

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
                    right: "-15px", 
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
                    left: "-15px", 
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
        slidesToShow: width > "1440" ? 6 : width > "992" ? 5 : width > "769" ? 4 : width > "530" ? 3 : width > "380" ? 2 : 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container mx-auto my-0 mt-5 sm:my-10">
            {/* title */}
            <div className="w-full flex justify-between mb-7">
                <div className="ctext-xl text-black font-bold">{title}</div>
                {/* <div className="ctext-lg text-blue flex items-center cursor-pointer group">{linkText}<img src={icon_arrow} alt="arrow-icon" className="w-4 h-4 ml-2 transition-all transform group-hover:translate-x-1" /></div> */}
                <div className="ctext-lg text-blue flex items-center cursor-pointer group">{width > 410 ? linkText : "Все" } <img src={icon_arrow} alt="arrow-icon" className="w-4 h-4 ml-2 transition-all transform group-hover:translate-x-1" /></div>
            </div>
            {/* container */}
            <div className="book-slider">
                <Slider {...settings} >
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </Slider>
            </div>
        </div>
    )
}

export default CartSliderContainer;