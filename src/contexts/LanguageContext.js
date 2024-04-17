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

// capital C in context is very important
// The reason is, any time we create a Component outselves and try to render it
// out using JSX, we have to use a capital C for that variable.
// If we use a lowercase, like so, so lowercase context, React is going to
// think that this is a normal vanilla HTML element that we're trying to
// render out, like say a div or a form or a span or whatever.
// So any Component we create has to have a capital letter.
// That's why we use capital C for Context.

// We also have to continue to export this Context Object as well.
export const Context = React.createContext('english');

/* @ Language Store Component
 * LanguageStore component is going to contain all of our business logic
 * and our data and make it available to other components inside of our
 * component hierarchy over the context system.
 */
// The last thing we have to inside this file is make sure that we export
// the LanguageStore and make it available to other files inside of our
// application.
export class LanguageStore extends React.Component {
  // This right here i.e state and callback function is all of our business
  // logic
  // Its our current set of data or the current selected language and we also
  // have the ability to change the currently selected language as well
  state = { language: 'english' };

  // implement a callback function that we can pass off to other components
  // so they can change this state property
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  // Next thing we're going to do is, define our render method.
  // Inside the render method, we're going to set up a LanguageContext Provider
  // and as the value property, we're gonna pass off the currently selected
  // language and that callback we just created as well.
  // So this render method with the provider is how we're going to share the
  // current data along with the ability to change it with other components
  // inside of our application.
  render() {
    // The value for the Context Provider is going to be the combination of
    // everything  out of our state object and this callback function as well.
    // So the value is all of our data and the ability to change the data as well.
    // ...this.state - we're creating a new object. we're taking all the values
    // out of our current state object and adding them into that object.
    // And in addition, we're also going to take this callback function and
    // add it in there as well, so onLanguageChange.
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

// So that is our LanguageStore.
// It encapsulates all the data around the currently selected language and it
// also implements the ability to change that data as well.
