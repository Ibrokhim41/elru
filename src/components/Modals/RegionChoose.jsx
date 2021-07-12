import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setRegionChoose, setDeliveryTo } from "redux/modals"
import Select from 'react-select'

const RegionChoose = () => {

    const regionChoose = useSelector(state => state.modals.regionChoose)
    const dispatch = useDispatch()


    const options = [
        { value: 'Джизакская область', label: 'Джизакская область' },
        { value: 'Хорезмская область', label: 'Хорезмская область' },
        { value: 'Кашкадарьинская область', label: 'Кашкадарьинская область' },
        { value: 'Ташкент', label: 'Ташкент' }
    ]

    return (
        <div className={`fixed ${regionChoose ? 'top-0' : '-top-full'} transition-all w-full h-full bg-black-black bg-opacity-30 flex justify-center items-center z-40`}>
            <AiOutlineClose
                onClick={() => dispatch(setRegionChoose(false))}
                className="absolute top-5 right-5 cursor-pointer text-2xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div className="leave-comment w-11/12 md:w-8/12 bg-white rounded-md px-4">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-black ctext-2xl font-bold text-center mb-10">Выберите город или область</div>
                    <Select
                        onChange={(e) => {
                            dispatch(setDeliveryTo(e.value))
                        }}
                        placeholder="Город или область"
                        options={options} 
                        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-1/3"
                        />
                </div>
            </div>
        </div>
    )

}

export default RegionChoose;


