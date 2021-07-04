import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";

// import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
