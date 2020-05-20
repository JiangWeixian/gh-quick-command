import * as program from 'commander'

program
  .version(require('../package.json').version)
  .usage('<command> [options]')
  .command(
    'my',
    'ghp my <stars | repos>, ghp my stars will open github my star page',
  )

program.parse(process.argv)
