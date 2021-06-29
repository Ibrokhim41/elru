import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import CartSliderContainer from "./CartSliderContainer";
import SpecialContainer from "./SpecialContainer";
import TopBooksContainer from "./TopBooksContainer";
import BookOfMonth from './BookOfMonth/index';
import NewsContainer from "./NewsContainer";


const Example = () => {
    return (
        <>
            <Header />
            <Carousel />
            <CartSliderContainer title="Рекомендованное" />
            <SpecialContainer />
            <TopBooksContainer />
            <BookOfMonth />
            <NewsContainer />
            <Footer />
        </>
    )
}

export default Example;