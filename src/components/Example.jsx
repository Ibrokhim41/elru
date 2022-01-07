// import Loading from "./Loading";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkleetonCartContainer from './Skeletons/CartContainer';



const Example = () => {

    return (
        <>
            {/* <Loading /> */}
            <div className={`container mx-auto`}>
            <Skeleton circle={true} width={50} height={50} />
            </div>
            <SkleetonCartContainer />
            {/* <Skeleton count={5} /> */}
        </>
    )
}

export default Example;