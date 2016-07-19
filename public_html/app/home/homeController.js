'use strict';

var app = angular.module('app', []);

app.controller('HomeController', function ($scope) {

    $scope.n = 0;

    $scope.pwvalidate = "";

    $scope.updateValidation = function () {
        numberOfCharacters();
        upperCaseLetters();
        lowerCaseLetters();
    };

    //Additions
    function numberOfCharacters() {
        $scope.n = ($scope.pwvalidate.length * 4);
    }
    ;

    function upperCaseLetters() {
        $scope.n = (($scope.pwvalidate.length - countUpperCaseChars($scope.pwvalidate)) * 2);
    };
    function lowerCaseLetters() {
        $scope.n = (($scope.pwvalidate.length - countLowerCaseChars($scope.pwvalidate)) * 2);
    };
    function numbers(){
        $scope.n = (countNumbers($scope.pwvalidate) * 4);
    };
    



    // Reused
    function countUpperCaseChars(str) {
        return str.length - str.replace(/[A-Z]/g, '').length;
    };
    function countLowerCaseChars(str) {
        return str.length - str.replace(/[a-z]/g, '').length;
    };
    function countNumbers(str){
        return str.replace(/[^0-9]/g,"").length;
    };
});
