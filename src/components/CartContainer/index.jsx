
import "./style.css"
import Cart from '../Cart/index';
import ReactPaginate from "react-paginate";
import JsonData from "MOCK_DATA.json"
import { useState, useEffect } from 'react';
import icon_chevron from 'assets/images/chevron.svg';
import animateScrollTo from "animated-scroll-to";
import { useWindowDimensions } from "hooks/ScreenWidth"

const CartSliderContainer = () => {

    const { width } = useWindowDimensions()

    const [books, setBooks] = useState(JsonData)
    const [pageNumber, setPageNumber] = useState(0)

    const booksPerPage = width > 1440 ? 24 : width > 769 ? 20 : width > 576 ? 15 : 12
    const pagesVisited = pageNumber * booksPerPage

    const displayBooks = books
        .slice(pagesVisited, pagesVisited + booksPerPage)
        .map(book => {
            return (
                <Cart author={book.name} />
            )
        })

    const pageCount = Math.ceil(books.length / booksPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        animateScrollTo(width > 1060 ? 500 : width > 861 ? 700 : width > 576 ? 600 : 100, { speed: 200 })
    }

    const prev = <div>
        <img src={icon_chevron} alt="prev" className="transform rotate-180" />
    </div>
    const next = <div>
        <img src={icon_chevron} alt="next" className="" />
    </div>

    useEffect(() => {
        setBooks(JsonData)
    })

    return (
        <>
            {/* <div className="container mx-auto flex flex-wrap my-4 md:my-8 gap-x-2"> */}
            <div>
                <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 mt-8">
                    {displayBooks}
                </div>
                <ReactPaginate
                    previousLabel={prev}
                    nextLabel={next}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName="pagination w-full flex justify-center text-grey-dark font-medium px-2 my-10"
                    activeClassName="text-white bg-blue"
                />
            </div>
        </>
    )
}

export default CartSliderContainer;