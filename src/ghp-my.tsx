import * as program from 'commander'
import { exec } from 'child_process'

import logger from './utils/logger'
import { ORIGIN } from './utils/constants'
import { getUsename } from './utils/gitinfo'

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
const maps = {
  'stars': `${ORIGIN.home}/${getUsename()}?tab=stars`,
  'repos': `${ORIGIN.home}/${getUsename()}?tab=repositories`,
}

const run = () => {
  if (!getUsename()) {
    logger.fatal(`🐈 github username not found!`)
  }
  if (!tabname || !maps[tabname]) {
    logger.fatal(`🐈 wrooong input!`)
  }
  if (!getUsename() || !maps[tabname]) {
    process.exit(1)
  }
  exec(`open ${maps[tabname]}`, (err) => {
    if (err) {
      logger.fatal(`failed open ${maps[tabname]}`)
    }
  })
}

run()
