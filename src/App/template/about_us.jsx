// require('../style/about_us.scss');
const products = require('../module json/module.json').products;
const connect = ReactRedux.connect;
import {Row,Section,Icon,Chip,Card,Carousel,CardPanel ,CardTitle,Col,MediaBox,Input,Label,PaginationButton,Parallax ,SideNav,SideNavItem,Button} from 'react-materialize'
let all_mous_don= require('react-materialize');
let a =products[0].image;
class About_as extends React.Component{
    
        
        constructor(props){
            super(props);
           this.state = {
               visible:'',
               min: 100,
               max:1000,
               array: products,
               array_chenge_Store:[],
    
                Sort_by_price:'',
                Sort_by_time_of_adding:'',
                Shipping:'',
                counter_all : []

           }
          this.return_array = require('./function phone/return_array');
          this.Shipping = require('./function phone/Shipping');
          this.store_by = require('./function phone/store_by');
          this.Sort_by_time_of_adding = require('./function phone/Sort_by_time_of_adding');
          this.change_box = require('./function phone/change_box');
          this.Sort_by_price_sort = require('./function phone/Sort_by_price_sort');
          
        }
        chenge_all(e){
            let date;
            
            if(e.target.checked === true){
               
                   date = [...this.state.array_chenge_Store, e.target.id];
                  
            } else if(e.target.checked === false) {
               
                if(this.state.array_chenge_Store.length === 1){
                    date =[];
                } else {
                    date = [...this.state.array_chenge_Store ]
                    for(let i = 0; i < date.length; i++){
                        if(date[i] ==  e.target.id){
                            date.splice(i,1)
                        }
                    }
                }
            }
            this.setState({
                array_chenge_Store: date
                })
        }
    
        get_items(e){
            e.preventDefault();
            let new_array=[],
            visible = '';
            const counter_all = [];
            const array =[...products]
            
          if(this.state.array_chenge_Store.length !== 0  ){
            counter_all.push(1)
            let array_chenge_Store =  this.return_array(new_array,array);
            new_array = [...this.store_by(array_chenge_Store,this.state.array_chenge_Store,new_array,'Store')]
            } 
           
            if(this.state.min!='100' || this.state.max !='1000'){
                counter_all.push(1)
                const array_was = [];
             
                let max_max = this.return_array(new_array,array)

                for(let i = 0; i < max_max.length; i++){
                   if(+this.state.min <= +max_max[i].Price && +this.state.max >= +max_max[i].Price ){
                    array_was.push(max_max[i])
                    
                   } else {}
                }
                new_array=[...array_was]
            } 
            

            if(this.state.Sort_by_price){

               
                let counter = 0;
                let Sort_by_price= [...new_array];
                if(counter_all.length ===0){
                 Sort_by_price = this.return_array(new_array,array)
                }
                counter_all.push(1)
                new_array = [...this.Sort_by_price_sort(Sort_by_price,counter,'highest')]
            }

            if(this.state.Sort_by_time_of_adding){
                let date_new_array = [...new_array]
             if(counter_all.length ===0){
                 date_new_array = this.return_array(new_array,array)
             } 
               
                
                
                counter_all.push(1)
                new_array = this.Sort_by_time_of_adding(date_new_array,this.state.Sort_by_time_of_adding)
            }

            if(this.state.Shipping){
                let Shipping = [...new_array]
                if(counter_all.length ===0){
                    Shipping = this.return_array(new_array,array)
                } 
                
                counter_all.push(1)
                new_array = this.Shipping(Shipping,this.state.Shipping)
            }

if( counter_all.length === 0){
    new_array= this.return_array(new_array,array)
    
} else if(new_array.length === 0) {
    visible = 'Not body'
}
            
            this.setState({
                array:new_array,
                visible:visible
              })
                
        }
set_min_max(e){
  
    let min = this.state.min ,
    max = this.state.max; 
    e.target.id ==='min'?min = e.target.value : max = e.target.value;
        
    this.setState({
        min: min,
        max: max,
        
    })
if(e.target.id === "reset"){
    this.setState({
        min: 100,
        max: 1000,
        array:[...products],
        Sort_by_price:'',
        Sort_by_time_of_adding:'',
        Shipping:'',
        array_chenge_Store:[],
        counter_all: []
    })
}
}   
   
Sort_by_price(e){
    let date_cheked;
    if( e.target.id==="highest" ||  e.target.id==="lowest"){
        date_cheked= this.change_box(  e.target.id,e.target.checked,"highest",'lowest',date_cheked)
        this.setState({
            Sort_by_price:date_cheked
        })
    }
    
    if( e.target.id==="latest" ||  e.target.id==="oldest"){
        date_cheked= this.change_box(  e.target.id,e.target.checked,"latest",'oldest',date_cheked)
        this.setState({
            Sort_by_time_of_adding:date_cheked
        })
    }
    if( e.target.id==="fastest" ||  e.target.id==="slowest"){
        date_cheked= this.change_box(  e.target.id,e.target.checked,"fastest",'slowest',date_cheked)
        this.setState({
            Shipping:date_cheked
        })
    }
}
click(e){
   this.props.dispatch({type:'ADD_PHONE',phone:'e.target.id'})
}
       
