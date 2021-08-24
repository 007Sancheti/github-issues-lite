import IssueDetailsPage from "./pages/issue-details-page.component";
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:org/:repo/issues" component={IssueDetailsPage}/>
      </Switch>
    </div>
  );
}

export default App;
