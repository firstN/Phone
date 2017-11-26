require('../style/footer.scss')
import {Navbar, NavItem,Icon,Footer} from 'react-materialize'

class Nav_bar extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            return (
                    <div>
                      <Navbar  brand={<img src='http://смартфон-цена.рф/wordpress/wp-content/uploads/elephone-c1x-peacock-blue.jpg'  width="50" />} right className='white' id='foter_nav'>
                            <NavItem  href='/#/'>First fire</NavItem>
                            <NavItem  href='/#/Basket'>Basket</NavItem>
                        </Navbar>
                    </div>
                )
        }
    }
    module.exports = Nav_bar;