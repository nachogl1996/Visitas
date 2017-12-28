import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReduxProvider from './components/ReduxProvider';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(ReduxProvider);

if (module.hot) {
  module.hot.accept('./components/ReduxProvider', () => {
    const newApp = require('./components/ReduxProvider').default;
    render(newApp);
  });
}
