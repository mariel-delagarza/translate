import React from 'react';

class App extends React.Component {
  state = { language: 'english' };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
      </div>
    );
  }
}

export default App;