import TopBooksContainer from "components/TopBooksContainer";

const Tops = () => {

    return (
        <div className="container mx-auto flex flex-wrap my-10">
            <div className="w-full lg:w-1/2 p-2">
                <TopBooksContainer />
            </div>
            <div className="w-full lg:w-1/2 p-2">
                <TopBooksContainer />
            </div>
            <div className="w-full lg:w-1/2 p-2">
                <TopBooksContainer />
            </div>
            <div className="w-full lg:w-1/2 p-2">
                <TopBooksContainer />
            </div>
            <div className="w-full lg:w-1/2 p-2">
                <TopBooksContainer />
            </div>
        </div>
    )
}

export default Tops;