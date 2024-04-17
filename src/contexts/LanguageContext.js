/* @ The purpose of this file is to create a Context Object and Export it */
// The reason we're putting this into a separate file is that we can import
// the context object into only the component files that we care about.
// In our application, we only want to connect this context object to our
// App, Button and the Field Component
// No other component needs to get access to the language context
// So that is why we're creating it inside of a separate file. Its so that
// we can only make use of it where we actually want to connect it.

// Creating Context Object
import React from 'react';

// Adding english as the default selected language on the screen
// So the default value for the context object is the string 'english'
export default React.createContext('english');
