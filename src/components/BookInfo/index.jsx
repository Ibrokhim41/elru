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
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const BookInfo = () => {

    const language = useSelector(state => state.modals.getLanguage)
    const [readMore, setReadMore] = useState(false)
    const id = useParams().id
    const [data, setData] = useState(null)

    useEffect(() => {
        id && axiosInstance.get('user/books/')
            .then(async res => {
                const book = res.data.filter(book => book.id.toString() === id.toString())
                setData(book[0])
            })
    }, [id, language])


    return (
        <>
            {data ?
                <div className={`w-full`}>
                    {/* titile */}
                    {/* eslint-disable-next-line */}
                    <div className="text-blue-dark ctext-xl font-bold">{data.title_ru && eval(`data.title_${language}`)}</div>
                    {/* discount */}
                    <div className="flex mt-4">
                        <div className="py-1 px-2 mx-1 text-white rounded-md font-bold ctext-base bg-red-dark">Бестселлер</div>
                        <div className="py-1 px-2 mx-1 text-white rounded-md font-bold ctext-base bg-green">Новинка</div>
                        <div className="py-1 px-2 mx-1 text-white rounded-md font-bold ctext-base bg-blue">-90%</div>
                    </div>
                    {/* category author */}
                    <div className="text-grey-dark ctext-base font-medium mt-2 mb-4">{data.year && data.year}</div>
                    {/* eslint-disable-next-line */}
                    <div className="text-grey-dark ctext-base font-medium mb-4">Автор: <span className="text-blue border-b-2  cursor-pointer">{data.author && eval(`data.author.name_${language}`)}</span></div>
                    <div className="text-grey-dark ctext-base font-medium mb-4">{data.category.title_ru && data.category.title_ru}</div>
                    {/* formats */}
                    <div className="text-black-dark ctext-base font-bold mb-4">Доступные форматы:</div>
                    {
                        data.form.legth &&
                        <div className="flex gap-4">
                            {data.form.includes('paper') && <div className="flex items-center ctext-base text-grey-dark font-medium">Бумажная <img src={icon_book} alt="book" className="ml-1" /></div>}
                            {data.form.includes('audio') && <div className="flex items-center ctext-base text-grey-dark font-medium">Аудио <img src={icon_audio} alt="audio" className="ml-1" /></div>}
                            {data.form.includes('pdf') && <div className="flex items-center ctext-base text-grey-dark font-medium">PDF  <img src={icon_pdf} alt="pdf" className="ml-1" /></div>}
                        </div>
                    }
                    {/* slider */}
                    <div className="flex justify-evenly py-4 border-t border-b border-grey-border my-4">
                        {/* <Slider {...settings} /> */}
                        {
                            data.languages.length &&
                            data.languages.map(language => 
                                <div className="flex flex-col justify-center items-center">
                                    <div className="ctext-xs text-grey font-medium">Язык</div>
                                    <img src={icon_globus} alt="globus" width="24px" height="24px" className="my-1" />
                                    <div className="ctext-xs text-grey-dark font-semibold">{language.title}</div>
                                </div>
                            )
                        }
                        {
                            data.print_length &&
                            <div className="flex flex-col justify-center items-center">
                                <div className="ctext-xs text-grey font-medium">Страницы</div>
                                <img src={icon_files} alt="files" width="24px" height="24px" className="my-1" />
                                <div className="ctext-xs text-grey-dark font-semibold">{data.print_length}</div>
                            </div>
                        }
                        {
                            data.publisher &&
                            <div className="flex flex-col justify-center items-center">
                                <div className="ctext-xs text-grey font-medium">Издательство</div>
                                <img src={icon_hotel} alt="hotel" width="24px" height="24px" className="my-1" />
                                <div className="ctext-xs text-grey-dark font-semibold">{data.publisher.title_ru}</div>
                            </div>
                        }
                    </div>
                    {/*  */}
                    <div className="text-black-black ctext-lg font-bold mt-4 mb-2">Описание:</div>
                    {data.description_ru &&
                        <>
                            <div className={`text-grey-dark ctext-base font-medium ${!readMore && 'text-doted'}`}>
                            {/* eslint-disable-next-line */}
                            {readMore ? eval(`data.description_${language}`) : cliTruncate(eval(`data.description_${language}`), 200)}
                            </div>
                            <div
                                onClick={() => setReadMore(!readMore)}
                                className={`${data.description_ru.length > 200 ? 'inline-block' : 'hidden'} text-blue ctext-base font-medium border-b-2 mt-4 cursor-pointer`}>{readMore ? "Скрить" : "Читать больше"}
                            </div>
                        </>
                    }
                </div>
                : ''}
        </>
    )
}

export default BookInfo;