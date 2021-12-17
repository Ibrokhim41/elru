import Comment from "components/Comment"
import BookFormat from "components/BookFormat";
import BookGallery from "components/BookGallery";
import BookInfo from "components/BookInfo";
import BookSmillar from "components/BookSmillar";
import LeaveComment from "components/Modals/LeaveComment";
import animateScrollTo from "animated-scroll-to";
import { useEffect } from 'react';

const Book = () => {

    useEffect(() => {
        animateScrollTo(0)
    }, [])

    return (
        <>
            <LeaveComment />
            <div className="container mx-auto grid grid-cols-12 my-20">
                <div className="col-span-12 md:col-span-4 xl:col-span-3">
                    <BookGallery />
                </div>
                <div className="col-span-12 md:col-span-8 xl:col-span-5 mt-14 md:mt-0 xl:mx-8">
                    <BookInfo />
                </div>
                <div className="col-span-12 xl:col-span-4">
                    <BookFormat />
                </div>
                <div className="col-span-12 my-8">
                    <BookSmillar />
                </div>
                <div className="col-span-12 mt-10">
                    <Comment />
                </div>
            </div>
        </>
    )
}

export default Book;