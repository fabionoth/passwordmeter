'use strict';

var app = angular.module('app', []);

app.controller('HomeController', function ($scope) {

    

    $scope.pwvalidate = "";

    $scope.updateValidation = function () {
        $scope.n = 0;
        //Additions
        numberOfCharacters();
        upperCaseLetters();
        lowerCaseLetters();
        numbers();
        symbols();
        middleNumbersOrSymbols();
        requirements();
        //Deductions
        
    };

    //Additions
    function numberOfCharacters() {
        $scope.n += ($scope.pwvalidate.length * 4);
        console.log("numberOfCharacters()= " + $scope.n);
    };

    function upperCaseLetters() {
        $scope.n += (($scope.pwvalidate.length - countUpperCaseChars($scope.pwvalidate)) * 2);
        console.log("upperCaseLetters()= " + $scope.n);
    };
    function lowerCaseLetters() {
        $scope.n += (($scope.pwvalidate.length - countLowerCaseChars($scope.pwvalidate)) * 2);
        console.log("lowerCaseLetters()= " + $scope.n);
    };
    function numbers(){
        $scope.n += (countNumbers($scope.pwvalidate) * 4);
        console.log("numbers()= " + $scope.n);
    };
    function symbols() {
        $scope.n += (countSymbols($scope.pwvalidate) * 2);
        console.log("symbols()= " + $scope.n);
    };
    function middleNumbersOrSymbols(){
        if($scope.pwvalidate.length > 4){
            var str = $scope.pwvalidate.substring(2, $scope.pwvalidate.length-1);
            $scope.n +=  (countNumbers(str) + countSymbols(str)) * 2;
        };
        console.log("middleNumbersOrSymbols()= " + $scope.n);
    };
    function requirements(){
        var count = 0;
        var str = $scope.pwvalidate;
        var sumAll = (countLowerCaseChars(str) + countUpperCaseChars(str) + countNumbers(str) + countSymbols(str));
        
        if (str > 7){ count + 1 };
        if (sumAll > str.length * 0.75){
            count = sumAll;
        };
        $scope.n += (count * 2);
        console.log("requirements()= " + $scope.n);
    };

    //Deductions
    function lettersOnly(){
        
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
    function countSymbols(str){
       return ((str.match(/,/g) || []).length);
    };
    
    
});
