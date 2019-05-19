import React from 'react';

import Index from './components/YamlParser';


const App = () => (
  <>
    <h1 className="title">
      YAML to JSON parser
    </h1>

    <p className="intro">
      This page allows to convert some <a href=''>YAML</a> to <a href=''>JSON</a>.
      It uses the <code><a href=''>js-yaml</a></code> JavaScript module. Please, take
      a look at <a href=''>this page</a> to learn how to replace this module by a
      WebAssembly one and improve the performance of the application at lower cost.
    </p>

    <Index />
  </>
);

export default App;
