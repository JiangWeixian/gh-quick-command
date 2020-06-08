import * as program from 'commander'
import { exec } from 'child_process'
import * as getGithubUsername from 'git-user-name'
import * as getRepoInfo from 'git-repo-info'
import * as getRepoName from 'git-repo-name'

import logger from './utils/logger'
import { ORIGIN } from './utils/constants'

/**
 * Usage.
 */

program.usage('open')

/**
 * Padding.
 */

process.on('exit', () => {})

program.parse(process.argv)
let typename = program.args && program.args[0]
const username = getGithubUsername()
const info = getRepoInfo()
const repo = getRepoName.sync()
const maps = {
  'repo': `${ORIGIN.home}/${username}/${repo}/tree/${info.branch}`
}

const run = () => {
  if (!typename) {
    exec(`open ${maps.repo}`, (err) => {
      if (err) {
        logger.fatal(`failed open ${maps.repo}`)
      }
    })
    process.exit(1)
  }
  if (!maps[typename]) {
    logger.fatal(`🐈 wrooong input!`)
    process.exit(1)
  }
  exec(`open ${maps[typename]}`, (err) => {
    if (err) {
      logger.fatal(`failed open ${maps[typename]}`)
    }
  })
}

run()
