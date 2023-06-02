import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import { App } from './App';

import 'uno.css';
import '@unocss/reset/tailwind.css';
import './styles/global.css';
import './styles/styles.css';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')!
);
