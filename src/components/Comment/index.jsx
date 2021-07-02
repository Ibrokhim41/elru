import "./style.css"
import { FiPlus } from "react-icons/fi"
import { HiOutlineReply } from "react-icons/hi"
import { useState } from "react"

const Comment = () => {

    const [showComment, setShowComment] = useState(false)
    const [addReply, setAddReply] = useState(false)
    const [addComment, setAddCommet] = useState(false)

    return (
        <div>
            {/* top */}
            <div className="flex justify-between items-center pb-4 border-b border-grey">
                <div className="text-black-dark ctext-xl font-bold">Отзывы о книге</div>
                <div 
                    onClick={() => setAddCommet(!addComment)}
                    className={`flex items-center ctext-sm font-bold cursor-pointer ${addComment ? 'text-red' : 'text-blue'}`}>ОСТАВИТЬ ОТЗЫВ <FiPlus className={`text-xl transition-all transform ${addComment ? 'rotate-45' : 'rotate-0'}`} /></div>
            </div>
            {/* content */}
            <div className="border-b border-grey">
                <div className="grid grid-cols-10 my-10">
                    {/* image & user-name */}
                    <div className="col-span-2 md:col-span-1 w-full flex justify-center sm:justify-end md:justify-center">
                        <div
                            style={{ background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZD-VsytAMF7-0NASGAtycgVAt5g-6ln4gQ&usqp=CAU')" }}
                            className="comment-user rounded-full"
                        ></div>
                    </div>
                    <div className="col-span-8 md:col-span-9 flex flex-col justify-center ml-1 sm:ml-4 md:ml-0">
                        <div className="text-black-dark ctext-lg font-bold">Katya0808</div>
                        <div className="text-grey ctext-base font-medium">21.05.2021</div>
                    </div>
                    {/* text */}
                    <div className="col-start-1 col-end-11 sm:col-start-2 sm:col-end-11 xl:col-start-2 xl:col-end-8 mt-4 md:mt-0">
                        <div className="text-grey-dark ctext-base font-medium">Книга об изменениях тела, которая поможет девочкам обрести уверенность в себе. Автор в формате коротких ироничных эссе дает полезные советы на темы, связанные с физиологией, которые не принято открыто обсуждать в обществе и семье. Классная книга, дочке очень понравилась! Помогает ответить на многие вопросы деликатно и очень правильно. рекомендую!</div>
                    </div>
                    {/* replay */}  
                    <div className="col-start-1 sm:col-start-2 col-end-11 xl:col-start-2 xl:col-end-8 flex justify-between items-center mt-4">
                        <div className="flex items-center text-blue ctext-xs font-medium cursor-pointer">
                            <HiOutlineReply className={`transform ${showComment ? 'rotate-90' : 'rotate-180'} mr-2`} />
                            <div
                                onClick={() => setShowComment(!showComment)}
                            >{showComment ? `СКРЫТЬ ОТВЕТЫ (5)` : `ОТВЕТЫ (5)`}</div>
                        </div>
                        <div 
                            onClick={() => setAddReply(!addReply)}
                            className={`flex ${addReply ? 'text-red' : 'text-black-dark'} ctext-xs font-bold hover:text-blue cursor-pointer`}>
                            {addReply ? 'ОТМЕНИТЬ' : 'ОТВЕТИТЬ'} <FiPlus className={`text-xl transition-all transform ${addReply && 'rotate-45'}`} />
                        </div>
                    </div>

                    {/* replays */}
                    <div className={`${showComment ? 'block' : 'hidden'} col-span-10 sm:col-start-2 sm:col-end-10`}>
                        <div className="grid grid-cols-10 my-10">
                            {/* image & user-name */}
                            <div className="col-span-2 md:col-span-1 w-full flex justify-center sm:justify-end md:justify-center">
                                <div
                                    style={{ background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZD-VsytAMF7-0NASGAtycgVAt5g-6ln4gQ&usqp=CAU')" }}
                                    className="comment-user rounded-full"
                                ></div>
                            </div>
                            <div className="col-span-8 md:col-span-9 flex flex-col justify-center ml-1 sm:ml-4 md:ml-0">
                                <div className="text-black-dark ctext-lg font-bold">Katya0808</div>
                                <div className="text-grey ctext-base font-medium">21.05.2021</div>
                            </div>
                            {/* text */}
                            <div className="col-start-1 col-end-11 sm:col-start-2 sm:col-end-11 xl:col-start-2 xl:col-end-8 mt-4 md:mt-0">
                                <div className="text-grey-dark ctext-base font-medium">Книга об изменениях тела, которая поможет девочкам обрести уверенность в себе. Автор в формате коротких ироничных эссе дает полезные советы на темы, связанные с физиологией, которые не принято открыто обсуждать в обществе и семье. Классная книга, дочке очень понравилась! Помогает ответить на многие вопросы деликатно и очень правильно. рекомендую!</div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="grid grid-cols-10 my-10">
                            {/* image & user-name */}
                            <div className="col-span-2 md:col-span-1 w-full flex justify-center sm:justify-end md:justify-center">
                                <div
                                    style={{ background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZD-VsytAMF7-0NASGAtycgVAt5g-6ln4gQ&usqp=CAU')" }}
                                    className="comment-user rounded-full"
                                ></div>
                            </div>
                            <div className="col-span-8 md:col-span-9 flex flex-col justify-center ml-1 sm:ml-4 md:ml-0">
                                <div className="text-black-dark ctext-lg font-bold">Katya0808</div>
                                <div className="text-grey ctext-base font-medium">21.05.2021</div>
                            </div>
                            {/* text */}
                            <div className="col-start-1 col-end-11 sm:col-start-2 sm:col-end-11 xl:col-start-2 xl:col-end-8 mt-4 md:mt-0">
                                <div className="text-grey-dark ctext-base font-medium">Книга об изменениях тела, которая поможет девочкам обрести уверенность в себе. Автор в формате коротких ироничных эссе дает полезные советы на темы, связанные с физиологией, которые не принято открыто обсуждать в обществе и семье. Классная книга, дочке очень понравилась! Помогает ответить на многие вопросы деликатно и очень правильно. рекомендую!</div>
                            </div>
                        </div>
                    </div>

                    {/* user-replay */}
                    <div className={`${addReply ? 'block' : 'hidden'} col-start-1 sm:col-start-2 col-end-11 mt-4`}>
                        <div className="grid grid-cols-10">
                            <div className="col-span-2 md:col-span-1 w-full flex justify-center sm:justify-end md:justify-center">
                                <div
                                    style={{ background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZD-VsytAMF7-0NASGAtycgVAt5g-6ln4gQ&usqp=CAU')" }}
                                    className="comment-user rounded-full"
                                ></div>
                            </div>
                            <div className="col-span-8 md:col-span-9 flex flex-col justify-center ml-1 sm:ml-4 md:ml-0">
                                <div className="text-black-dark ctext-lg font-bold">Katya0808</div>
                            </div>
                            {/* textarea */}
                            <div className="col-start-1 sm:col-start-2 col-end-11 xl:col-end-8 mt-4 md:mt-0">
                                <textarea name="" id="" rows="5" placeholder="Ваш ответ" className="w-full border border-grey text-grey-dark ctext-base font-medium rounded-md p-4 focus:outline-none"></textarea>
                                <button className="bg-blue text-white ctext-base font-bold rounded-md py-2 px-8 mt-2">Ответить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* show more replys */}
            <div className="text-blue ctext-sm font-bold flex justify-center mt-5 mx-auto cursor-pointer">ПОКАЗАТЬ ЕЩЕ ОТЗЫВЫ</div>
        </div>
    )
}

export default Comment;