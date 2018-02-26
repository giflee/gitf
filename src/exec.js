const shell = require("shelljs");

/** 
 *  @param
 *  @_origin
 *  @return {}
 *
 */
var execer = (_origin = origin, _branch, _message) => {

	if (!shell.which('git')) {
		shell.echo('找不到git命令')
		shell.exit(1);
	}

	try{
		shell.exec('git stash')
		shell.exec('git pull --rebase '+_origin+' '+_branch)
		shell.exec('git stash pop')
		shell.exec('git add --all')
		shell.exec('git commit -m '+_message)
		shell.exec('git push -u '+_origin+ ' '+ _branch)
		shell.echo('push success!')
	}catch(e){
		shell.echo(e)
	}
}

module.exports = execer;
