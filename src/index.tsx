import { render } from 'solid-js/web';

import { App } from './App';

import 'uno.css';
import '@unocss/reset/tailwind.css';
import './styles/global.css';

render(() => <App />, document.getElementById('root')!);
