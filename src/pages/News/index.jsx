import animateScrollTo from 'animated-scroll-to';
import NewsContainer from 'components/NewsContainer';
import { useEffect } from 'react';

const News = () => {

    useEffect(() => {
        animateScrollTo(0)
    }, [])

    return (
        <>
            <NewsContainer />
        </>
    )
}

export default News;