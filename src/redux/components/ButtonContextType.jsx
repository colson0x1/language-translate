import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// To get the context object
// We're going to first set up something called the context type.
// That is going to essentially link our button component to the context object.
// And to actually reference the information that's inside the context object,
// we're going to make use of the `this.context` property.
class Button extends React.Component {
  // Hooking up a context object to a Class Component
  // `contextType` property is a very special name. anything else is not
  // going to work. like myContextType won't work
  // What static contextType does is, it adds property to our Class itself
  // Anytime we create an instance of a component by writing out something like
  // <Button />, that is creating an instance of the Button Class.
  // Anytime we add methods to a class or anytime that we update say our
  // state property or anything like that, we're changing properties that
  // are assigned to an instance of our class.
  // When we make use of the static keyword, we're adding a property directly to
  // the Class itself.
  // So the line of code we see see there with static is identical to writing out
  // Button.contextType = LanguageContext;
  // We can setup contextType property by making use of either methods:
  // Either `static contextType = LanguageContext` inside of Class Decoration
  // OR: `Button.contextType = LanguageContext` after creating the Class.
  static contextType = LanguageContext;

  render() {
    // console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'पेश गर्नुहोस्';

    return <button className='ui button primary'>{text}</button>;
  }
}

export default Button;
