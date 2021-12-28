import "./style.css"
import { useCallback, useEffect, useState } from "react";
import animateScrollTo from 'animated-scroll-to';
import { axiosInstance } from "../../axios";
import { useSelector } from "react-redux";
import parseHTML from 'html-react-parser';
import moment from "moment";
import { useWindowDimensions } from '../../hooks/ScreenWidth';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Loading from '../Loading/index';

const Article = () => {
    const id = useParams().id;
    const { width } = useWindowDimensions()
    const lang = useSelector(state => state.modals.getLanguage)
    const [data, setData] = useState([])
    const getNews = useCallback(() => {
        axiosInstance.get(`/news/detail/${id}`)
            .then(res => {
                setData(res.data)
            })
    },[id])

    const checkIframe = useCallback(() => {
        document.querySelectorAll('oembed').forEach(element => {
            const frame = document.createElement('iframe')
            const media = document.querySelector('.media')
            const url = element.getAttribute('url').replace('watch?v=', 'embed/');
            frame.setAttribute('src', url);
            frame.setAttribute('frameborder', '0');
            frame.setAttribute('allowfullscreen', 'true');
            frame.setAttribute('width', '100%');
            frame.setAttribute('height', width < 768 ? '200px' : '350px');
            frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            frame.setAttribute('title', 'YouTube video player')
            media.appendChild(frame);
        });
    }, [width])

    useEffect(() => {
        checkIframe()
    }, [data, checkIframe])

    useEffect(() => {
        animateScrollTo(0)
        getNews()
    }, [getNews])

    return (
        <>
        {data.image ?
        <div className="container mx-auto my-10 article">
            <div className="text-black ctext-xl font-bold">{lang === 'ru' ? data.title_ru : data.title_uz}</div>
            <div className="text-grey ctext-base font-medium mb-4">{moment(data.created_at).format("DD.MM.YYYY")}</div>
            <img 
                style={{maxHeight: '600px'}}
                className="article-img w-full object-cover my-10" src={data.image} alt="article-img" />
            <div className="text-grey-dark ctext-base font-medium">
                {data.content_ru && parseHTML(data.content_ru)}
            </div>
        </div>
        : <Loading />}
        </>
    )
}

export default Article;