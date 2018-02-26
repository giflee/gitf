#!/usr/bin/env node
const argv = require('yargs')
const exec = require('./exec')

argv.usage('Usage: gitf [origin] [branch] [commit info]')
.example('gitf origin dev3.18')
.help('h')

if (process.argv[1] && process.argv[2] && process.argv[3]) {
	exec(process.argv[1], process.argv[2], process.argv[3])
}

