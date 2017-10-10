import React, { Component } from 'react';
import './App.css';
import PatientListPage from './Page/PatientListPage';
import PatientFormPage from './Page/PatientFormPage';
import DiagnosticFormPage from './Page/DiagnosticFormPage';
import PatientViewPage from './Page/PatientViewPage';
import NavbarComponent from './Component/NavbarComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import Store from './Store';
import { Provider } from 'react-redux';

const store = Store();

store.subscribe(() => {
  console.log('state:',store.getState());
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavbarComponent />
            <div id="content">
              <Route exact path="/" component={PatientListPage} />
              <Route path="/patients/new" component={PatientFormPage} />
              <Route path="/patients/view/:_id" component={PatientViewPage} />
              <Route path="/patients/edit/:_id" component={PatientFormPage} />
              <Route path="/patients/:_id/diagnostics/new" component={DiagnosticFormPage} />
              <Route path="/patients/:_id/diagnostics/edit/:createdAt" component={DiagnosticFormPage} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
