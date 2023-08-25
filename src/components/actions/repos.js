import axios from 'axios'
import { setIsFetching, setRepos } from "../../reducers/reposReducer"

export const getRepos = (searchQuery) => {
	console.log("1", searchQuery)
	if (!searchQuery) {
		console.log("2", searchQuery)
		searchQuery = "stars:>1"
	}
	return async (dispatch) => {
		dispatch(setIsFetching(true))
		console.log("3", searchQuery)
		const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
		console.log(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
		dispatch(setRepos(response.data))
	}
}

export const getCurrentRepo = async (username, repoName, setRepo) => {
	const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
	setRepo(response.data)
}

export const getCotributors = async (username, repoName, setContributors) => {
	const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
	setContributors(response.data)
}