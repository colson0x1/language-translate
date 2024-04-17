import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'पेश गर्नुहोस्';
  }

  render() {
    // console.log(this.context);

    /* Whenever we place a consumer, we always provide one argument to it or
     * kind of one child we should say. We can think of this almost as being
     * an argument, but it's really technically a child that we are passing into
     * the consumer.
     * This one child is always going to be a function.
     * So inside of a set of curly braces, we're gonna place a function like so.
     * This function is automatically going to be called by the consumer and
     * it's going to be called with whatever current value is inside of our pipe.
     * That value is going to show up as a first argument inside of this arrow
     * function right below.
     *
     */
    return (
      <ColorContext.Consumer
      <button className='ui button primary'>
        {/* * Here we're providing a function as a child to a React component. 
      That component is going to take that child function and automatically 
      invoke it for us.
      So this value right here is going to be whatever value is currently 
      inside of the pipe. So inside of this function alone, only inside of this
      function, can we get access to that value and use it to decide what we 
      want to print out */}
        {/* So again, anytime we make use of a consumer to get a value out of that
      pipe or that context object, we're gonna pass in a single function as a child.
      That child will be called with whatever value is inside of our pipe. So
      we can implement some logic inside of here. */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
