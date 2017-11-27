

const About_us = require('./template/about_us.jsx'); 
const Basket = require('./template/Basket.jsx');
const Footer = require('./template/footer.jsx');
const Nav_bar = require('./template/nav_bar.jsx');


const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Provider = ReactRedux.Provider;
// let array =[];
const reducer = (state = [], action) =>{
    
    if(action.type === 'ADD_PHONE'){
      if(localStorage.phone && state.length===0){
        state=[...JSON.parse(localStorage.phone)]
      }
        
        state = [...state,action.phone]
        let beme =JSON.stringify(state)
        localStorage.setItem('phone',beme)
    } else if(action.type === 'DEL_PHONE') {
        state =[]
        localStorage.setItem('phone','')
    } else if(action.type === 'REMUV_PHONE'){
        let date = [...state]
        date.splice(action.id,1)

        state=date
        localStorage.setItem('phone',JSON.stringify(state))
    }
    
    return state
}
const store = Redux.createStore(reducer)
window.store = store;
ReactDOM.render(
    <div>
        <Nav_bar />
            <Provider store = {store}>  
                <Router>
                    <div className='App'>    
                        
                            <Route exact path = '/' component = {About_us} />
                            <Route  path = '/Basket' component = {Basket} />
                    
                    </div>
                </Router>
            </Provider>
        <Footer />
    </div>
    ,
    document.getElementById('container')
)
