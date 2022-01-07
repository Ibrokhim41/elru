import "./style.css"
import Cart from '../Cart/index';
import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';
import icon_chevron from 'assets/images/chevron.svg';
import animateScrollTo from "animated-scroll-to";
import { useWindowDimensions } from "hooks/ScreenWidth"
// import { axiosInstance } from '../../axios';
import { useDispatch } from 'react-redux';
import { sagaActions } from "redux/saga/sagaActions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
// import SkleetonCartContainer from "components/Skeletons/CartContainer";

const CartSliderContainer = ({ grid = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6", rows = { xl: 24, lg: 20, md: 15, sm: 12 } }) => {
    const { width } = useWindowDimensions()
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const { category } = useParams();
    // const [books, setBooks] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const booksPerPage = width > 1440 ? rows.xl : width > 769 ? rows.lg : width > 576 ? rows.md : rows.sm
    const pagesVisited = pageNumber * booksPerPage

    const displayBooks = books
        .slice(pagesVisited, pagesVisited + booksPerPage)
        .map((book) => {
            return (
                <Cart data={book} />
            )
        })

    const pageCount = Math.ceil(books.length / booksPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        animateScrollTo(0, { speed: 200 })
    }

    const prev = <div>
        <img src={icon_chevron} alt="prev" className="transform rotate-180" />
    </div>
    const next = <div>
        <img src={icon_chevron} alt="next" className="" />
    </div>

    useEffect(() => {
        dispatch({ type: sagaActions.FETCH_DATA_SAGA, payload: category })
    // eslint-disable-next-line
    }, [category])

    return (
        <>
            {
                books.length ?
                    <div>
                        <div className={`container mx-auto grid ${grid}`}>
                            {displayBooks}
                        </div>
                        {
                            books.length > 16 ?
                                <ReactPaginate
                                    previousLabel={prev}
                                    nextLabel={next}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName="pagination w-full flex justify-center text-grey-dark font-medium px-2 my-10"
                                    activeClassName="text-white bg-blue"
                                />
                                : ''
                        }
                    </div>
                    : "NO DATA"
            }
        </>
    )
}

export default CartSliderContainer;
