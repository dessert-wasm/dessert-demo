import React, { Component } from 'react';

let yaml = undefined;
import('dessert-yaml').then(m => yaml = m);

// import yaml from 'js-yaml';


class App extends Component {
  state = {
    content: '',
    parsed: '',
    elapsed: null,
  };

  handleInput = e => {
    const start = Date.now();

    const toBeParsed = e.target.value;

    try {
      const parsed = yaml.safeLoad(toBeParsed);

      this.setState({
        parsed: JSON.stringify(parsed),
      });
    } catch (e) {
      this.setState({
        parsed: 'Error: ' + e.toString(),
      });
    }

    const end = Date.now();
    this.setState({
      elapsed: end - start,
    })
  };

  render = () => {
    const { elapsed, parsed } = this.state;
    return (
      <>
      <textarea
        cols={120}
        style={{
          minHeight: 300,
        }}
        onInput={this.handleInput}
      />
        <p>{elapsed}</p>
        <p>{parsed}</p>
      </>
    );
  }
}

export default App;
