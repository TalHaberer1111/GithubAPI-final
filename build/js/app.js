(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "baf63b0862f709be303d3bd6c3ab542f49f811ab";

},{}],2:[function(require,module,exports){
var getRepos = function(response) {
  var i = 0;
  var arr = [];
  while (i < response.length) {
    arr.push((response[i]));
    i++;
  }
  return arr;
}

exports.ModuleOne = getRepos;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').ModuleOne;

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

    $('.results-box-two').pagination({
      totalPage: 10,
      callback: function(currentPage){

        $.get('https://api.github.com/users/' + username + '/repos?page=' + currentPage + '&per_page=30').then(function(response){
          $('.results-box').empty();
          getRepos(response).forEach(function(element){
            $('.results-box').append('<p><a href="https://github.com/' + username + '/' + element.name + '">' + element.name + '</a> - ' + moment(element.pushed_at).format('MMMM Do YYYY') + '</p>');
          });
        }).fail(function(error){
          console.log(error.responseJSON.message);
        });
      }
    });
  });
});

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
