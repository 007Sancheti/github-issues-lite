import React, { Component } from 'react'
import Issue from '../issue/issue.component'
import './issues-list.scss'

export class IssuesList extends Component {
    
    render() {
        const {issues} = this.props;
        return (
            <ul className="issues">
            {issues.map(issue =>
              <li key={issue.id}>
                  <Issue
                    number={issue.number}
                    user={issue.user}
                    title={issue.title}
                    summary={issue.body}
                    labels={issue.labels} />
              </li>
            )}
          </ul>
        )
    }
}

export default IssuesList;
