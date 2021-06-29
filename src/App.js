// import Example from "./components/Example"
import Footer from "components/Footer";
import Header from "components/Header";
import Discounts from "pages/Discounts";
import Home from "pages/Home";


function App() {
    return (
        <div className="App">
            <Header />
            {/* <Home /> */}
            <Discounts />
            <Footer />
        </div>
    );
}

export default App;
