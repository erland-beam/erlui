import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import { PlaygroundContextProvider } from './contexts/Playground';
import { App } from './App';

import 'uno.css';
import '@unocss/reset/tailwind.css';
import './styles/global.css';

render(
  () => (
    <Router>
      <PlaygroundContextProvider>
        <App />
      </PlaygroundContextProvider>
    </Router>
  ),
  document.getElementById('root')!
);
