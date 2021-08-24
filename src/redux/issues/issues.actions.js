import * as API from '../../api/api';
import IssuesActionTypes from './issues.types';

export const getIssuesBegin = () => ({
    type: IssuesActionTypes.GET_ISSUES_START,
});

export const getIssuesSuccess = (issueResponse) => ({
    type: IssuesActionTypes.GET_ISSUES_SUCCESS,
    payload: {
        issues: issueResponse.data,
        loading: false,
    },
});

export const getIssuesFailure = (error) => ({
    type: IssuesActionTypes.GET_ISSUES_FAILURE,
    error,
});

export const getIssues = (org, repo, page) => {
    return (dispatch) => {
        dispatch(getIssuesBegin());
        API.getIssues(org, repo, page)
            .then((res) => dispatch(getIssuesSuccess(res)))
            .catch((error) => dispatch(getIssuesFailure(error)));
    };
};
