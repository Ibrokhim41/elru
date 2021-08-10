import axios from "axios";
import Cart from "components/Cart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { book } = useParams();
  const [books, setBooks] = useState();

  useEffect(() => {
    axios
      .get(`https://api.itbook.store/1.0/search/${book}`)
      .then((response) => {
        console.log(response);
        setBooks(response.data.books);
      });

    }, [book]);
    
  return (
    <div>
      {/* title */}
      <div className="container mx-auto text-black ctext-xl font-bold my-6">
        Результаты поиска
      </div>
      {/* body */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
        {books !== undefined && books.map((book, i) => {
          return (
            <div key={i}>
              <Cart img={book.image}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SearchResult;
