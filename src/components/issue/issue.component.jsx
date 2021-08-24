import React from 'react';
import { Link } from 'react-router-dom';
import UserWithAvatar from '../user-with-avatar/user-with-avatar.component';
import IssueLabels from '../issue-labels/issue-labels.component';
import { withRouter } from 'react-router';
import './issue.scss';

const Issue = ({
    number,
    title,
    labels,
    user,
    summary,
    match: {
        params: { org, repo },
    },
}) => {
    return (
        <div className='issue'>
            <UserWithAvatar user={user} />
            <div className='issue__body'>
                <Link to={`/${org}/${repo}/issues/${number}`}>
                    <span className='issue__number'>#{number}</span>
                    <span className='issue__title'>{title}</span>
                </Link>
                <p className='issue__summary'>{summary}</p>
                <IssueLabels labels={labels} />
            </div>
        </div>
    );
};

export default withRouter(Issue);
