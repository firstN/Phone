require('../style/Contacts.scss');
const products = require('../module json/module.json').products;
import {Row,Icon,Card,CardTitle,Col,MediaBox,Chip,Button } from 'react-materialize'
const connect = ReactRedux.connect;

class Contacts extends React.Component{
    
        
        constructor(props){
            super(props);
           this.state = {
               vivibile: false
           }
        }
        image_of(){
            return "./src/assets/4.jpg"
        }
        visible_all(){
            console.log('ffff')
            let a =true;
            this.setState({
                vivibile: a
            }) 
        }
       
        render(){
            console.log(this.state)
            let date = [...this.props.phone];
            if(localStorage.phone && this.props.phone.length === 0){
                date =[...JSON.parse(localStorage.phone)]
   
            }
           
const self =this;
 const array = date.map(function(v,i){
  return( 
        <Card key={i+v} id="phone_menu" className='phone_menu'>
             <Col l={3} m={3} s={3} className='phone_image'>        
                        <MediaBox className='phone' src={v.image }caption={v.code} />
                        <Chip>{v.code}</Chip>
                    </Col>
                    <Col  className = "text_menu"  l={9} m={9} s={9}>
                        <h4 key={i} id = {i} className = "href_next" >{v.author}</h4>
                        <p className = "main_features" >Main Features</p>
                        <Chip>
                            <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Emojione_1F4B8.svg/240px-Emojione_1F4B8.svg.png" alt='Contact Person' />
                            <span id="prise" >{v.Price} $</span>
                        </Chip>
                        <Chip>{v.Store}</Chip>
                        <Chip>{v.Shipping}</Chip>
                        <Chip>{v.Sort_by_time_of_adding}</Chip>
                        <p className = "aboutits ">{v.aboutits}</p>
                        <p className = "aboutits ">{v.Display}</p>
                        <p className = "aboutits ">{v.CPU}</p>
                        <p className = "aboutits ">{v.System}</p>
                        <p className = "aboutits ">{v.System}</p>
                        <p className = "aboutits ">{v.SIM}</p>
                        <Button type='button'  id={i} onClick={self.props.RemuvNewPhone} >Del </Button>
                    </Col>

        </Card>
        )
})
            return (
                    <Row>
                         <Col className ="App_store "id='block' l={12} m={12} s={12} >
                             <Button type='button' onClick={this.props.DelNewPhone} >Del
                            </Button> 
                            {array}
                         </Col>
                         <div className={'full_window_' + this.state.vivibile} >
                        
                            <Card header={<CardTitle reveal image={this.image_of()} waves='light'/>} title="Remove That">
                            
                                
                            <Button type='button' waves='red' onClick={this.props.RemuvNewPhone} >Yes
                            </Button>
                             <Button type='button' waves='purple' onClick={this.props.DelNewPhone} >No
                            </Button>
                            </Card>
                         </div>
                    </Row>
                )
        }
    }
    const mapStateToProps = (state) => {
        return {
            phone : state
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            DelNewPhone: () => dispatch({type: "DEL_PHONE"}),
            RemuvNewPhone: (e) => dispatch({type: "REMUV_PHONE",id:e.target.id})
            
        }
    }
    module.exports = connect(mapStateToProps,mapDispatchToProps) (Contacts);
    

   