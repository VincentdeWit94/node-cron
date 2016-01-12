#!/usr/bin/env node
"use strict"
/* ************************************************************************
 
    Licence : LGPLv3
    Version: 0.0.1
    Authors: Vincent de Wit
    Date: 2016-01-13
    Date of last modification: 2015-12-09
    Description: NodeJS Cronjob runner
 
************************************************************************ */
var exec = require('child_process').exec;
var program = require('commander');

program
  .version('0.0.1')
  .option('-c, --command <command>', 'Cron command to run')
  .option('-i, --interval <interval>', 'Interval in seconds')
  .option('-d, --debug', 'Show some more information')
  .parse(process.argv);
  
  console.log(program.command);
if(!program.interval) program.interval = 2000;
   
if(program.command){
	setInterval(function(){
		exec(program.command, function(error, stdout, stderr) { 
			if(error) console.log("Something went wrong while running your command...");
			if(error) console.log(error);
			
			if(stderr) console.log("Something went wrong while running your command...");
			if(stderr) console.log(stderr);
			
			if(stdout && !error) console.log("Succesfully runned your command...");
			if(stdout && !error) console.log(stdout);		
		});
	}, program.interval*1000);
}
else{
	console.log("Nothing to do!");
}
