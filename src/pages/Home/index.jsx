import Carousel from "components/Carousel";
import CartSliderContainer from "components/CartSliderContainer";
import SpecialContainer from "components/SpecialContainer";
import TopBooksSlider from "components/TopBooksSlider";
import BookOfMonth from "components/BookOfMonth";
import NewsSlider from "components/NewsSlider";

const Home = () => {

    return (
        <>
            <Carousel />
            <CartSliderContainer title="Рекомендованное" linkText="Все рекомендованные" />
            <SpecialContainer />
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