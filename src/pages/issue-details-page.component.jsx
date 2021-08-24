import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../redux/issues/issues.actions';
import IssuesList from '../components/issues-list/issues-list.component';

export class IssueDetailsPage extends Component {
    timerId;
    handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight } =
            document.documentElement;
        if(Math.round(scrollTop) + clientHeight >= scrollHeight - 400) {
            const { getIssues } = this.props;

            //Adding debouncing effect
            clearInterval(this.timerId);

            this.timerId = setTimeout(() => {
                getIssues();
            }, 1000)
        }
    };
    componentDidMount() {
        const { getIssues } = this.props;
        getIssues();
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const { issues } = this.props;
        const { isLoading } = issues;
        return (
            <div>
                {issues.currentPageIssues && (
                    <IssuesList
                        issues={issues.currentPageIssues}
                        isLoading={isLoading}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    issues: state.issues,
});

let pageCount = 1;

const mapDispatchToProps = (
    dispatch,
    {
        match: {
            params: { org, repo },
        },
    }
) => ({
    getIssues: () => dispatch(getIssues(org, repo, pageCount++)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetailsPage);
