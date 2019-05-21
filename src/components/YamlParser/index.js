import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import yaml from 'js-yaml';

import defaultYaml from '../../services/defaultYaml';


class YamlParser extends Component {
  state = {
    parsed: '',
    elapsed: null,
  };

  componentDidMount = () => {
    this.handleParsing(defaultYaml);
  }

  handleParsing = text => {
    const start = Date.now();

    try {
      const parsed = yaml.safeLoad(text);
      this.setState({
        parsed: JSON.stringify(parsed, null, 2),
      });
    } catch (e) {
      // Forward the error in the output area
      this.setState({
        parsed: 'Error\n----\n' + e.message,
      });
    }

    const end = Date.now();

    this.setState({
      elapsed: end - start,
    })
  }

  handleInput = e => {
    const toBeParsed = e.target.value;
    this.handleParsing(toBeParsed);
  };

  render = () => {
    const { elapsed, parsed } = this.state;

    return (
      <>
        <div className="pure-g">
          <div className="pure-u-1-1 pure-u-sm-1-2">
            <div className="input">
              <textarea
                style={{
                  width: '100%',
                  resize: 'none',
                  outline: 'none',
                  padding: 16,
                  border: '1px solid #eee',
                  background: 'rgb(250, 250, 250)',
                  spellcheck: false,
                }}
                onChange={this.handleInput}
                defaultValue={defaultYaml}
              />
            </div>
          </div>

          <div className="pure-u-1-1 pure-u-sm-1-2">
            <div className="result">
              <SyntaxHighlighter
                language='json'
                style={solarizedlight}
                customStyle={{
                  width: '100%',
                  resize: 'none',
                  margin: 0,
                  border: '1px solid #eee',
                  borderRadius: 0,
                  background: 'rgb(250, 250, 250)',
                }}
              >
                { parsed }
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {
          elapsed !== null &&
            <p className="time">
              <span role="img" aria-label="rocket" className="emoji">🚀</span>Conversion done in { elapsed }ms!
            </p>
        }
      </>
    );
  }
}

export default YamlParser;
