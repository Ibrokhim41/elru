import book404 from "../../assets/images/book.gif"

const NotFound = () => {

    return (
        <div className="container mx-auto my-10">
            <div className="text-black ctext-2xl font-bold text-center uppercase">страница не найдена</div>
            <div className="text-9xl text-blue font-bold text-center">404</div>
            <img src={book404} alt="404" className="mx-auto" />
        </div>
    )
}
export default NotFound;
