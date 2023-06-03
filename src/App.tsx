import { Routes, Route } from '@solidjs/router';

import { IndexPage } from './pages/Index';
import { PlaygroundPage } from './pages/Playground';

export const App = () => {
  return (
    <Routes>
      <Route path='/erlui' component={IndexPage} />
      <Route path='/erlui/playground' component={PlaygroundPage} />
    </Routes>
  );
};
