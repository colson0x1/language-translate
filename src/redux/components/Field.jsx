import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // This forms a link between our Class and the Context object
  // So now we can reference the value inside the context object with
  // `this.context` from inside of our Component
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'नाम';

    return (
      <div className='ui field'>
        <h1>
          <label>{text}</label>
        </h1>
        <input />
      </div>
    );
  }
}

export default Field;
