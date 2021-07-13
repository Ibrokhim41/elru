
import "./style.css"
import ReactPaginate from "react-paginate";
import JsonData from "MOCK_DATA.json"
import { useState, useEffect } from 'react';
import icon_chevron from 'assets/images/chevron.svg';
import animateScrollTo from "animated-scroll-to";
import { useWindowDimensions } from "hooks/ScreenWidth"
import { useHistory } from 'react-router-dom';

const CartSliderContainer = () => {

    const route = useHistory()
    const { width } = useWindowDimensions()
    const [books, setBooks] = useState(JsonData)
    const [pageNumber, setPageNumber] = useState(0)
    const booksPerPage = width > 1023 ? 15 : width > 768 ? 10 : 10
    const pagesVisited = pageNumber * booksPerPage

    const displayBooks = books
        .slice(pagesVisited, pagesVisited + booksPerPage)
        .map(book => {
            return (
                <div 
                    onClick={() => route.push('/article')}
                    className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="border-2 border-grey cursor-pointer rounded-md">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                        <div className="p-4">
                            <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                            <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                            <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                        </div>
                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(books.length / booksPerPage)
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

    useEffect(() => {
        setBooks(JsonData)
    }, [])

    return (
        <>
            <div className="container mx-auto flex flex-wrap my-4 md:my-8">
                {/* title */}
                <div className="container mx-auto text-black ctext-xl font-bold my-8">Новости</div>
                {displayBooks}
                <ReactPaginate
                    previousLabel={prev}
                    nextLabel={next}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName="pagination w-full flex justify-center text-grey-dark font-medium"
                    activeClassName="text-white bg-blue"
                />
            </div>
        </>
    )
}

export default CartSliderContainer;