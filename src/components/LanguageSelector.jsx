import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        <h2>Select a language:</h2>
        <i
          className='flag us'
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className='flag np'
          onClick={() => this.props.onLanguageChange('nepali')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
