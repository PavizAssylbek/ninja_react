import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Saidebar from "./components/saidebar/saidebar";
import Content from "./components/content/content";
import Dialogs from "./components/dialogs/dialogs";
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Switch>
        <div className="app-wrapper">
          <Header />
          <Saidebar />
          <div className="app-wrapper-content">
              <Route path="/content" component={Content} />
              <Route path="/dialogs" component={Dialogs} />
          </div>
          <Footer />
        </div>
     </Switch>
  );
}

export default App;
