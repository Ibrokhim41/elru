import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "./components/Example";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import News from "pages/News";
import SearchResult from "./pages/SearchResult/index";
import Tops from "pages/Tops";
import Top100 from "components/Top100";
import Discounts from "pages/Discounts";
import Book from "pages/Book";
import CategoryContainer from "components/CategoryContainer";
import UserProfile from "./components/UserProfile/index";
import Basket from "components/Basket";
import Order from "./components/Order/index";
import MyOrders from "./components/MyOrders/index";
import Chat from "components/Chat";
import Payment from "./components/Payment/index";
import Feedback from "./components/Feedback/index";
import Oferta from "./components/Oferta/index";
import Article from "./components/Article/index";
import NotFound from "./components/404/index";
import { useEffect } from "react";

const pages = [
    { component: Home, path: "/", exact: true },
    { component: Tops, path: "/tops", exact: true },
    { component: Top100, path: "/top100", exact: true },
    { component: Discounts, path: "/discounts", exact: true },
    { component: News, path: "/news", exact: true },
    { component: Book, path: "/book/:id", exact: true },
    { component: CategoryContainer, path: "/category/:category", exact: true },
    { component: SearchResult, path: "/searchresults/:book", exact: true },
    { component: UserProfile, path: "/user", exact: true },
    { component: Basket, path: "/basket", exact: true },
    { component: Order, path: "/order", exact: true },
    { component: MyOrders, path: "/myorders", exact: true },
    { component: Chat, path: "/chat", exact: true },
    { component: Payment, path: "/payment", exact: true },
    { component: Feedback, path: "/feedback", exact: true },
    { component: Oferta, path: "/oferta", exact: true },
    { component: Article, path: "/article/:id", exact: true },
    { component: Example, path: "/example", exact: true },
    { component: NotFound, exact: true },
];

function App() {
    useEffect(() => {
        document.addEventListener("contextmenu", (event) =>
            event.preventDefault()
        );
        document.onkeydown = function (e) {
            if (e.keyCode === 123) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
                return false;
            }
        };
    }, []);
    
    return (
        <Router>
            <div className="App mb-20 sm:mb-0">
                <Header />
                <Switch>
                    {pages.map((v, i) => (
                        <Route
                            key={i}
                            exact={v.exact}
                            path={v?.path}
                            component={v.component}
                        />
                    ))}
                    {/* <Route exact path="/" component={Home} />
          <Route exact path="/tops" component={Tops} />
          <Route exact path="/top100" component={Top100} />
          <Route exact path="/discounts" component={Discounts} />
          <Route exact path="/news" component={News} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/category" component={CategoryContainer} />
          <Route exact path="/searchresults/:book" component={SearchResult} />
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
          <Route exact component={NotFound} /> */}
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
