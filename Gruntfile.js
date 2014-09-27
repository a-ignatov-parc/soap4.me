var gruntConfig = {
		pkg: require('./package.json'),
		srcDir: '<%= pkg.config.srcDir %>',
		buildDir: '<%= pkg.config.buildDir %>',
		stylesDir: '<%= pkg.config.stylesDir %>',
		packagesDir: '<%= pkg.config.packagesDir %>',
		watch: {
			css: {
				files: '<%= stylesDir %>/**/*.styl',
				tasks: ['stylus:dev']
			}
		},
		jshint: {
			grunt: {
				src: 'Gruntfile.js',
				options: {
					jshintrc: '.jshintrc'
				}
			},
			src: {
				src: '<%= srcDir %>/**/*.js',
				options: {
					jshintrc: '<%= srcDir %>/.jshintrc'
				}
			}
		},
		stylus: {
			options: {
				compress: false,
				'include css': true
			},
			dev: {
				files: {
					'<%= buildDir %>/app.css': '<%= stylesDir %>/main.styl'
				}
			}
		}
	};

module.exports = function(grunt) {
	// Инициализируем конфиг
	grunt.initConfig(gruntConfig);

	// Подключаем таски
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	// Регистрируем таски
	grunt.registerTask('default', 'watch');
	grunt.registerTask('build', ['jshint', 'stylus']);
};
