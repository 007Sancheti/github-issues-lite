import IssueDetailsPage from './pages/issue-details-page.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import NotFound from './components/not-found/not-found.component.jsx';
import './App.css'

function App() {
    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route path='/:org/:repo/issues' component={IssueDetailsPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
