
'use strict';
var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var cookieTable = document.getElementById('CookieSales');

function makeHeaderRow () {
  var headerRow = document.createElement('tr');
  var headerCell = document.createElement('th');
  headerCell.textContent = '';
  headerRow.appendChild(headerCell);
  var headerCell = document.createElement('th');
  headerCell.textContent = 'Daily Location Total';
  headerRow.appendChild(headerCell);
  for(var i = 0; i < hours.length; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    headerRow.appendChild(headerCell);
  }
  cookieTable.appendChild(headerRow);
}

makeHeaderRow();

function CookieStand (storeLocation, minimumCustomers, maximumCustomers, averageCookies, totalDailyCookieSales) {
  this.storeLocation = storeLocation;
  this.hourlyCustomersArray = [];
  this.hourlyPurchasesArray = [];
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookies = averageCookies;
  this.totalDailyCookieSales = totalDailyCookieSales;
  this.getHourlyCustomers = function () {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      this.hourlyCustomersArray.push(customers);
    }
  };
  this.getHourlyPurchases = function () {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      this.hourlyPurchasesArray.push(purchases);
      firstAndPike.totalDailyCookieSales += purchases;
      seaTacAirport.totalDailyCookieSales += purchases;
      seattleCenter.totalDailyCookieSales += purchases;
      capitolHill.totalDailyCookieSales += purchases;
      alki.totalDailyCookieSales += purchases;
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
