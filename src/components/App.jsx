import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

/* Context
 * Two ways to get information in to the context object: (Source of data)
 * We can either create a default value to the context object OR
 * we can create a Provider Component in the Parent Component
 *
 * Two ways to get information out of the context object: (Thing that uses data)
 * We can receive the data either by referencing `this.context` or by
 * creating a component called a Consumer inside of the nested child.
 */

// The Consumer is automatically created for us when we create a new context object

// The App.jsx is no longer in charge of maintaining the currently selected
// language. So we will remove the state initializatino at top. Also, the
// App.jsx file no longer needs the ability to change the currently selected
// language. So we will remove that callback right there as well.
class App extends React.Component {
  render() {
    // We're no longer going to set up our Provider inside of here because
    // the App component is no longer responsible for maintaining our
    // business logic or our application data! So we're removing the Provider.
    return (
      <div className='ui container'>
        {/* We want both UserCreate and LanguageSelector Component to have access to
        the data inside of our LanguageStore. UserCreate wants to get the
        currently selected language. And LanguageSelector wants to get that 
        callback function. It wants the ability to change the currently 
        selected language. So that's why we've to wrap both the LanguageSelector
        and UserCreate with this new LanguageStore Component! */}
        <LanguageStore>
          {/* The LanguageSelector component is not going to get the ability to
          change the currently selected language from the App.
          Instead, the LanguageSelector is going to get this callback from our
          Context Object instead! So we can delete that prop right here, because
          it's not gonna get that callback from the App Component anymore! */}
          <LanguageSelector />

          {/* Communicate some information from our App Component to the 
        Context Object */}

          {/* For context value, usually we will have a value prop coming from 
        props object or a state object or something similar because we usually 
        want to change the value inside of our context object over time */}

          {/* NOTE: Each separate use of <LanguageContext.Provider> creates a new
        separate 'pipe' of information! Or essentially kind of a new pipe that 
        conveys information from that parent component down to those remote children*/}

          {/* Only this first one sees that update */}
          <ColorContext.Provider value='orange'>
            {/* NOTE: It's not actually UserCreate that needs to access data or
            change data. It is the Components nested inside of UserCreate
            that needs to. */}
            <UserCreate />
          </ColorContext.Provider>

          {/* This second one gets its value from a fixed provider that always has `nepali`  */}
          {/* <LanguageContext.Provider value='nepali'>
          <UserCreate />
        </LanguageContext.Provider> */}

          {/* The last one gets its value from the default value from that context object
        that we set to english */}
          {/* <UserCreate /> */}
        </LanguageStore>
      </div>
    );
  }
}

export default App;
