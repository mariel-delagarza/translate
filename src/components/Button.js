import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext;
  
  render() {
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;