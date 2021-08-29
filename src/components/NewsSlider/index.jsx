import "./style.css";
import icon_arrow from 'assets/images/arrow-blue.svg';
import icon_chevron from "assets/images/chevron.svg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useWindowDimensions} from "../../hooks/ScreenWidth";
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const NewsContainer = () => {

    const {t} = useTranslation()
    const route = useHistory()
    const {width} = useWindowDimensions();

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    zIndex: "5",
                    right: "-15px",
                    top: "50%",
                    boxShadow: "4px 4px 4px -1px rgba(0, 0, 0, 0.04)"
                }}
                onClick={onClick}
            >
                <img src={icon_chevron} alt="chevron-icon" className="w-3" />
            </div>
        )
    }
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    background: "#fff",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    zIndex: "5",
                    left: "-15px",
                    top: "50%",
                    justifyContent: "center",
                    boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.04)"
                }}
                onClick={onClick}
            >
                <img src={icon_chevron} alt="chevron-icon" className="w-3 transform rotate-180" />
            </div>
        )
    }

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: width > "1440" ? 3 : width > "992" ? 2 : width > "660" ? 2 : 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    return (
        <div className="news container mx-auto my-10">
            {/* title */}
            < div className="w-full flex justify-between mb-7" >
                <div className="ctext-xl text-black font-bold">{t("titles.news")}</div>
                <div 
                    onClick={() => route.push('/news')}
                    className="ctext-lg text-blue flex items-center cursor-pointer group">{width > 410 ? t("links.all_news") : t("btn_link.all")} <img src={icon_arrow} alt="arrow-icon" className="w-4 h-4 ml-2 transition-all transform group-hover:translate-x-1" /></div>
            </div >
            {/* body */}
            <Slider {...settings}>
                <span>
                    <div className="w-full border-2 border-grey-light cursor-pointer rounded-md">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                        <div className="p-4">
                            <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                            <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                            <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                        </div>
                    </div>
                </span>
                <span>
                    <div className="w-full border-2 border-grey-light cursor-pointer rounded-md">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                        <div className="p-4">
                            <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                            <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                            <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                        </div>
                    </div>
                </span>
                <span>
                    <div className="w-full border-2 border-grey-light cursor-pointer rounded-md">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                        <div className="p-4">
                            <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                            <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                            <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                        </div>
                    </div>
                </span>
                <span>
                    <div className="w-full border-2 border-grey-light cursor-pointer rounded-md">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                        <div className="p-4">
                            <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                            <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                            <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                        </div>
                    </div>
                </span>
            </Slider>
            {/* <div className="flex gap-4">
                <div className="w-1/2 lg:w-1/3 border-2 border-grey-light cursor-pointer rounded-md">
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                    <div className="p-4">
                        <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                        <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                        <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                    </div>
                </div>
                <div className="w-1/2 lg:w-1/3 border-2 border-grey-light cursor-pointer rounded-md">
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                    <div className="p-4">
                        <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                        <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                        <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                    </div>
                </div>
                <div className="w-1/2 lg:w-1/3 border-2 border-grey-light cursor-pointer rounded-md">
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/18291/production/_118216989_gettyimages-585281685.jpg" alt="news" className="news-img object-cover rounded-t-md" />
                    <div className="p-4">
                        <div className="ctext-base text-black font-bold">Что читать на карантине?</div>
                        <div className="text-grey-dark ctext-base font-medium mt-1">Эталонные детективы, помогающие отвлечься от хандры и ипохондрии. Идеальные случаи, чтобы забыться в захватывающем сюжете.</div>
                        <div className="text-grey font-medium ctext-base mt-6">23.02.2021</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default NewsContainer;