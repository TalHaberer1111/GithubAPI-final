var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('.search-btn').click(function() {
    $('.results-box').empty();
    var username = $('#user-name').val();
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      getRepos(response).forEach(function(element){
        console.log(element.name);
        $('.results-box').append('<p><a href="https://github.com/' + username + '/' + element.name + '">' + element.name + '</a> - ' + moment(element.pushed_at).format('MMMM Do YYYY') + '</p>');
      });
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
