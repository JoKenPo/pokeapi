import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Details } from './pages/Details';

// import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list/offset=:offset" component={List}></Route>
          <Route path="/details/:pokemon" component={Details}></Route>
        </Switch>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
