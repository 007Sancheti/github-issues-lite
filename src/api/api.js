import axios from 'axios';

export function getIssues(org = 'rails', repo = 'rails', page = 1) {
    const url = `https://api.github.com/repos/${org}/${repo}/issues?per_page=25&page=${page}`;
    return axios
        .get(url)
        .then((res) => {
            return {
                data: res.data,
            };
        })
        .catch((err) => Promise.reject(err));
}
