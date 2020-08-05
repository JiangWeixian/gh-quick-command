import * as program from 'commander'
import { exec } from 'child_process'

import logger from './utils/logger'
import { ORIGIN } from './utils/constants'
import { getGitInfo, getRepoUrl } from './utils/gitinfo'

/**
 * Usage.
 */

program.usage('new')

/**
 * Padding.
 */

process.on('exit', () => {})

program.parse(process.argv)
type Commands = 'repo' | 'token' | 'pr'
let type = program.args && program.args[0] as Commands

const commander = (type: Commands) => {
  switch (type) {
    case 'repo':
      return `${ORIGIN.home}/new`
    case 'token':
      return `${ORIGIN.setting}/tokens/new`
    case 'pr':
      return `${ORIGIN.home}/${getRepoUrl()}/compare/${getGitInfo().info.branch}?expand=1`
    default:
      return `${ORIGIN.home}/new`
  }
}

const run = () => {
  const command = commander(type)
  exec(`open ${command}`, (err) => {
    if (err) {
      logger.fatal(`failed open ${command}`)
    }
  })
}

run()
