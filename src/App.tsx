import { Router } from '@solidjs/router';

import { IndexPage } from './pages/Index';

export const App = () => {
  return (
    <Router>
      <IndexPage />
    </Router>
  );
};
