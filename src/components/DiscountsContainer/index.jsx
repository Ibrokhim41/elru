import "./style.css";
import icon_chevron from "assets/images/chevron.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowDimensions } from "../../hooks/ScreenWidth"
import { useHistory } from 'react-router-dom';

const SpecialContainer = () => {

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
        slidesToShow: width > "1440" ? 4 : width > "992" ? 3 : width > "769" ? 3 : width > "530" ? 2 : 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    }

    return (
        <div className="bg-grey-light py-7">
            <div className="specialContainer container mx-auto">
                <Slider {...settings}>
                    <div 
                        onClick={() => route.push('/book')}
                        className="cursor-pointer">
                        <img src="https://i.ytimg.com/vi/awfn8dP1UYI/maxresdefault.jpg" alt="post" className="w-full h-36 object-cover rounded-md" />
                        <div className="ctext-base text-black font-medium mt-4">Скидка 20% на все книги категории “Ужасы”</div>
                    </div>
                    <div
                        onClick={() => route.push('/book')}
                        className="cursor-pointer">
                        <img src="https://i.ytimg.com/vi/awfn8dP1UYI/maxresdefault.jpg" alt="post" className="w-full h-36 object-cover rounded-md" />
                        <div className="ctext-base text-black font-medium mt-4">Скидка 20% на все книги категории “Ужасы”</div>
                    </div><div
                        onClick={() => route.push('/book')}
                        className="cursor-pointer">
                        <img src="https://i.ytimg.com/vi/awfn8dP1UYI/maxresdefault.jpg" alt="post" className="w-full h-36 object-cover rounded-md" />
                        <div className="ctext-base text-black font-medium mt-4">Скидка 20% на все книги категории “Ужасы”</div>
                    </div><div
                        onClick={() => route.push('/book')}
                        className="cursor-pointer">
                        <img src="https://i.ytimg.com/vi/awfn8dP1UYI/maxresdefault.jpg" alt="post" className="w-full h-36 object-cover rounded-md" />
                        <div className="ctext-base text-black font-medium mt-4">Скидка 20% на все книги категории “Ужасы”</div>
                    </div><div
                        onClick={() => route.push('/book')}
                        className="cursor-pointer">
                        <img src="https://i.ytimg.com/vi/awfn8dP1UYI/maxresdefault.jpg" alt="post" className="w-full h-36 object-cover rounded-md" />
                        <div className="ctext-base text-black font-medium mt-4">Скидка 20% на все книги категории “Ужасы”</div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SpecialContainer;