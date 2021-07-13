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
import CategoryContainer from "components/CategoryContainer";
import UserProfile from './components/UserProfile/index';
import Basket from "components/Basket";
import Order from './components/Order/index';
import MyOrders from './components/MyOrders/index';
import Chat from "components/Chat";
import Payment from './components/Payment/index';
import Feedback from './components/Feedback/index';
import Oferta from './components/Oferta/index';
import Article from './components/Article/index';
import NotFound from './components/404/index';

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
                    <Route exact path="/category" component={CategoryContainer} />
                    <Route exact path="/searchresults" component={SearchResult} />
                    <Route exact path="/user" component={UserProfile} />
                    <Route exact path="/basket" component={Basket} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/myorders" component={MyOrders} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/feedback" component={Feedback} />
                    <Route exact path="/oferta" component={Oferta} />
                    <Route exact path="/article" component={Article} />
                    <Route exact path="/example" component={Example} />
                    <Route exact component={NotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
