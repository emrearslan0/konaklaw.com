module.exports = function(grunt)
{
    grunt.initConfig({
        concat: {
            js: {
                src:['resources/js/*.js'],
                dest:'build/script.js'
            },
            css: {
                src:['resources/css/*.css'],
                dest:'build/style.css'
            }
        }, 
        less: {
            development: {
                options: {
                    paths: ['resources/css']
                  },
                files: {
                    'resources/css/main.css' : 'resources/less/*.less'
                }
            }
        },
        watch: {
            scripts: {
              files: ['**/*.js','**/*.less','index.html'],
              tasks: ['less','concat','copy'],
              options: {
                spawn: false,
              },
            },
        },
        clean: {
            folder: ['build']
        },
        copy: {
            main: {
              files: [
                {expand: false, src: ['resources/image/*'], dest: 'build/'},
              ],
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'build/style.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

   
    //NPMTASK
    grunt.loadNpmTasks('grunt-contrib-concat'); //klasörleme
    grunt.loadNpmTasks('grunt-contrib-less'); //less to css
    grunt.loadNpmTasks('grunt-contrib-watch'); //değişiklik isteme
    grunt.loadNpmTasks('grunt-contrib-clean'); //silme
    grunt.loadNpmTasks('grunt-contrib-copy'); //kopyalama

    grunt.registerTask('default', ['watch']); //default
}
