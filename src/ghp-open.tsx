import * as program from 'commander'
import { exec } from 'child_process'

import logger from './utils/logger'
import { ORIGIN } from './utils/constants'
import { getGitInfo, getRepoUrl } from './utils/gitinfo'

type Commands = 'repo' | undefined

/**
 * Usage.
 */

program.usage('open')

/**
 * Padding.
 */

process.on('exit', () => {})

program.parse(process.argv)
let typename = program.args && program.args[0] as Commands

const commander = async (type: Commands) => {
  switch (type) {
    case 'repo':
    default:
      const repoUrl = await getRepoUrl()
      return `${ORIGIN.home}/${repoUrl}/tree/${getGitInfo().info.branch}`
  }
}

const run = async () => {
  const command = await commander(typename)
  exec(`open ${command}`, (err) => {
    if (err) {
      logger.fatal(`🐈 failed open ${command}`)
    }
  })
  process.exit(1)
}

run()
