import "./style.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { setLeaveComment } from "redux/modals"

const LeaveComment = () => {

    const leaveComment = useSelector(state => state.modals.leaveComment)
    const dispatch = useDispatch()

    return (
        <div className={`fixed ${leaveComment ? 'top-0 flex opacity-100' : 'top-0 hidden opacity-0'} transition-all w-full h-full bg-white sm:bg-black-black sm:bg-opacity-30 justify-center items-center z-40`}>
            <AiOutlineClose
                onClick={() => dispatch(setLeaveComment(false))}
                className="absolute top-5 right-5 cursor-pointer text-3xl text-white sm:text-3xl lg:text-4xl hover:text-red" />
            <div 
                className="leave-comment w-10/12 bg-white rounded-md">
                <div className="h-full flex flex-col items-center justify-evenly">
                    <div className="text-black ctext-2xl font-bold text-center">Оставить отзыв</div>
                    <div className="w-5/6">
                        <div className="flex mb-4">
                            <div
                                style={{ background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZD-VsytAMF7-0NASGAtycgVAt5g-6ln4gQ&usqp=CAU')" }}
                                className="comment-user rounded-full"
                            ></div>
                            <div className="flex flex-col justify-center ml-4">
                                <div className="text-black-dark ctext-lg font-bold">Katya0808</div>
                            </div>
                        </div>
                        {/* textarea */}
                        <div className="mt-4 md:mt-0">
                            <textarea name="" id="" rows="4" placeholder="Текст отзыва..." className="w-full border border-grey text-grey-dark ctext-base font-medium rounded-md p-4 focus:outline-none"></textarea>
                            <button className="bg-blue text-white ctext-base w-full font-bold rounded-md py-3 px-8 mt-2">Опубликовать</button>
                            <button 
                                onClick={() => dispatch(setLeaveComment(false))}
                                className="bg-red text-white ctext-base w-full font-bold rounded-md py-3 px-8 mt-2">Отменять</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LeaveComment;
