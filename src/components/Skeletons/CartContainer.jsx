import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkleetonCartContainer = ({ grid = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5", rows = { xl: 24, lg: 20, md: 15, sm: 12 } }) => {

    return (
        <>
            <div className={`container mx-auto grid gap-2 ${grid}`}>
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
                <Skeleton width={"100%"} height={250} />
            </div>
        </>
    )
}
export default SkleetonCartContainer;
