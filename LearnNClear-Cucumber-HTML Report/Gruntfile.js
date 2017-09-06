 //pkg: grunt.file.readJSON('package.json'),
 
module.exports = function(grunt) {
  grunt.initConfig({
	   protractor: {
		  options: {
			configFile: "protractor.conf.js",
			keepAlive: true,
			noColor: false
		  },
		  run_cucumber: {
			options: {
			  configFile: "protractor.conf.js",
			  keepAlive: true
			}
		  }
    },
    execute: {
		htmlReport: {
			  options: { 
						cwd: '.'
					},
					src: ['test-cucumber-html-reporter.js']
				}
	}

});

grunt.loadNpmTasks('grunt-protractor-runner');
grunt.loadNpmTasks('grunt-execute');

grunt.registerTask('default', ['protractor:run_cucumber','execute:htmlReport']);
grunt.registerTask('run_cucumber_pob', ['protractor:run_cucumber','execute:htmlReport']);
};
