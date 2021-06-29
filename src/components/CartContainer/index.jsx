
import "./style.css"
import Cart from '../Cart/index';
import ReactPaginate from "react-paginate";
import JsonData from "MOCK_DATA.json"
import { useState } from 'react';
import icon_chevron from 'assets/images/chevron.svg';
import animateScrollTo from "animated-scroll-to";
import {useWindowDimensions} from "hooks/ScreenWidth"
import { useEffect } from 'react';

const CartSliderContainer = () => {

    const {width} = useWindowDimensions()

    const [books, setBooks] = useState(JsonData)
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        setBooks(JsonData)
    }, [])

    const booksPerPage = width > 1440 ? 24 : width > 1200 ? 20 : width > 1060 ? 24 : width > 862 ? 20 : width > 693 ? 16 : 12
    const pagesVisited = pageNumber * booksPerPage

    const displayBooks = books
        .slice(pagesVisited, pagesVisited + booksPerPage)
        .map(book => {
            return (
                <Cart author={book.name} />
            )
        })

    const pageCount = Math.ceil(books.length / booksPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
        animateScrollTo(width > 1060 ? 500 : width > 861 ? 700 : width > 576 ? 600 : 100, {speed: 200})
    }

    const prev = <div>
        <img src={icon_chevron} alt="prev" className="transform rotate-180" />
    </div>
    const next = <div>
        <img src={icon_chevron} alt="next" className="" />
    </div>

    return (
        <>
            <div className="container mx-auto flex flex-wrap my-10 gap-y-6 gap-x-2">
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