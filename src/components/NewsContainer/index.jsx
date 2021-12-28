import "./style.css"
import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';
import icon_chevron from 'assets/images/chevron.svg';
import animateScrollTo from "animated-scroll-to";
import { useWindowDimensions } from "hooks/ScreenWidth"
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import cliTruncate from "cli-truncate";
import { axiosInstance } from '../../axios';
import Loading from 'components/Loading';


const CartSliderContainer = () => {

    const route = useHistory()
    const { width } = useWindowDimensions()
    const [news, setNews] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const booksPerPage = width > 1023 ? 15 : width > 768 ? 10 : 10
    const pagesVisited = pageNumber * booksPerPage
    const pageCount = Math.ceil(news.length / booksPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        animateScrollTo(0)
    }

    const prev = <div>
        <img src={icon_chevron} alt="prev" className="transform rotate-180" />
    </div>
    const next = <div>
        <img src={icon_chevron} alt="next" className="" />
    </div>

    const fetchNews = () => {
        axiosInstance.get('/news/')
            .then(res => {
                setNews(res.data)
            })
    }

    useEffect(() => {
        fetchNews()
    }, [])


    return (
        <>
            {news.length ?
                <div className="container mx-auto flex flex-wrap my-20 md:my-8">
                    {/* title */}
                    <div className="container mx-auto text-black ctext-xl font-bold my-4">Новости</div>
                    {news
                        .slice(pagesVisited, pagesVisited + booksPerPage)
                        .map(news => {
                            return (
                                <div
                                    key={news.id}
                                    onClick={() => route.push(`/article/${news.id}`)}
                                    className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="relative border-2 border-grey cursor-pointer rounded-md">
                                        <img
                                            src={news.image}
                                            className={`w-full h-40 object-cover`}
                                            alt="news-img" />
                                        <div className="p-4">
                                            <div className="ctext-base text-black font-bold">{news.title_ru && cliTruncate(news.title_ru, 50)}</div>
                                            <div className="text-grey-dark ctext-base font-medium mt-1">{news.info_ru && cliTruncate(news.info_ru, 160)}</div>
                                            <div className="absolute pr-1 bottom-0 right-0 text-grey font-medium ctext-base -mt-1 float-right">{moment(news.created_at).format("DD.MM.YYYY")}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    <ReactPaginate
                        previousLabel={prev}
                        nextLabel={next}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName="pagination w-full flex justify-center text-grey-dark font-medium"
                        activeClassName="text-white bg-blue"
                    />
                </div> :
                <Loading />}
        </>
    )
}

export default CartSliderContainer;