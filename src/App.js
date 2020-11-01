import './App.css';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Flux/store';
import Document from './Component/Document';
import { Container } from 'reactstrap';
import { ITEMS } from './Items';
import DocumentView from './Component/DocumentView';

const App = () => {
  return (
    <Provider store={store}>
      <Sidebar items={ITEMS} />
      <Container>
      <Switch>
        <Route path='/document' component={ Document } />
        <Route path='/document:id' render={props => <DocumentView {...props} />} />
      </Switch>
      </Container>
    </Provider>
  );
}

export default App;
