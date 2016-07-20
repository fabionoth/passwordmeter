'use strict';

var app = angular.module('app', []);

app.controller('HomeController', function ($scope) {

    $scope.n = 0;
    $scope.pwvalidate = "";

    $scope.updateValidation = function () {
        console.clear();
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
        lettersOnly();
        numbersOnly();
        repeatCharacters();
        consecutiveLowercaseLetters();
        consecutiveUppercaseLetters();
        consecutiveNumber();
        sequencialNumbers();
        sequencialLetters();
    };

    //Additions
    function numberOfCharacters() {
        $scope.n += ($scope.pwvalidate.length * 4);
        console.log("numberOfCharacters()= " + $scope.n);
    }
    ;

    function upperCaseLetters() {
        if (countUpperCaseChars($scope.pwvalidate) > 0) {
            $scope.n += (($scope.pwvalidate.length - countUpperCaseChars($scope.pwvalidate)) * 2);
            console.log("upperCaseLetters()= " + $scope.n);
        }
    }
    ;
    function lowerCaseLetters() {
        if (countLowerCaseChars($scope.pwvalidate) > 0) {
            $scope.n += (($scope.pwvalidate.length - countLowerCaseChars($scope.pwvalidate)) * 2);
            console.log("lowerCaseLetters()= " + $scope.n);
        }
    }
    ;
    function numbers() {
        $scope.n += (countNumbers($scope.pwvalidate) * 4);
        console.log("numbers()= " + $scope.n);
    }
    ;
    function symbols() {
        $scope.n += (countSymbols($scope.pwvalidate) * 2);
        console.log("symbols()= " + $scope.n);
    }
    ;
    function middleNumbersOrSymbols() {
        if ($scope.pwvalidate.length > 4) {
            var str = $scope.pwvalidate.substring(2, $scope.pwvalidate.length - 1);
            $scope.n += (countNumbers(str) + countSymbols(str)) * 2;
        }
        ;
        console.log("middleNumbersOrSymbols()= " + $scope.n);
    }
    ;
    function requirements() {
        var count = 0;
        var str = $scope.pwvalidate;
        var sumAll = (countLowerCaseChars(str) + countUpperCaseChars(str) + countNumbers(str) + countSymbols(str));

        if (sumAll > str.length * 0.75) {
            count = sumAll;
        }
        ;
        $scope.n += (count * 2);
        console.log("requirements()= " + $scope.n);
    }
    ;

    //Deductions
    function lettersOnly() {
        var str = $scope.pwvalidate;
        var sum = countNumbers(str) + countSymbols(str);
        if (sum === 0 || sum === undefined || sum === null) {
            $scope.n += (str.length * -1);
        }
        console.log("lettersOnly()= " + $scope.n);
    }
    ;

    function numbersOnly() {
        var str = $scope.pwvalidate;
        var sum = countLowerCaseChars(str) + countUpperCaseChars(str) + countSymbols(str);
        if (sum === 0 || sum === undefined || sum === null) {
            $scope.n += (str.length * -1);
        }
        console.log("numbersOnly()= " + $scope.n);
    }
    ;

    function repeatCharacters() {
        var str = $scope.pwvalidate;
        var duplicate = str.replace(/(.)(?=.*\1)/g, "");
        var sum = (str.length - duplicate.length) * 2;
        $scope.n += (sum * -1);
        console.log("repeatCharacters()= " + $scope.n);
    }
    ;

    function consecutiveLowercaseLetters() {
        var str = $scope.pwvalidate;
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (/[a-z]/.test(str.charAt(i))) {
                count++;
            }
        }
        $scope.n += (count === 0 ? 0 : ((count - 1) * 2) * -1);
        console.log("consecutiveLowercaseLetters()= " + $scope.n);
    }
    ;

    function consecutiveUppercaseLetters() {
        var str = $scope.pwvalidate;
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (/[A-Z]/.test(str.charAt(i))) {
                count++;
            }
        }
        $scope.n += (count === 0 ? 0 : ((count - 1) * 2) * -1);
        console.log("consecutiveUppercaseLetters()= " + $scope.n);
    }
    ;

    function consecutiveNumber() {
        var str = $scope.pwvalidate;
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (/[1-9]/.test(str.charAt(i))) {
                count++;
            }
        }
        $scope.n += (count === 0 ? 0 : ((count - 1) * 2) * -1);
        console.log("consecutiveNumber()= " + $scope.n);
    }
    ;

    function sequencialNumbers() {
        var sum = 0;
        var s = $scope.pwvalidate;
        for (var i in s) {
            if (+s[+i + 1] === +s[i] + 1 && +s[+i + 2] === +s[i] + 2) {
                sum++;
            }
        }
        console.log("sequencialNumbers() = " + sum);
    }
    ;
    function sequencialLetters() {
        var sum = 0;
        var s = $scope.pwvalidate;
        if (countNumbers(s) < s.length) {
            for (var i in s) {
                if (String.fromCharCode(s.charCodeAt(i) + 1) === s[+i + 1] &&
                        String.fromCharCode(s.charCodeAt(i) + 2) === s[+i + 2]) {
                    sum++;
                }
            }
        }
        console.log("sequencialLetters() = " + sum);
    }
    ;






    // Reused
    function countUpperCaseChars(str) {
        return str.length - str.replace(/[A-Z]/g, '').length;
    }
    ;
    function countLowerCaseChars(str) {
        return str.length - str.replace(/[a-z]/g, '').length;
    }
    ;
    function countNumbers(str) {
        return str.replace(/[^0-9]/g, "").length;
    }
    ;
    function countSymbols(str) {
        return ((str.match(/,/g) || []).length);
    }
    ;


});
