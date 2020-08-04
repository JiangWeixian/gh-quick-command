import * as getGithubUsername from 'git-user-name'
import * as getRepoInfo from 'git-repo-info'
import * as getRepoName from 'git-repo-name'
const gitRemoteOriginUrl = require('git-remote-origin-url')

let username: string | null = ''
let info: ReturnType<typeof getRepoInfo> = {} as ReturnType<typeof getRepoInfo>
let reponame: string = ''
let url = ''

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

export const getRepoUrl = async () => {
  const regex = /git@github\.com:([\w\/-]+)\.git/
  try {
    url = await gitRemoteOriginUrl()
    const result = url.match(regex)
    url = result && result[1] || ''
  } catch (e) {
    // do nothing
  }
  return url
}
