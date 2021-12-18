import "./style.css"
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'
import { GoSettings } from 'react-icons/go'
import { useState, useEffect } from "react";
import CartContainer from 'components/CartContainer';
import animateScrollTo from "animated-scroll-to";
import { useWindowDimensions } from 'hooks/ScreenWidth';

const CategoryContainer = () => {

    const { width } = useWindowDimensions()
    const [showFilter, setShowFilter] = useState(false)
    const [showFilter2, setShowFilter2] = useState(false)
    const [showFilter3, setShowFilter3] = useState(false)
    const [closeSidebar, setCloseSidebar] = useState(false)
    const filters = {
        types: [
            "Новинки",
            "Бестселлеры",
            "Рекомендуемое",
            "Со скидкой"
        ],
        languages: [
            "Английский",
            "Русский",
            "Узбекский",
        ],
        publisher: [
            "Азбука",
            "Азбука из Казахстана",
            "Азбука из России",
        ],
        authors: [
            "Александр Пушкин",
            "Лев Толстой",
            "Фёдор Достоевский",
            "Николай Гоголь",
        ],
        format: [
            "Книга",
            "аудиокнига",
            "pdf",
        ]
    }
    const [filter, setFilter] = useState(
        {
            type: [],
            language: [],
            publisher: [],
            author: [],
            category: []
        }
    )

    useEffect(() => {
        animateScrollTo(0, 500)
    }, [])

    console.log(filter);

    return (
        <div className="container mx-auto grid grid-cols-12">
            {/* titile */}
            <div className="col-span-12 text-black-dark ctext-xl font-bold my-8">Детективы</div>

            {/* sidebar */}
            {width > 768 && <div className="hidden md:block col-span-3 lg:col-span-2">
                {/* top-filter */}
                {filters.types.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center">
                            <input
                                onChange={(e) => setFilter(e.target.checked ? { ...filter, type: [...filter.type, item] } : { ...filter, type: filter.type.filter(i => i !== item) })}
                                id={item}
                                value={item}
                                type="checkbox" />
                            <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                        </div>
                    )
                })}
                {/* lang-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter(!showFilter)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Язык</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transhtmlForm ${showFilter ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter ? 'hidden' : 'block'}`}>
                    {filters.languages.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex items-center`}>
                                <input
                                    onChange={(e) => setFilter(e.target.checked ? { ...filter, language: [...filter.language, item] } : { ...filter, language: filter.language.filter(i => i !== item) })}
                                    id={item}
                                    value={item}
                                    type="checkbox" />
                                <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                            </div>
                        )
                    })}
                </div>

                {/* publisher-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter2(!showFilter2)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Издательство</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transhtmlForm ${showFilter2 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter2 ? 'hidden' : 'block'}`}>
                    {filters.publisher.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex items-center`}>
                                <input
                                    onChange={(e) => setFilter(e.target.checked ? { ...filter, publisher: [...filter.publisher, item] } : { ...filter, publisher: filter.publisher.filter(i => i !== item) })}
                                    id={item}
                                    value={item}
                                    type="checkbox" />
                                <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                            </div>
                        )
                    })}
                </div>

                {/* author-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter3(!showFilter3)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Автор</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transhtmlForm ${showFilter3 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter3 ? 'hidden' : 'block'}`}>
                    {filters.authors.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex items-center`}>
                                <input
                                    onChange={(e) => setFilter(e.target.checked ? { ...filter, author: [...filter.author, item] } : { ...filter, author: filter.author.filter(i => i !== item) })}
                                    id={item}
                                    value={item}
                                    type="checkbox" />
                                <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                            </div>
                        )
                    })}
                </div>

                {/* clear-filter */}
                <div className="col-span-12 flex justify-center my-4">
                    <div 
                        onClick={() => {
                            setFilter({ type: [], language: [], publisher: [], author: [] })
                            document.querySelectorAll('input').forEach(item => item.checked = false)
                        }}
                        className="text-grey-dark ctext-base font-medium border-b border-grey-dark cursor-pointer hover:border-blue hover:text-blue">
                        Сбросить фильтры
                    </div>
                </div>

                {/* run-filter */}
                <button className="text-white ctext-base font-bold py-3 bg-blue border-2 rounded-md w-full focus:outline-none hover:bg-white hover:border-blue hover:text-blue">Применить фильтры</button>
            </div>}

            {/* mob-sidebar */}
            {/* blackBackground */}
            <div className={`${closeSidebar ? 'block' : 'hidden'} fixed top-0 left-0 bg-black-black bg-opacity-30 w-full h-full z-50`}>
            </div>
            {/* mob-sidebar content */}
            {width < 768 && <div className={`fixed top-0 ${closeSidebar ? 'left-0' : '-left-full'} h-full bg-white z-50 px-10 py-8 transition-all duration-500 overflow-scroll`}>
                {/* close-icon */}
                <AiOutlineClose
                    onClick={() => setCloseSidebar(!closeSidebar)}
                    className="absolute top-5 right-5 text-blue text-2xl" />

                {/* top-title */}
                <div className="text-grey-dark ctext-base font-semibold my-8">Подбор по параметрам</div>

                {/* top-filter */}
                {filters.types.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center">
                            <input
                                onChange={(e) => setFilter(e.target.checked ? { ...filter, type: [...filter.type, item] } : { ...filter, type: filter.type.filter(i => i !== item) })}
                                id={item}
                                value={item}
                                type="checkbox" />
                            <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                        </div>
                    )
                })}
                {/* lang-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter(!showFilter)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Язык</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transhtmlForm ${showFilter ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter ? 'hidden' : 'block'}`}>
                    {filters.languages.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex items-center`}>
                                <input
                                    onChange={(e) => setFilter(e.target.checked ? { ...filter, language: [...filter.language, item] } : { ...filter, language: filter.language.filter(i => i !== item) })}
                                    id={item}
                                    value={item}
                                    type="checkbox" />
                                <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                            </div>
                        )
                    })}
                </div>

                {/* publisher-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter2(!showFilter2)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Издательство</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transhtmlForm ${showFilter2 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter2 ? 'hidden' : 'block'}`}>
                    {filters.publisher.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex items-center`}>
                                <input
                                    onChange={(e) => setFilter(e.target.checked ? { ...filter, publisher: [...filter.publisher, item] } : { ...filter, publisher: filter.publisher.filter(i => i !== item) })}
                                    id={item}
                                    value={item}
                                    type="checkbox" />
                                <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                            </div>
                        )
                    })}
                </div>

                {/* author-filter */}
                {/* filter-title */}
                <div className="flex items-center mt-4">
                    <div
                        onClick={() => setShowFilter3(!showFilter3)}
                        className="text-black-dark ctext-lg font-medium cursor-pointer">Автор</div>
                    <BiChevronDown className={`text-blue text-2xl transition-all transhtmlForm ${showFilter3 ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {/* filter-body */}
                <div className={`${showFilter3 ? 'hidden' : 'block'}`}>
                    {filters.authors.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex items-center`}>
                                <input
                                    onChange={(e) => setFilter(e.target.checked ? { ...filter, author: [...filter.author, item] } : { ...filter, author: filter.author.filter(i => i !== item) })}
                                    id={item}
                                    value={item}
                                    type="checkbox" />
                                <label htmlFor={item} className="text-grey-dark ctext-base font-medium ml-2 cursor-pointer">{item}</label>
                            </div>
                        )
                    })}
                </div>

                {/* clear-filter */}
                <div className="col-span-12 flex justify-center my-4">
                    <div 
                        onClick={() => {
                            setFilter({ type: [], language: [], publisher: [], author: [] })
                            document.querySelectorAll('input').forEach(item => item.checked = false)
                        }}
                        className="text-grey-dark ctext-base font-medium border-b border-grey-dark cursor-pointer hover:border-blue hover:text-blue">
                        Сбросить фильтры
                    </div>
                </div>

                {/* run-filter */}
                <button className="text-white ctext-base font-bold py-3 bg-blue border-2 rounded-md w-full focus:outline-none hover:bg-white hover:border-blue hover:text-blue">Применить фильтры</button>
            </div>}

            {/* call mobsidebar */}
            <div className="col-span-12 bg-black bg-opacity-10 mb-4 flex md:hidden justify-between border border-grey-light">
                <div className="text-grey-dark ctext-base font-semibold py-4 pl-4">Подбор по параметрам</div>
                <div
                    onClick={() => setCloseSidebar(!closeSidebar)}
                    className="bg-blue h-ful flex items-center px-4 py-3">
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