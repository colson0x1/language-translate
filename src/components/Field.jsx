import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

/* We need to make sure that Field Component is going to reach into the
 * Context and pull out the language!
 */
class Field extends React.Component {
  // This forms a link between our Class and the Context object
  // So now we can reference the value inside the context object with
  // `this.context` from inside of our Component
  static contextType = LanguageContext;

  render() {
    // Our context now contains an object with a language and onLanguageChange
    // property not just the string that it was before.
    const text = this.context.language === 'english' ? 'Name' : 'नाम';

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
