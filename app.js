//sets parameters on the functionality of javascript.'use strict';
// declares an array containing the hours of the day.var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
//declares a variable called cookie table, links to htmlvar cookieTable = document.getElementById('CookieSales');

//function that makes header rowfunction makeHeaderRow () {
//creates table row  var headerRow = document.createElement('tr');
//  var headerCell = document.createElement('th');
// puts a space in the header cell  headerCell.textContent = '';
// appends header cell to header row  headerRow.appendChild(headerCell);
//declares header cell variable, creates table head  var headerCell = document.createElement('th');
// fills header cell with DLT  headerCell.textContent = 'Daily Location Total';
//appends header cell to header row  headerRow.appendChild(headerCell);
// loops through hours array  for(var i = 0; i < hours.length; i++) {
//  creates a var named header cell and assigns a created element named th var headerCell = document.createElement('th');
// loops through hours array and logs that data to headerCell    headerCell.textContent = hours[i];
// appends header cell to header row    headerRow.appendChild(headerCell);
  }
//apppends header row to cookie table  cookieTable.appendChild(headerRow);
}

// invokes make header row function makeHeaderRow();

// constructor function CookieStand (storeLocation, minimumCustomers, maximumCustomers, averageCookies, totalDailyCookieSales) {
//property  this.storeLocation = storeLocation;
//creates array shell for hourly customers  this.hourlyCustomersArray = [];
//creates array shell for hourly purchases  this.hourlyPurchasesArray = [];
//property  this.minimumCustomers = minimumCustomers;
//property  this.maximumCustomers = maximumCustomers;
//property  this.averageCookies = averageCookies;
  // propertythis.totalDailyCookieSales = totalDailyCookieSales;
//method that finds hourly customers   this.getHourlyCustomers = function () {
//loops through hours    for (var i = 0; i < hours.length; i++) {
    // method  var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
  //pushes customers    this.hourlyCustomersArray.push(customers);
    }
  };
  this.getHourlyPurchases = function () {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      this.hourlyPurchasesArray.push(purchases);
      firstAndPike.totalDailyCookieSales += purchases;
    }
  };
  this.render = function() {
    this.getHourlyCustomers();
    this.getHourlyPurchases();
    var headerRow = document.createElement('tr');
    var headerCell = document.createElement('th');
    headerCell.textContent = this.storeLocation;
    headerRow.appendChild(headerCell);
    var headerCell = document.createElement('th');
    headerCell.textContent = this.totalDailyCookieSales;
    headerRow.appendChild(headerCell);
    for(var i = 0; i < hours.length; i++) {
      var headerCell = document.createElement('th');
      headerCell.textContent = this.hourlyPurchasesArray[i];
      headerRow.appendChild(headerCell);
    }
    cookieTable.appendChild(headerRow);
  };
}
var firstAndPike = new CookieStand ('First And Pike', 23, 65, 6.3, 0);
var seaTacAirport = new CookieStand ('SeaTac Airport', 3, 24, 1.2, 0);
var seattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7, 0);
var capitolHill = new CookieStand ('Capitol Hill', 20, 38, 2.3, 0);
var alki = new CookieStand ('Alki', 2, 16, 4.6, 0);

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
