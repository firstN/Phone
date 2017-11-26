

const About_us = require('./template/about_us.jsx'); 
const Basket = require('./template/Basket.jsx');
const Footer = require('./template/footer.jsx');
const Nav_bar = require('./template/nav_bar.jsx');


const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
ReactDOM.render(
    <div>
        <Nav_bar />
            <Router>
                <div className='App'>        
                        <Route exact path = '/' component = {About_us} />
                        <Route  path = '/Basket' component = {Basket} />
                        
                </div>
            </Router>
        <Footer />
    </div>
    ,
    document.getElementById('container')
)
