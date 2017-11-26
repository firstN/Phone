require('../style/Contacts.scss');

import {Row,Icon,Card,CardTitle,Col,MediaBox } from 'react-materialize'

class Contacts extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        add_clock(){
            console.log('hello')
        }
       
        render(){
            return (
                    <Row>
                        <Col  l={12} m={12} s={12} >
                            <Card>
                                <div className='contacts_manu' >

                                    <iframe className='map_contacts' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20339.14647044302!2d30.628882!3d50.4151433!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1508754828927"  allowfullscreen></iframe>
                                   
                                    <div className='contacts_namber'>
                                        <h5>Contacts</h5>
                                        <div>
                                            <a href="tel:+38 050 986-86-82"> <Icon className='one_icon span_Location'>call</Icon>+38 050 986-86-82</a>
                                        </div>
                                        <div>
                                            <a href="tel:+38 099 712-62-55"> <Icon className='one_icon span_Location'>call</Icon>+38 099 712-62-55</a>
                                        </div>
                                        <div>
                                            <a href="mailto:info@gssegroup.com"><Icon className='one_icon span_Location'> email</Icon>info@gssegroup.com</a>
                                        </div>
                                        <br />
                                        <div>
                                            <a href="callto:01234567890"><span className='span_Location'>Skype:</span> GSSE GROUP</a> 
                                        </div>
                                        <div>
                                            <p><span className='span_Location'>Location:</span> Odessa, Ukraine</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                  
                         </Col>
                    </Row>
                )
        }
    }
    module.exports = Contacts;

    //<a href="callto:01234567890">01234 567 890</a> <a href="tel:+7 (4012) 52 44 07">+7 (4012) 52 44 07</a> <a href="mailto:example@example.com">Example Email</a>
    //