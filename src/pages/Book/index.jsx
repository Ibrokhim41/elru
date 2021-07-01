const { default: BookFormat } = require("components/BookFormat")
const { default: BookGallery } = require("components/BookGallery")
const { default: BookInfo } = require("components/BookInfo")

const Book = () => {

    return (
        <div className="container mx-auto grid grid-cols-12 my-10">
            <div className="col-span-12 md:col-span-4 xl:col-span-3">
                <BookGallery />
            </div>
            <div className="col-span-12 md:col-span-8 xl:col-span-5 mt-14 md:mt-0 xl:mx-8">
                <BookInfo />
            </div>
            <div className="col-span-12 xl:col-span-4">
                <BookFormat />
            </div>
        </div>
    )
}

export default Book;