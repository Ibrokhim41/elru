import Cart from 'components/Cart';

const SearchResult = () => {

    return (
        <div>
            {/* title */}
            <div className="container mx-auto text-black ctext-xl font-bold my-6">Результаты поиска</div>
            {/* body */}
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    )
}

export default SearchResult;