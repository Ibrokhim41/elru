import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setRegionChoose, setDeliveryTo } from "redux/modals"
import { regions } from "../../assets/region.js"
import Select from 'react-select'
import { useState, useEffect } from 'react';
import noScroll from "no-scroll"

const RegionChoose = () => {

    const regionChoose = useSelector(state => state.modals.regionChoose)
    const dispatch = useDispatch()
    const [checkLanguage, setCheckLanguage] = useState("");
    useEffect(() => {
        setCheckLanguage(localStorage.getItem("i18nextLng"));
    }, []);
    const regionsName = []
    const [regionId, setRegionId] = useState(null)
    const [regionsInside, setRegionInside] = useState([])
    const [selectedRegion, setSelectedRegion] = useState('')

    regions.forEach(region => {
        if (region.id !== 21) {
            if (checkLanguage === "en") {
                regionsName.push({
                    value: region.id,
                    label: region.name_en,
                })
            } else if (checkLanguage === "ru") {
                regionsName.push({
                    value: region.id,
                    label: region.name_ru,
                })
            } else {
                regionsName.push({
                    value: region.id,
                    label: region.name_uz,
                })
            }
        }
    })

    useEffect(() => {
        regions.forEach(region => {
            if (region.id === regionId) {
                region.childs.forEach(child => {
                    setRegionInside(prevState => [...prevState, {
                        value: child.id,
                        label: checkLanguage === "en" ? child.name_en : checkLanguage === "ru" ? child.name_ru : child.name_uz,
                    }])
                })
            }
        })
    }, [regionId, checkLanguage])

    useEffect(() => {
        regionChoose ? noScroll.on() : noScroll.off()
    },[regionChoose])

    return (
        <div 
            className={`fixed top-0 ${regionChoose ? 'flex' : 'hidden'} w-full h-full bg-white sm:bg-black-black sm:bg-opacity-30 justify-center items-center z-100`}>
            <AiOutlineClose
                onClick={() => dispatch(setRegionChoose(false))}
                className="absolute top-5 right-5 cursor-pointer text-2xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div className="leave-comment w-11/12 md:w-8/12 bg-white rounded-md px-4">
                <div className="h-full flex flex-col items-center justify-center">
                    <div 
                        className="text-black ctext-2xl font-bold text-center mb-10">Выберите город или область</div>
                    <Select
                        onChange={(e) => {
                            setRegionId(e.value)
                            setSelectedRegion(selectedRegion + e.label)
                        }}
                        placeholder="Город или Область"
                        options={regionsName}
                        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-1/3"
                    />
                    <Select
                        onChange={(e) => {
                            setSelectedRegion(selectedRegion + ", " + e.label)
                        }}
                        placeholder="Район"
                        options={regionsInside}
                        className={`${!regionId && 'hidden'} w-10/12 sm:w-8/12 md:w-6/12 lg:w-1/3 mt-5`}
                    />
                    <button
                        onClick={() => {
                            dispatch(setDeliveryTo(selectedRegion))
                            dispatch(setRegionChoose(false))
                        }}
                        className="bg-blue text-white ctext-base w-10/12 sm:w-8/12 md:w-6/12 lg:w-1/3 font-bold rounded-md py-3 px-8 mt-6">Подтвердить</button>
                    <button
                        onClick={() => dispatch(setRegionChoose(false))}
                        className="bg-red text-white ctext-base w-10/12 sm:hidden font-bold rounded-md py-3 px-8 mt-6">Отменять</button>
                </div>
            </div>
        </div>
    )

}

export default RegionChoose;


