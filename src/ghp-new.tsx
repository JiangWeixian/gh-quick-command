import * as program from 'commander'
import { exec } from 'child_process'

import logger from './utils/logger'
import { ORIGIN } from './utils/constants'


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
const maps = {
  'repo': `${ORIGIN.home}/new`,
  'token': `${ORIGIN.home}/tokens/new`
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