        render(){
            console.log(this.props)
        let self = this;
        let array = this.state.array.map(function(v,i){
            return(
                <Card  key={v+i} l={12} m={12} s={12} id="phone_menu" className='phone_menu'>
                    <Col l={3} m={3} s={3} className='phone_image'>        
                        <MediaBox className='phone' src={v.image }caption={v.code} />
                        <Chip>{v.code}</Chip>
                    </Col>
                    <Col  className = "text_menu"  l={9} m={9} s={9}>
                        <a key={i} id = {i} className = "href_next" onClick={self.props.addNewPhone.bind(this)} href='/#/Basket'>{v.author}</a>
                        <p className = "main_features" >Main Features</p>
                        <Chip>
                            <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Emojione_1F4B8.svg/240px-Emojione_1F4B8.svg.png" alt='Contact Person' />
                            <span id="prise" >{v.Price} $</span>
                        </Chip>
                        <Chip>{v.Store}</Chip>
                        <Chip>{v.Shipping}</Chip>
                        <Chip>{v.Sort_by_time_of_adding}</Chip>
                        <p className = "aboutits ">{v.aboutits}</p>
                    </Col>

                </Card>
            )
        })
            return (
                <Row>
             
                    <Col className ="App_store" l={12} m={12} s={12} >
                        <Col l={3} m={3} s={12} >
                             <Card  className = "search_box" >
                                <form>
                                <p className='store'>Store</p>
                                <hr/>
                                <div className='input_checkbox'>
                                    <Input id='Samsung' type='checkbox'  label='Samsung' onChange={this.chenge_all.bind(this)} />
                                    <Input id='Lenovo' type='checkbox' value='green' label='Lenovo' onChange={this.chenge_all.bind(this)} />
                                    <Input id='Prestigio' type='checkbox' value='green' label='Prestigio' onChange={this.chenge_all.bind(this)} />
                                    <Input id='LeEco' type='checkbox' value='green' label='LeEco' onChange={this.chenge_all.bind(this)}  />
                               
                                </div>
                                <hr/>
                                <div className='input_range'>
                                    <p className='store' >Price: </p>
                                    <p className='store_span' >Min:<span > {this.state.min}</span> $</p>
                                    <input onChange={this.set_min_max.bind(this)} type='range' id='min'  min='100' max='1000' step='50' defaultValue='100' />
                                    <p className='store_span'>Max:<span > {this.state.max}</span> $</p>
                                    <input  onChange={this.set_min_max.bind(this)} type='range' id='max'   min='100'max='1000' step='50' defaultValue='1000' />
                             
                                </div>
                                <hr/>
                               <div className='input_range'>
                                    <p className='store'>Sort by price:</p>
                                    <Input id='highest' type='checkbox' value='green' label='By highest'  onChange={this.Sort_by_price.bind(this)} />
                                    <Input id='lowest' type='checkbox' value='green' label='By lowest' onChange={this.Sort_by_price.bind(this)} />
                               </div >
                               <hr/>
                               <div className='input_range'>
                               <p className='store'>Sort by time of adding:</p>
                                    <Input  id='latest' type='checkbox' value='green' label='By latest'onChange={this.Sort_by_price.bind(this)} />
                                    <Input  id='oldest' type='checkbox' value='green' label='By oldest' onChange={this.Sort_by_price.bind(this)} />
                               </div>
                               <hr/>
                               <div className='input_range'>
                                    <p className='store'>Shipping:</p>
                                    <Input id='fastest' type='checkbox' value='green' label='By fastest'  onChange={this.Sort_by_price.bind(this)} />
                                    <Input id='slowest' type='checkbox' value='green' label='By slowest'  onChange={this.Sort_by_price.bind(this)} />
                               </div>
                               <hr/>
                               
                                <p className='submit' >
                                    <Button waves='red' onClick={this.get_items.bind(this)}  >Get items!</Button>
                                </p>
                                <Button type='reset' id="reset" onClick={this.set_min_max.bind(this)} >Reset</Button>
                               </form>
                            </Card >
                        </Col>
                        <Col l={9} m={9} s={12}>
                            <h4>{this.state.visible}</h4>
                            {array}
                         
                        </Col>
                                
                        </Col>
                        
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
            addNewPhone: (e) => dispatch({type: "ADD_PHONE",phone:products[e.target.id],id:e.target.id})
        }
    }
    module.exports = connect(mapStateToProps,mapDispatchToProps) (About_as);