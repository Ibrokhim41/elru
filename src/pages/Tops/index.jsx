import animateScrollTo from "animated-scroll-to";
import TopBooksContainer from "components/TopBooksContainer";
import { useEffect } from 'react';

const Tops = () => {
    
    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <div className="container mx-auto flex flex-wrap my-10 mt-20">
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