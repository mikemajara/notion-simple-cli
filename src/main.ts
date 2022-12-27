import commander from 'commander';
import { readNosimcliConfig } from '../lib/read-config';
import { name, version } from '../package.json';
import { genClassFilesForConfig } from './generate';
import * as dotenv from 'dotenv';
dotenv.config();

const CONFIG_FILE_LOCATION = './nosimcli.config.json';
const DEFAULT_FILEPATH = '.';

const program = new commander.Command();

program
  .enablePositionalOptions()
  .option('-d, --debug', 'output extra debugging');

program
  .command('generate')
  .option('-c, --config <path>', 'config file (json)')
  .option('-o, --output <path>', 'output file')
  .option('-d, --debug', 'output extra debugging')
  .action((options) => {
    `reading config file from ${options.config ?? CONFIG_FILE_LOCATION}`;
    const config = readNosimcliConfig(options.config ?? CONFIG_FILE_LOCATION);

    options.debug && console.log(config);

    genClassFilesForConfig(config, options.output ?? DEFAULT_FILEPATH);
  });

program.name(name);

program.version(version);

program.parse();

console.log(`calling from ${process.cwd()}`);
