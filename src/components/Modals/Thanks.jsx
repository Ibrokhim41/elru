import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { setThanks } from "redux/modals"
import { useHistory } from 'react-router-dom';
import noScroll from "no-scroll"
import { useEffect } from "react"


const Thanks = () => {

    const thanks = useSelector(state => state.modals.thanks)
    const dispatch = useDispatch()
    const route = useHistory() 

    useEffect(() => {
        thanks ? noScroll.on() : noScroll.off()
    }, [thanks])

    return (
        <div className={`fixed top-0 ${thanks ? 'flex' : 'hidden'} transition-all w-full h-full bg-white sm:bg-black-black sm:bg-opacity-30 justify-center items-center z-100`}>
            <AiOutlineClose
                onClick={() => dispatch(setThanks(false))}
                className="absolute top-5 right-5 cursor-pointer text-2xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div
                className="leave-comment w-10/12 bg-white rounded-md">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-black ctext-2xl font-bold text-center mb-5 px-4">Благодарим за заказ!</div>
                    <div className="w-full sm:w-4/6 px-4 text-center text-grey-dark ctext-20">Вы можете отслеживать статус вашего заказа (если бумажная версия), а так же скачать купленный ресурс (если это аудио / pdf файлы) во вкладке “Мои заказы”</div>
                    <div className="flex mt-8">
                        <div
                            onClick={() => route.push('/')}
                            className="text-blue text-lg font-medium mx-4 sm:mx-10 flex items-center cursor-pointer my-4"><FiChevronLeft className="text-2xl" />Назад</div>
                        <div
                            onClick={() => route.push('/myorders')}
                            className="text-blue text-lg font-medium mx-4 sm:mx-10 flex items-center cursor-pointer my-4">Мои заказы<FiChevronRight className="text-2xl" /></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Thanks;