(function($) {
    $(document).on('click', '#reports', function(e) {
        e.preventDefault();

        var prJSON = require('bitbucket/internal/model/page-state').getPullRequest().toJSON();
        console.log(prJSON);
        return "<h1>Reports</h1>"
    })
}(AJS.$));
AJS.$(document).ready(function(){
  console.log("test-task.js is exist")
})

