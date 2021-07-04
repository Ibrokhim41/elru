import { VscBook } from "react-icons/vsc"
import cliTruncate from 'cli-truncate';



const MyOrders = () => {

    return (
        <div className="container mx-auto">
            {/* title */}
            <div className="text-grey-dark ctext-xl my-4">Мои заказы</div>

            {/* content */}
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <div className="flex items-center">
                        <div
                            style={{ background: "url('https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg')" }}
                            className="book-smillar cursor-pointer"></div>
                        <div className="ml-2">
                            <div className="text-black-dark text-base font-medium flex-initial cursor-pointer">Уродина, в поисках пути к счастью и процветанию</div>
                            <div className="text-grey ctext-sm font-medium mt-1">25.01.2021 16:00</div>
                            <div className="text-black-dark ctext-base mt-2 flex items-center">Формат: <span className="text-grey ml-1">Бумажная</span> <VscBook className="text-grey text-xl ml-1" /></div>
                            <button className="text-white text-base font-bold rounded-md mt-2 py-2 px-10 bg-blue focus:outline-none">Скачать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders;