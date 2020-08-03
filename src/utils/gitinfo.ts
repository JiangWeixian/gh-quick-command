import * as getGithubUsername from 'git-user-name'
import * as getRepoInfo from 'git-repo-info'
import * as getRepoName from 'git-repo-name'

let username: string | null = ''
let info: ReturnType<typeof getRepoInfo> = {} as ReturnType<typeof getRepoInfo>
let reponame: string = ''

export const getGitInfo = () => {
  try {
    username = getGithubUsername()
    info = getRepoInfo()
    reponame = getRepoName.sync()
  } catch(e) {
    // ignore and donothing
  }
  return {
    username,
    info,
    reponame
  }
}

export const getUsename = () => {
  try {
    username = getGithubUsername()
  } catch(e) {
    // ignore and donothing
  }
  return username
}

console.log(getGitInfo())
