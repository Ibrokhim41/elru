import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "./components/Example";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import News from "pages/News"
import SearchResult from './pages/SearchResult/index';
import Tops from "pages/Tops";
import Top100 from "components/Top100";
import Discounts from "pages/Discounts";
import Book from "pages/Book";

function App() {
    return (
        <Router>
            <div className="App mb-20 sm:mb-0">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tops" component={Tops} />
                    <Route exact path="/top100" component={Top100} />
                    <Route exact path="/discounts" component={Discounts} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/book" component={Book} />
                    <Route exact path="/searchresults" component={SearchResult} />
                    <Route exact path="/example" component={Example} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
