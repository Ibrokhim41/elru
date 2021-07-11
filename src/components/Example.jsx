import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// const { default: CategoryContainer } = require("./CategoryContainer")
import { decrement, increment } from 'redux/counter'



const Example = () => {

    const count  = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            {/* <CategoryContainer /> */}
            <h1>So</h1>
            <br />
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(increment())}
            >+</button>
        </>
    )
}

export default Example;