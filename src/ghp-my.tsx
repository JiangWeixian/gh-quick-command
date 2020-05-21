import * as program from 'commander'
import * as getGithubUsername from 'git-user-name'
import { exec } from 'child_process'

import logger from './utils/logger'


/**
 * Usage.
 */

program.usage('my [stars | repos]')

/**
 * Padding.
 */

process.on('exit', () => {})

program.parse(process.argv)
let tabname = program.args && program.args[0]
const url = 'https://github.com'
const username = getGithubUsername()
const maps = {
  'stars': 'stars',
  'repos': 'repositories',
}

const run = () => {
  if (!username) {
    logger.fatal(`🐈 github username not found!`)
  }
  if (!tabname || !maps[tabname]) {
    logger.fatal(`🐈 wrooong input!`)
  }
  if (!username || !maps[tabname]) {
    process.exit(1)
  }
  exec(`open ${url}/${username}?tab=${maps[tabname]}`, (err) => {
    if (err) {
      logger.fatal(`failed open ${url}/${username}?tab=${maps[tabname]}`)
    }
  })
}

run()
