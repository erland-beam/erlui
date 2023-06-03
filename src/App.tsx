import { Routes, Route } from '@solidjs/router';

import { IndexPage } from './pages/Index';
import { PlaygroundPage } from './pages/Playground';

export const App = () => {
  return (
    <Routes>
      <Route path='/' component={IndexPage} />
      <Route path='/playground' component={PlaygroundPage} />
    </Routes>
  );
};
