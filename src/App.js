import IssueDetailsPage from './pages/issue-details-page.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';

function App() {
    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route path='/:org/:repo/issues' component={IssueDetailsPage} />
            </Switch>
        </div>
    );
}

export default App;
