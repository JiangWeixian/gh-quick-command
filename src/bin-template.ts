import * as program from 'commander'

program
  .version(require('../package.json').version)
  .usage('<command> [options]')
  .command(
    'create',
    'neo <template-name> [project-name], generate a new project from a neo template',
  )
  .command('list', 'list all templates')

program.parse(process.argv)
