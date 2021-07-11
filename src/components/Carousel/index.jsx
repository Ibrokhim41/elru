import "./style.css";
import icon_chevron from "assets/images/chevron.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {

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
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    zIndex: "5",
                    right: "10px",
                    opacity: '0.7',
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
                    height: "40px",
                    width: "40px",
                    zIndex: "5",
                    left: "10px",
                    opacity: '0.7',
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
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container mx-auto w-full hidden sm:flex flex-col lg:flex-row justify-between gap-2 md:gap-4 mt-4 mb-10">
            {/* left */}
            <div className="w-full lg:w-8/12">
                <Slider {...settings}>
                    <div>
                        <div
                            style={{ backgroundImage: `url('https://img.labirint.ru/images/att/news/1-20847-1530190685-1508.png')` }}
                            className="carousel cursor-pointer w-full bg-center bg-cover bg-no-repeat rounded-md"
                        >
                        </div>
                    </div>
                    <div>
                        <div
                            style={{ backgroundImage: `url('https://www.meaningfullife.com/wp-content/uploads/2014/03/Books-banner.jpg')` }}
                            className="carousel cursor-pointer w-full h-full bg-center bg-cover bg-no-repeat rounded-md"
                        >
                        </div>
                    </div>
                    <div>
                        <div
                            style={{ backgroundImage: `url('https://i0.wp.com/storage.googleapis.com/stateless-thedailyfandom-org/2020/06/62307a1e-5books-hirsh-e1560801690189.png')` }}
                            className="carousel cursor-pointer w-full h-full bg-center bg-cover bg-no-repeat rounded-md"
                        >
                        </div>
                    </div>
                </Slider>
            </div>
            {/* right */}
            <div className="w-full lg:w-4/12 flex lg:flex-col lg:justify-between items-center mt-8 md:mt-4 lg:mt-0">
                <div 
                    style={{ backgroundImage: `url('https://cdn.slidesharecdn.com/ss_thumbnails/amazoncreatespacehorrorebookcoverdesign2-190315015045-thumbnail-4.jpg?cb=1552614805')` }}
                    className="w-full h-36 mr-2 lg:mr-0 lg:mb-2 md:h-40 lg:h-1/2 cursor-pointer rounded-md bg-center bg-cover bg-no-repeat"></div>
                <div 
                    style={{ backgroundImage: `url('https://i.ytimg.com/vi/TwsZmALRq5w/maxresdefault.jpg')` }}
                    className="w-full h-36 ml-2 lg:ml-0 lg:mt-2 md:h-40 lg:h-1/2 cursor-pointer rounded-md bg-center bg-cover bg-no-repeat"></div>
            </div>
        </div>
    )
}

export default Carousel;