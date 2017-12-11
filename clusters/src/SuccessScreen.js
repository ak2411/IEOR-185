import React from 'react';

class SuccessScreen extends React.Component {

  render() {
    return (
      <div className="success_screen">
        <div className="success_form">
          <h1>Thanks</h1>
          <p>Form has been validated and submitted</p>
          <span>Your email:</span>
        </div>
      </div>
    );
  }

}

export default SuccessScreen;
