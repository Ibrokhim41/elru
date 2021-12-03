import "./style.css"
import { useWindowDimensions } from 'hooks/ScreenWidth';
import { useHistory } from 'react-router-dom';


const TopBooksContainer = () => {

    const route = useHistory()
    const { width } = useWindowDimensions()

    return (
        <>
            {width > "576" ?
                <div className="w-full bg-white flex rounded-md py-7 px-9 border border-grey">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="ctext-2xl text-black font-bold uppercase">Топ 100 книг по саморазвитию</div>
                            <div className="ctext-base text-grey font-medium">Лучшая подборка для тех, кто ищет мотивацию именно в книгах</div>
                        </div>
                        <button 
                            onClick={() => route.push('/top100')}
                            className="w-min ctext-base font-bold text-white bg-blue rounded-md py-3 px-10 focus:outline-none">Посмотреть</button>
                    </div>
                    <div
                        style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                        className="top-books-container-img ml-4 rounded-md"
                    ></div>
                </div> :
                <div 
                    onClick={() => route.push('/top100')}
                    className="flex items-center mb-4">
                    <div className="w-20 h-20 flex justify-center items-center rounded-md bg-white border border-grey">
                        <span
                            style={{ background: "url('https://cdn1.ozone.ru/multimedia/1019443093.jpg')" }}
                            className="mob-top-book-container-img block"
                        ></span>
                    </div>
                    <div className="ctext-lg text-dark font-semibold ml-4">Топ 100 шедевров научной фантастики</div>
                </div>
            }
        </>
    )
}

export default TopBooksContainer;