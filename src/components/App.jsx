import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          <h2>Select a language:</h2>
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag np'
            onClick={() => this.onLanguageChange('nepali')}
          />
        </div>
        {/* Communication some information from our App Component to the 
        Context Object */}

        {/* For context value, usually we will have a value prop coming from 
        props object or a state object or something similar because we usually 
        want to change the value inside of our context object over time */}

        {/* NOTE: Each separate use of <LanguageContext.Provider> creates a new
        separate 'pipe' of information! Or essentially kind of a new pipe that 
        conveys information from that parent component down to those remote children*/}

        {/* Only this first one sees that update */}
        <ColorContext.Provider value='orange'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>

        {/* This second one gets its value from a fixed provider that always has `nepali`  */}
        {/* <LanguageContext.Provider value='nepali'>
          <UserCreate />
        </LanguageContext.Provider> */}

        {/* The last one gets its value from the default value from that context object
        that we set to english */}
        {/* <UserCreate /> */}
      </div>
    );
  }
}

export default App;
