import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Saidebar from "./components/saidebar/saidebar";
import Content from "./components/content/content";
import Dialogs from "./components/dialogs/dialogs";
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Saidebar />
      <div className="app-wrapper-content">
        {/* <Content />  */}
        <Dialogs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
