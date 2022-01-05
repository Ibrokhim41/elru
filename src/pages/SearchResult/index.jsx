import axios from "axios";
import Cart from "components/Cart";
// import SpecialOffers from "components/SpecialOffers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from '../../axios';

const SearchResult = () => {
  const { book } = useParams();
  const [books, setBooks] = useState();

  useEffect(() => {
    // axios
    //   .get(`https://api.itbook.store/1.0/search/${book}`)
    //   .then((response) => {
    //     setBooks(response.data.books);
    //   });
    axiosInstance.get(`user/books/?q=${book}`)
      .then(res => {
        setBooks(res.data)
      })
    }, [book]);
    
    
  return (
    <div>
      {/* title */}
      <div className="container mx-auto text-black ctext-xl font-bold mt-20">
        Результаты поиска
      </div>
      {/* body */}
      <div className="container mx-auto mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
        {/* {books !== undefined && <SpecialOffers items={books} />} */}
        {books.length ? books.map((book, i) => {
          return (
            <div key={i}>
              <Cart img={book.image}/>
            </div>
          )
        }): 
          <div>"No Result"</div>
        }
      </div>
    </div>
  );
};

export default SearchResult;
