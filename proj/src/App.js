import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import MenPage from "./Pages/MenPage";
import WomenPage from "./Pages/WomenPage"
function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
             <Route exact path='/' >
                <FirstPage/>
             </Route>
             <Route path='/Men'>
                <MenPage/>
             </Route>
             <Route path='/Women'>
                <WomenPage/>
             </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;