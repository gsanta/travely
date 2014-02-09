
module.exports = function(grunt) {

    grunt.initConfig({

        // sass: {
        //     dist: {
        //         options: {
        //             style: 'compact'
        //         },
        //         files: {
        //             'build/css/main.css': 'app/scss/main.scss'
        //         }
        //     }
        // },

        compass: {
            dist: {
                options: {
                    sassDir: 'app/scss/',
                    cssDir: 'build/css'
                }
            }
        },

        /* 
           You would set this option to false for 
           production.
        */
        neuter: {
            options: {
                includeSourceURL: true
            },
            'build/js/application.js': 'app/js/app.js'
        },

        watch: {
            compass: {
                files: 'app/scss/*.scss',
                tasks: ['compass']
            },
            applicationCode: {
                files: ['app/js/**/*.js'],
                tasks: ['neuter']
            },
            handlebarsTemplates: {
                files: ['app/js/templates/**/*.hbs'],
                tasks: ['ember_templates', 'neuter']
            }
        },

        /* 
          Reads the projects .jshintrc file and applies coding
          standards. Doesn't lint the dependencies or test
          support files.
        */  
        jshint: {
            all: ['Gruntfile.js', 'app/js/**/*.js', 'tests/**/*.js', '!dependencies/*.*', '!test/support/*.*'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        /* 
          Finds Handlebars templates and precompiles them into functions.
          The provides two benefits:
        */
        ember_templates: {
            options: {
                templateName: function(sourceFile) {
                    return sourceFile.replace(/app\/js\/templates\//, '');
                }
            },
            'build/js/templates.js': ["app/js/templates/**/*.hbs"]
        }


    });
  
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-neuter');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-compass');
      
    /*
        A task to run the application's unit tests via the command line.
        It will
          - convert all the handlebars templates into compile functions
          - combine these files + application files in order
          - lint the result
          - build an html file with a script tag for each test file
          - headlessy load this page and print the test runner results
    */
    grunt.registerTask('test', ['compass', 'ember_templates', 'neuter', 'jshint']);

    /*
        Default task. Compiles templates, neuters application code, and begins
        watching for changes.
    */
    grunt.registerTask('default', ['compass', 'ember_templates', 'neuter', 'watch', 'jshint']);
};