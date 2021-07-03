import "./style.css"
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'
import { GoSettings} from 'react-icons/go'
import { useState } from "react";
import CartContainer from 'components/CartContainer';

const CategoryContainer = () => {

    const [showFilter, setShowFilter] = useState(false)
    const [showFilter2, setShowFilter2] = useState(false)
    const [showFilter3, setShowFilter3] = useState(false)
    const [closeSidebar, setCloseSidebar] = useState(false)


    return (
        <div className="container mx-auto grid grid-cols-12">
            {/* titile */}
            <div className="col-span-12 text-black-dark ctext-xl font-bold my-8">Детективы</div>
            
            {/* sidebar */}
            <div className="hidden md:block col-span-3 lg:col-span-2">
                {/* top-filter */}
                <div className="flex items-center">
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Новинки</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox2" type="checkbox" />
                    <label for="checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Бестселлеры</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox3" type="checkbox" />
                    <label for="checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Рекомендуемое</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox4" type="checkbox" />
                    <label for="checkbox4" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Со скидкой</label>
                </div>
                {/* lang-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter(!showFilter)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Язык</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transform ${showFilter ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter ? 'hidden' : 'block'}`}>
                    <div className={`flex items-center`}>
                        <input id="1checkbox" type="checkbox" />
                        <label for="1checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Русский</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox2" type="checkbox" />
                        <label for="1checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Английский</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox3" type="checkbox" />
                        <label for="1checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Испанский</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox4" type="checkbox" />
                        <label for="1checkbox4" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Узбекский</label>
                    </div>
                </div>

                {/* lang-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter2(!showFilter2)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Издательство</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transform ${showFilter2 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter2 ? 'hidden' : 'block'}`}>
                    <div className={`flex items-center`}>
                        <input id="1checkbox" type="checkbox" />
                        <label for="1checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox2" type="checkbox" />
                        <label for="1checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Кубик в рубике</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox3" type="checkbox" />
                        <label for="1checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                </div>

                {/* author-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter3(!showFilter3)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Автор</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transform ${showFilter3 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter3 ? 'hidden' : 'block'}`}>
                    <div className={`flex items-center`}>
                        <input id="1checkbox" type="checkbox" />
                        <label for="1checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox2" type="checkbox" />
                        <label for="1checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Кубик в рубике</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox3" type="checkbox" />
                        <label for="1checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                </div>

                {/* clear-filter */}
                <div className="col-span-12 flex justify-center my-4">
                    <div className="text-grey-dark ctext-base font-medium border-b border-grey-dark cursor-pointer hover:border-blue hover:text-blue">
                        Сбросить фильтры
                    </div>
                </div>

                {/* run-filter */}
                <button className="text-white ctext-base font-bold py-3 bg-blue border-2 rounded-md w-full focus:outline-none hover:bg-white hover:border-blue hover:text-blue">Применить фильтры</button>
            </div>

            {/* mob-sidebar */}
            {/* blackBackground */}
            <div className={`${closeSidebar ? 'block' : 'hidden'} fixed top-0 left-0 bg-black-black bg-opacity-30 w-full h-full z-50`}>
            </div>
            {/* mob-sidebar content */}
            <div className={`fixed top-0 ${closeSidebar ? 'left-0' : '-left-full'} h-full bg-white z-50 px-10 py-8 transition-all duration-500 overflow-scroll`}>
                {/* close-icon */}
                <AiOutlineClose 
                    onClick={() => setCloseSidebar(!closeSidebar)}
                    className="absolute top-5 right-5 text-blue text-2xl" />

                {/* top-title */}
                <div className="text-grey-dark ctext-base font-semibold my-8">Подбор по параметрам</div>
                
                {/* top-filter */}
                <div className="flex items-center">
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Новинки</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox2" type="checkbox" />
                    <label for="checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Бестселлеры</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox3" type="checkbox" />
                    <label for="checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Рекомендуемое</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox4" type="checkbox" />
                    <label for="checkbox4" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Со скидкой</label>
                </div>
                {/* lang-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter(!showFilter)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Язык</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transform ${showFilter ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter ? 'hidden' : 'block'}`}>
                    <div className={`flex items-center`}>
                        <input id="1checkbox" type="checkbox" />
                        <label for="1checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Русский</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox2" type="checkbox" />
                        <label for="1checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Английский</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox3" type="checkbox" />
                        <label for="1checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Испанский</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox4" type="checkbox" />
                        <label for="1checkbox4" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Узбекский</label>
                    </div>
                </div>

                {/* lang-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter2(!showFilter2)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Издательство</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transform ${showFilter2 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter2 ? 'hidden' : 'block'}`}>
                    <div className={`flex items-center`}>
                        <input id="1checkbox" type="checkbox" />
                        <label for="1checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox2" type="checkbox" />
                        <label for="1checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Кубик в рубике</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox3" type="checkbox" />
                        <label for="1checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                </div>

                {/* author-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter3(!showFilter3)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Автор</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transform ${showFilter3 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter3 ? 'hidden' : 'block'}`}>
                    <div className={`flex items-center`}>
                        <input id="1checkbox" type="checkbox" />
                        <label for="1checkbox" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox2" type="checkbox" />
                        <label for="1checkbox2" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Кубик в рубике</label>
                    </div>
                    <div className="flex items-center">
                        <input id="1checkbox3" type="checkbox" />
                        <label for="1checkbox3" className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">Росмен</label>
                    </div>
                </div>

                {/* clear-filter */}
                <div className="col-span-12 flex justify-center my-4">
                    <div className="text-grey-dark ctext-base font-medium border-b border-grey-dark cursor-pointer hover:border-blue hover:text-blue">
                        Сбросить фильтры
                    </div>
                </div>

                {/* run-filter */}
                <button className="text-white ctext-base font-bold py-3 bg-blue border-2 rounded-md w-full focus:outline-none hover:bg-white hover:border-blue hover:text-blue">Применить фильтры</button>
            </div>

            {/* call mobsidebar */}
            <div className="col-span-12 bg-black bg-opacity-10 mb-4 flex md:hidden justify-between border border-grey-light">
                <div className="text-grey-dark ctext-base font-semibold py-4 pl-4">Подбор по параметрам</div>
                <div 
                    onClick={() => setCloseSidebar(!closeSidebar)}
                    className="bg-blue h-full flex items-center px-4">
                    <GoSettings className="text-white text-2xl" />
                </div>
            </div>

            {/* contnet */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10">
                <CartContainer
                    rows={{ xl: 20, lg: 15, md: 12, sm: 12 }}
                    grid="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 no-padding" />
            </div>
        </div>
    )
}

export default CategoryContainer;