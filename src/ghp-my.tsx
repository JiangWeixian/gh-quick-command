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
type Commands = 'stars' | 'repos'
let type = program.args && program.args[0] as Commands


const commander = (type: Commands) => {
  const name = getUsename()
  switch (type) {
    case 'stars':
      return `${ORIGIN.home}/${name}?tab=stars`
    case 'repos':
      return `${ORIGIN.home}/${getUsename()}?tab=repositories`
    default:
      return `${ORIGIN.home}/${getUsename()}?tab=repositories`
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
