module.exports = function(karma) {
  karma.set({
  
    files: [
      "build/application.js", //built by your grunt task
      "tests/*.js"
    ],
     
    logLevel: karma.LOG_ERROR,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
      
    frameworks: ["qunit"]
  });
};