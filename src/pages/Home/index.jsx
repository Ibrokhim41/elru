import Carousel from "components/Carousel";
import CartSliderContainer from "components/CartSliderContainer";
import DiscountsContainer from "components/DiscountsContainer";
import TopBooksSlider from "components/TopBooksSlider";
import BookOfMonth from "components/BookOfMonth";
import NewsSlider from "components/NewsSlider";
import { useEffect } from 'react';
import animateScrollTo from "animated-scroll-to";

const Home = () => {

    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <>
            <Carousel />
            <CartSliderContainer title="Рекомендованное" linkText="Все рекомендованные" />
            <DiscountsContainer />
            <CartSliderContainer title="Лучшие цены" linkText="Книги со скидкой" />
            <CartSliderContainer title="Новинки" linkText="Все новинки" />
            <CartSliderContainer title="Бестселлеры" linkText="Все Бестселлеры" />
            <TopBooksSlider />
            <BookOfMonth />
            <NewsSlider />
        </>
    )
}

export default Home;