import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getIssues } from '../redux/issues/issues.actions';
import IssuesList from '../components/issues-list/issues-list.component';

export class IssueDetailsPage extends Component {
    
    componentDidMount() {
        const {issues, getIssues} = this.props;
        getIssues();
        console.log(issues);
    }
    render() {
        const {issues} = this.props;
        return (
            <div>
                {
                    issues.currentPageIssues && <IssuesList issues={issues.currentPageIssues} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    issues: state.issues
})

const mapDispatchToProps = (dispatch, {match: {params: {org, repo}}}) => ({
    getIssues: () => dispatch(getIssues(org, repo, 1))
})

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetailsPage)
