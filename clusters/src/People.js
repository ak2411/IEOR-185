import React, { Component } from 'react';
import './x_rotating_card_v1.4/css/bootstrap.css'
import './x_rotating_card_v1.4/css/rotating-card.css'
import {Col, Image} from 'react-bootstrap';

export class People extends Component {
  render() {
    // const email = this.props.email;
    return (
      <Col md={3}><div className="card-container manual-flip">
         <div className="card"><div className="front">
               <div className="user">
                   <Image className="img-responsive" alt="defaultProf" src={require("./img/f-default-profile-icon.png")}/>
               </div>
                <div className="content">
                  <div className="main">
                       <h3 className="name">{this.props.name}</h3>
                       <p className="profession">Product Manager</p>
                   </div>
                   <div className="footer">
                        Met through Ken Singer
                   </div>
               </div>
            </div>
        </div>
      </div>
      </Col>
    );
  }
}

export default People;
