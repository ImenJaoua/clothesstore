import React from "react";
import Women from './Women.jpg'
import{Row,Col,Container,Button} from "react-bootstrap";
function Womenpage(){  
        return (
            <div>
               
               <Container style={{marginTop:'5%',marginBottom:'5%'}}>
                <Row>
                    <Col xs={6} md={4} style={{textAlign:'center'}}>
                        <img src={Women} width="300px" heigth="300px"/>
                        <h3>T-Shirt</h3>
                        <h4>T-Shirt for all sizes</h4>
                        <Button variant="primary">Buy Now</Button>
                    </Col>
                    <Col xs={6} md={4} style={{textAlign:'center'}}>>
                        <img src={Women} width="300px" heigth="300px"/>
                        <h3>T-Shirt</h3>
                        <h4>T-Shirt for all sizes</h4>
                        <Button variant="primary">Buy Now</Button>
                    </Col>
                    <Col xs={6} md={4} style={{textAlign:'center'}}>>
                        <img src={Women} width="300px" heigth="300px" />
                        <h3>T-Shirt</h3>
                        <h4>T-Shirt for all sizes</h4>
                        <Button variant="primary">Buy Now </Button>
                    </Col>
                </Row>
            </Container>
        
            

        

            </div>
            
        );
    }


export default Womenpage;