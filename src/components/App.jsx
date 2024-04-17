import React from 'react';
import UserCreate from './UserCreate';

/* Context
 * Two ways to get information in to the context object: (Source of data)
 * We can either create a default value to the context object OR
 * we can create a Provider Component in the Parent Component
 *
 * Two ways to get information out of the context object: (Thing that uses data)
 * We can receive the data either by referencing `this.context` or by
 * creating a component called a Consumer inside of the nested child.
 */

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
        <UserCreate />
      </div>
    );
  }
}

export default App;
