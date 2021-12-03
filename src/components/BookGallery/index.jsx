import "./style.css"
// import { BiChevronUpCircle, BiChevronDownCircle} from "react-icons/bi"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useWindowDimensions } from 'hooks/ScreenWidth';

const BookGallery = () => {

    const {width} = useWindowDimensions()

    const [mainImage, setMainImage] = useState('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105')
    const mockImage = ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxG94GriGy7XUjtU1kNwh-mTqakdiGC4JVw&usqp=CAU", "https://i.pinimg.com/736x/8b/e3/82/8be382fd93104a0b8bd1cb525c9c37fc.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4yGwkz128dpVHBztwERbm6Z6kIXwQ03V0A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_hNzg7tAu4Jo1--XxevtVfGyD-kk4T76uw&usqp=CAU"]
    // const mockImage = ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxG94GriGy7XUjtU1kNwh-mTqakdiGC4JVw&usqp=CAU",]

    // const SampleNextArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{
    //                 ...style,
    //                 display: width > 769 ? "flex" : "none",
    //                 width: "100%",
    //                 justifyContent: "center",
    //                 zIndex: "5",
    //                 right: "0",
    //                 top: "100%",
    //                 marginTop: "10px"
    //             }}
    //             onClick={onClick}
    //         >
    //             <BiChevronDownCircle className="text-lg text-blue" />
    //         </div>
    //     )
    // }
    // const SamplePrevArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{
    //                 ...style,
    //                 display: width > 769 ? "flex" : "none",
    //                 width: "100%",
    //                 justifyContent: "center",
    //                 zIndex: "5",
    //                 left: "0",
    //                 top: "-14px",
    //             }}
    //             onClick={onClick}
    //         >
    //             <BiChevronUpCircle className="text-lg text-blue" />
    //         </div>
    //     )
    // }

    const settings = {
        dots: width > 769 ? false : true,
        autoplay: false,
        infinite: false,
        vertical: width > 769 ? true : false,
        slidesToShow: width > 769 ? 5 : 1,
        speed: 500,
    };
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />


    return (
        <div className="flex justify-between book-gallery">
            <div className={`w-full md:w-1/5 book-slider ${mockImage.length > 5 && 'mt-0'}`}>
                <Slider {...settings}>
                    {mockImage.map((image,i) => {
                        return (
                            <span key={i}>
                                <div 
                                    onClick={() => setMainImage(image)}
                                    className="w-full flex justify-center">
                                    <div
                                        style={{ background: `url('${image}')` }}
                                        className="book-gallery-slider cursor-pointer">
                                    </div>
                                </div>
                            </span>
                        )
                    })}
                </Slider>
            </div>
            <div
                style={{ background: `url('${mainImage}')` }}
                className="book-gallery-main mx-auto"></div>
        </div>
    )
}

export default BookGallery;