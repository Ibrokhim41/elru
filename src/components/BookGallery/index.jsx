import "./style.css"
// import { BiChevronUpCircle, BiChevronDownCircle} from "react-icons/bi"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useWindowDimensions } from 'hooks/ScreenWidth';
import { useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookGallery = () => {

    const { width } = useWindowDimensions()
    // eslint-disable-next-line
    const [mainImage, setMainImage] = useState('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105')
    // eslint-disable-next-line
    const [mockImage, setMockImage] = useState(["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxG94GriGy7XUjtU1kNwh-mTqakdiGC4JVw&usqp=CAU", "https://i.pinimg.com/736x/8b/e3/82/8be382fd93104a0b8bd1cb525c9c37fc.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4yGwkz128dpVHBztwERbm6Z6kIXwQ03V0A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_hNzg7tAu4Jo1--XxevtVfGyD-kk4T76uw&usqp=CAU"])

    const id = useParams().id
    const [data, setData] = useState(null)

    useEffect(() => {
        id && axiosInstance.get('user/books/')
            .then(async res => {
                const book = res.data.filter(book => book.id.toString() === id.toString())
                setData(book[0])
            })
    }, [id])

    const settings = {
        dots: width > 769 ? false : true,
        autoplay: false,
        infinite: false,
        vertical: width > 769 ? true : false,
        slidesToShow: width > 769 ? 5 : 1,
        speed: 500,
        arrows: false,
    };

    useEffect(() => {
        axiosInstance.get('user/books/')
            .then(res => {

            })
    }, [])


    return (
        <div className="flex justify-between book-gallery">
            <div className={`w-full md:w-1/5 book-slider ${mockImage.length > 5 && 'mt-0'}`}>
                <Slider {...settings}>
                    {mockImage.map((image, i) => {
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
                style={{ background: `url('${data && data.image}')` }}
                className="book-gallery-main mx-auto"></div>
        </div>
    )
}

export default BookGallery;