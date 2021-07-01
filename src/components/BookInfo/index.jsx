import "./style.css"
import icon_book from "assets/images/open-book.svg"
import icon_audio from "assets/images/audio-book.svg"
import icon_pdf from "assets/images/pdf-book.svg"
import icon_globus from "assets/images/icon-globus.svg"
import icon_files from "assets/images/icon-files.svg"
import icon_hotel from "assets/images/icon-hotel.svg"
// import icon_chevron from "assets/images/chevron.svg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import cliTruncate from 'cli-truncate';
import { useState } from 'react';

const BookInfo = () => {

    const [readMore, setReadMore] = useState(false)

    const text = "Книга об изменениях тела, которая поможет девочкам обрести уверенность в себе. Автор в формате коротких ироничных эссе дает полезные советы на темы, связанные с физиологией, которые не принято открыто обсуждать в обществе и семье. Книга об изменениях тела, которая поможет девочкам обрести уверенность в себе. Автор в формате коротких ироничных эссе дает полезные советы на темы."

    // const SampleNextArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{
    //                 ...style,
    //                 display: "flex",
    //                 width: "100%",
    //                 justifyContent: "center",
    //                 zIndex: "5",
    //                 right: "0",
    //                 top: "100%",
    //                 marginTop: "10px"
    //             }}
    //             onClick={onClick}
    //         >
    //             <img src={icon_chevron} alt="chevron-icon" className="w-3 transform rotate-90" />
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
    //                 display: "flex",
    //                 width: "100%",
    //                 justifyContent: "center",
    //                 zIndex: "5",
    //                 left: "0",
    //                 top: "-14px",
    //             }}
    //             onClick={onClick}
    //         >
    //             <img src={icon_chevron} alt="chevron-icon" className="w-3 transform -rotate-90" />
    //         </div>
    //     )
    // }

    // const settings = {
    //     dots: false,
    //     autoplay: false,
    //     infinite: false,
    //     slidesToShow: 3,
    //     speed: 500,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />
    // };


    return (
        <div className="w-full">
            {/* titile */}
            <div className="text-blue-dark ctext-xl font-bold">Уродина, в поисках пути к счастью и процветанию</div>
            {/* discount */}
            <div className="flex gap-2 mt-4">
                <div className="py-1 px-2 text-white rounded-md font-bold ctext-base bg-red-dark">Бестселлер</div>
                <div className="py-1 px-2 text-white rounded-md font-bold ctext-base bg-green">Новинка</div>
                <div className="py-1 px-2 text-white rounded-md font-bold ctext-base bg-blue">-90%</div>
            </div>
            {/* category author */}
            <div className="text-grey-dark ctext-base font-medium mt-2 mb-4">2020</div>
            <div className="text-grey-dark ctext-base font-medium mb-4">Автор: <span className="text-blue border-b-2  cursor-pointer">Скотт Вестерфельд</span></div>
            <div className="text-grey-dark ctext-base font-medium mb-4">Ужасы, драмма, фантастика</div>
            {/* formats */}
            <div className="text-black-dark ctext-base font-bold mb-4">Доступные форматы:</div>
            <div className="flex gap-4">
                <div className="flex items-center ctext-base text-grey-dark font-medium">Бумажная <img src={icon_book} alt="book" className="ml-1" /></div>
                <div className="flex items-center ctext-base text-grey-dark font-medium">Аудио <img src={icon_audio} alt="audio" className="ml-1" /></div>
                <div className="flex items-center ctext-base text-grey-dark font-medium">PDF  <img src={icon_pdf} alt="pdf" className="ml-1" /></div>
            </div>
            {/* slider */}
            <div className="flex justify-evenly py-4 border-t border-b border-grey-border my-4">
                {/* <Slider {...settings} /> */}
                <div className="flex flex-col justify-center items-center">
                    <div className="ctext-xs text-grey font-medium">Язык</div>
                    <img src={icon_globus} alt="globus" width="24px" height="24px" className="my-1" />
                    <div className="ctext-xs text-grey-dark font-semibold">Русский</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="ctext-xs text-grey font-medium">Страницы</div>
                    <img src={icon_files} alt="files" width="24px" height="24px" className="my-1" />
                    <div className="ctext-xs text-grey-dark font-semibold">365</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="ctext-xs text-grey font-medium">Издательство</div>
                    <img src={icon_hotel} alt="hotel" width="24px" height="24px" className="my-1" />
                    <div className="ctext-xs text-grey-dark font-semibold">Альпина Паблишер</div>
                </div>
            </div>
            {/*  */}
            <div className="text-black-black ctext-lg font-bold mt-4 mb-2">Описание:</div>
            <div className={`text-grey-dark ctext-base font-medium ${!readMore && 'text-doted'}`}>
                {readMore ? text : cliTruncate(text, 200)}
            </div>
            <div 
                onClick={() => setReadMore(!readMore)}
                className={`${text.length > 200 ? 'inline-block' : 'hidden'} text-blue ctext-base font-medium border-b-2 mt-4 cursor-pointer`}>{readMore ? "Скрить" : "Читать больше"}</div>
        </div>
    )
}

export default BookInfo;