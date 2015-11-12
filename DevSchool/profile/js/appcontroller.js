//THis Module defines our application
var myApp = angular.module('MyApp',[]);
myApp.controller('myCtrl',function($scope)
{
//data can be received from http server, an array
//scope is the owner of all variables and functions in a given controller
$scope.phone = "0723 151591"; 
$scope.email = "wagavincent@gmail.com"; 
$scope.city = "Nairobi";
$scope.state = "Kenya"; 
});

myApp.controller('myCars',function($scope)
{
$scope.cars = [
{brand:"Toyota", model:"Vits", type:"Saloon", year:"2005"},
{brand:"Toyota", model:"Fielder", type:"Saloon", year:"2010"},
{brand:"Nissan", model:"Sunny", type:"Saloon", year:"2015"},
{brand:"Toyota", model:"Vits", type:"Saloon", year:"2014"},
{brand:"Mitsubishi", model:"Legacy",type:"Pick-Up", year:"2009"},
{brand:"Nissan", model:"Navara",type:"Double Cabin", year:"2002"}

];

});