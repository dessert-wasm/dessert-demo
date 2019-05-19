import React from 'react';

import YamlParser from '../YamlParser';


const App = () => (
  <>
    <h1 className="title">
      YAML to JSON parser
    </h1>

    <p className="intro">
      This page allows to convert
      some <a href='https://yaml.org/'>YAML</a> to <a href='https://www.json.org/'>JSON</a>.
      It uses the <code><a href='https://github.com/nodeca/js-yaml'>js-yaml</a></code> JavaScript
      module. Please, take a look at <a href='/'>this page</a> to
      learn how to replace this module by a WebAssembly one and improve the
      performance of the application at lower cost.
    </p>

    <YamlParser />
  </>
);

export default App;
