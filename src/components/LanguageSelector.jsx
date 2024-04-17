import React from 'react';
// Accessing the Context Object
// We got the default export from LanguageContext
import LanguageContext from '../contexts/LanguageContext';

// We can access that Context Object inside of our LanguageSelector by
// EITHER wiring it up to `this.context` through that context types property
// OR by setting up the Consumer!
//
// Now in the case of our LanguageSelector Component, this thing doesn't need
// to access any other Context Object. So for this one, we'll use `this.context`
// approach.

/* Wire up a callback function to LanguageSelector that will allow the
 * LanguageSelector to change the currently selected language through our
 * LanguageStore */
class LanguageSelector extends React.Component {
  // This is going to hook up our LanguageSelector to the LanguageContext!
  static contextType = LanguageContext;

  render() {
    /* Now we should see some information coming out of our LanguageStore
     * specifically everything inside the state object and the onLanguageChange
     * callback as well. */
    console.log(this.context);

    // Now make sure that we change our currently selected language, anytime
    // a user clicks on a flag, by changing the callback onLanguageChange
    // down below. So our callback to change the language is no longer prsent
    // on the props object. It's no longer being passed in from our App Component.
    // Instead it is located on our Context property.
    return (
      <div>
        <h2>Select a language:</h2>
        <i
          className='flag us'
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className='flag np'
          onClick={() => this.context.onLanguageChange('nepali')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
