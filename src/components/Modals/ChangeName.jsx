import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setNewName } from "redux/modals"
import noScroll from "no-scroll"
import { useEffect } from "react"


const ChangeName = () => {

    const newName = useSelector(state => state.modals.newName)
    const dispatch = useDispatch()

    useEffect(() => {
        newName ? noScroll.on() : noScroll.off()
    }, [newName])

    return (
        <div className={`fixed ${newName ? 'top-0' : '-top-full'} transition-all w-full h-full bg-white sm:bg-black-black sm:bg-opacity-30 flex justify-center items-center z-100`}>
            <AiOutlineClose
                onClick={() => dispatch(setNewName(false))}
                className="absolute top-5 right-5 cursor-pointer text-2xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div
                className="leave-comment w-10/12 bg-white rounded-md">
                <div className="h-full flex flex-col items-center sm:justify-center">
                    <div className="text-black ctext-2xl font-bold text-center mb-5 px-4 mt-24 sm:mt-0">Изменить имя</div>
                    <div className="w-full sm:w-2/3 grid grid-cols-12 gap-y-4 md:gap-8 mt-6 px-4">
                        <div className="col-span-12">
                            <div className="text-grey-dark ctext-base font-medium">Новое имя<span className="text-red">*</span></div>
                            <input type="text" placeholder="Ведите новое имя" className="border border-grey-border rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                        </div>
                        <button className="bg-blue text-white ctext-base col-span-12 font-bold rounded-md py-3">Сохранить</button>
                        <button
                            onClick={() => dispatch(setNewName(false))}
                            className="bg-red text-white ctext-base col-span-12 font-bold rounded-md py-3">Отменять</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ChangeName;