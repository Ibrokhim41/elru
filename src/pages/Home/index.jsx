import Carousel from "components/Carousel";
import CartSliderContainer from "components/CartSliderContainer";
import SpecialContainer from "components/SpecialContainer";
import TopBooksContainer from "components/TopBooksContainer";
import BookOfMonth from "components/BookOfMonth";
import NewsContainer from "components/NewsContainer";

const Home = () => {

    return (
        <>
            <Carousel />
            <CartSliderContainer title="Рекомендованное" linkText="Все рекомендованные" />
            <SpecialContainer />
            <CartSliderContainer title="Лучшие цены" linkText="Книги со скидкой" />
            <CartSliderContainer title="Новинки" linkText="Все новинки" />
            <CartSliderContainer title="Бестселлеры" linkText="Все Бестселлеры" />
            <TopBooksContainer />
            <BookOfMonth />
            <NewsContainer />
        </>
    )
}

export default Home;