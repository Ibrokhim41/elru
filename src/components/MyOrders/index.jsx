import "./style.css"
import { VscBook, VscFilePdf, VscUnmute, VscCircleFilled } from "react-icons/vsc"
import animateScrollTo from "animated-scroll-to"
import { useEffect } from 'react';

const MyOrders = () => {

    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    return (
        <div className="container mx-auto mb-10">
            {/* title */}
            <div className="text-grey-dark ctext-xl my-4">Мои заказы</div>

            {/* content */}
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="flex items-start">
                        <div
                            style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                            className="my-orders-img cursor-pointer"></div>
                        <div className="ml-2">
                            <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                            <div className="text-grey ctext-sm font-medium mt-1">25.01.2021 16:00</div>
                            <div className="text-black-dark ctext-base mt-2 flex items-center">Формат: <span className="text-grey ml-1">бумажная</span> <VscBook className="text-grey text-xl ml-1" /></div>
                            {/* <button className="text-white text-base font-bold rounded-md mt-2 py-1.5 px-7 bg-blue focus:outline-none">Скачать</button> */}
                            <div className="text-grey-dark ctext-base font-medium flex items-center mt-2"><VscCircleFilled className="text-xl" />Доставлено</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="flex items-start">
                        <div
                            style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                            className="my-orders-img cursor-pointer"></div>
                        <div className="ml-2">
                            <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                            <div className="text-grey ctext-sm font-medium mt-1">25.01.2021 16:00</div>
                            <div className="text-black-dark ctext-base mt-2 flex items-center">Формат: <span className="text-grey ml-1">аудио</span> <VscUnmute className="text-grey text-xl ml-1" /></div>
                            <button className="text-white text-base font-bold rounded-md mt-2 py-1.5 px-7 bg-blue focus:outline-none">Скачать</button>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="flex items-start">
                        <div
                            style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                            className="my-orders-img cursor-pointer"></div>
                        <div className="ml-2">
                            <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                            <div className="text-grey ctext-sm font-medium mt-1">25.01.2021 16:00</div>
                            <div className="text-black-dark ctext-base mt-2 flex items-center">Формат: <span className="text-grey ml-1">бумажная</span> <VscBook className="text-grey text-xl ml-1" /></div>
                            {/* <button className="text-white text-base font-bold rounded-md mt-2 py-1.5 px-7 bg-blue focus:outline-none">Скачать</button> */}
                            <div className="text-blue ctext-base font-medium flex items-center mt-2"><VscCircleFilled className="text-xl" /> В пути</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="flex items-start">
                        <div
                            style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                            className="my-orders-img cursor-pointer"></div>
                        <div className="ml-2">
                            <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                            <div className="text-grey ctext-sm font-medium mt-1">25.01.2021 16:00</div>
                            <div className="text-black-dark ctext-base mt-2 flex items-center">Формат: <span className="text-grey ml-1">pdf</span> <VscFilePdf className="text-grey text-xl ml-1" /></div>
                            <button className="text-white text-base font-bold rounded-md mt-2 py-1.5 px-7 bg-blue focus:outline-none">Скачать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders;