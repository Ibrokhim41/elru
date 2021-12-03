import './style.css'
import icon_book from "assets/images/open-book.svg"
import icon_audio from "assets/images/audio-book.svg"
import icon_pdf from "assets/images/pdf-book.svg"
import icon_add_basket from "assets/images/icon-add-basket.svg"

const BookFormat = () => {

    return (
        <div className="w-full mt-8 xl:mt-0 sm:border border-grey rounded-md sm:bg-grey-light sm:px-5 xl:px-8 py-5 xl:py-12">
            {/* top-text */}
            <div className="text-black ctext-lg font-bold sm:text-center text-left xl:text-left">Выберите формат:</div>
            {/* book formats */}
            <div className="flex flex-col sm:flex-row justify-between xl:block">
                <div className="w-full sm:w-1/3 xl:w-full flex flex-row sm:flex-col md:flex-row justify-between items-center cursor-pointer border border-grey rounded-md bg-white p-2 mt-5 hover:border-blue">
                    <div className="flex ctext-base text-grey-dark font-medium my-2 md:my-0">Бумажная <img src={icon_book} alt="icon-book" className="ml-1" /></div>
                    <div className="flex flex-col">
                        <div className="text-black-dark ctext-base font-bold">190 000 сум</div>
                        <div className="discount-line relative flex items-center text-grey ctext-xs">200 000 сум</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 xl:w-full flex-row sm:flex-col md:flex-row mx-0 sm:mx-4 xl:mx-0 flex justify-between items-center cursor-pointer border border-grey rounded-md bg-white p-2 mt-5 hover:border-blue">
                    <div className="flex ctext-base text-grey-dark font-medium my-2 md:my-0">Аудио <img src={icon_audio} alt="icon-book" className="ml-1" /></div>
                    <div className="flex flex-col">
                        <div className="text-black-dark ctext-base font-bold">138 000 сум</div>
                        <div className="discount-line relative flex items-center text-grey ctext-xs">200 000 сум</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 xl:w-full flex flex-row sm:flex-col md:flex-row justify-between items-center cursor-pointer border border-grey rounded-md bg-white p-2 mt-5 hover:border-blue">
                    <div className="flex ctext-base text-grey-dark font-medium my-2 md:my-0">PDF<img src={icon_pdf} alt="icon-book" className="ml-1" /></div>
                    <div className="flex flex-col">
                        <div className="text-black-dark ctext-base font-bold">170 000 сум</div>
                        <div className="discount-line relative flex items-center text-grey ctext-xs">200 000 сум</div>
                    </div>
                </div>
            </div>
            {/* button */}
            <button className="w-full flex justify-center items-center text-white ctext-base font-bold p-4 sm:p-5 mt-5 bg-blue rounded-md focus:outline-none">
                Добавить в корзину <img src={icon_add_basket} alt="basket" width="22px" height="22px" className="ml-2" />
            </button>
        </div>
    )
}

export default BookFormat;