import * as program from 'commander'
import { exec } from 'child_process'

import logger from './utils/logger'


/**
 * Usage.
 */

program.usage('new')

/**
 * Padding.
 */

process.on('exit', () => {})

program.parse(process.argv)
let typename = program.args && program.args[0]
const url = 'https://github.com'
const maps = {
  'repo': `${url}/new`,
}

const run = () => {
  if (!typename) {
    exec(`open ${maps['repos']}`, (err) => {
      if (err) {
        logger.fatal(`failed open ${maps['repos']}`)
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
