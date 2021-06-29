import "./style.css";
import monthBook from "assets/images/book-month.png"

const BookOfMonth = () => {

    return (
        <div className="container mx-auto my-10">
            {/* title */}
            <div className="w-full flex justify-between mb-4">
                <div className="ctext-xl text-black font-bold">Книга месяца</div>
            </div>
            {/* body */}
            <div className="flex justify-between gap-4">
                <div
                    style={{ background: `url('${monthBook}')` }}
                    className="month w-full lg:w-10/12 rounded-md cursor-pointer">

                </div>
                <div className="hidden lg:flex w-2/12 flex-col justify-between rounded">
                    <div 
                        style={{ background: "url('https://im0-tub-com.yandex.net/i?id=5f8f32bbf0d0fe31e45317510e98e135&n=13')"}}
                        className="month-right cursor-pointer"
                    ></div>
                    <div>
                        <div className="text-grey-dark ctext-base font-medium mb-3">Красная таблетка</div>
                        <div className="text-grey ctext-base font-medium cursor-pointer">Скотт Вестерфельд</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookOfMonth;