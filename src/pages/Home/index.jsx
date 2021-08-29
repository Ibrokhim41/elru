import Carousel from "components/Carousel";
import CartSliderContainer from "components/CartSliderContainer";
import DiscountsContainer from "components/DiscountsContainer";
import TopBooksSlider from "components/TopBooksSlider";
import BookOfMonth from "components/BookOfMonth";
import NewsSlider from "components/NewsSlider";
import { useEffect } from 'react';
import animateScrollTo from "animated-scroll-to";
import { useTranslation } from "react-i18next";

const Home = () => {

    const {t} = useTranslation()
    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <>
            <Carousel />
            <CartSliderContainer title={t("titles.recommended")} linkText={t("links.all_recommended")} />
            <DiscountsContainer />
            <CartSliderContainer title={t("titles.best_prices")} linkText={t("links.book_with_discount")} />
            <CartSliderContainer title={t("titles.new")} linkText={t("links.all_new_books")} />
            <CartSliderContainer title={t("titles.bestsellers")} linkText={t("links.all_bestsellers")} />
            <TopBooksSlider />
            <BookOfMonth />
            <NewsSlider />
        </>
    )
}

export default Home;