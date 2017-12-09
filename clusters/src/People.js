import React, { Component } from 'react';
import './x_rotating_card_v1.4/css/bootstrap.css'
import './x_rotating_card_v1.4/css/rotating-card.css'
import {Col} from 'react-bootstrap';

export class People extends Component {
  render() {
    // const email = this.props.email;
    return (
      <Col md={4}>
      <div className="card-container manual-flip">
         <div className="card">
             <div className="front">
                 <div className="content">
                     <div className="main">
                         <h3 className="name">{this.props.name}</h3>
                         <p className="profession">Product Manager</p>
                     </div>
                     <div className="footer">
                         <div className="rating">
                             <i className="fa fa-mail-forward"></i> manual Rotation
                         </div>
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
