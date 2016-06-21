var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: 6.3,
  totalDailyCookieSales: 0,
  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      this.hourlyCustomersArray.push(customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      this.hourlyPurchasesArray.push(purchases);
      firstAndPike.totalDailyCookieSales += purchases;
    }
  },
  hourlyCustomersArray : [],
  hourlyPurchasesArray : []
};
firstAndPike.hourlyCustomers();
firstAndPike.hourlyPurchases();
var customerList =  document.getElementById('firstAndPike_Customers');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + firstAndPike.hourlyCustomersArray[i];
  listItem.textContent = listContent;
  customerList.appendChild(listItem);
}
var customerList2 = document.getElementById('firstAndPike_Purchases');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + firstAndPike.hourlyPurchasesArray[i];
  listItem.textContent = listContent;
  customerList2.appendChild(listItem);
}
var totalPurchasesListItem = document.createElement('li');
totalPurchasesListItem.textContent = 'Total Purchases: ' + firstAndPike.totalDailyCookieSales;
customerList2.appendChild(totalPurchasesListItem);

var seaTacAirport = {
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookies: 1.2,
  totalDailyCookieSales: 0,
  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      this.hourlyCustomersArray.push(customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      this.hourlyPurchasesArray.push(purchases);
      seaTacAirport.totalDailyCookieSales += purchases;
    }
  },
  hourlyCustomersArray : [],
  hourlyPurchasesArray : []
};
seaTacAirport.hourlyCustomers();
seaTacAirport.hourlyPurchases();
var customerList =  document.getElementById('seaTacAirport_Customers');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + seaTacAirport.hourlyCustomersArray[i];
  listItem.textContent = listContent;
  customerList.appendChild(listItem);
}
var customerList2 = document.getElementById('seaTacAirport_Purchases');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + seaTacAirport.hourlyPurchasesArray[i];
  listItem.textContent = listContent;
  customerList2.appendChild(listItem);
}
var totalPurchasesListItem = document.createElement('li');
totalPurchasesListItem.textContent = 'Total Purchases: ' + seaTacAirport.totalDailyCookieSales;
customerList2.appendChild(totalPurchasesListItem);
var seattleCenter = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookies: 3.7,
  totalDailyCookieSales: 0,
  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      this.hourlyCustomersArray.push(customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      this.hourlyPurchasesArray.push(purchases);
      seattleCenter.totalDailyCookieSales += purchases;
    }
  },
  hourlyCustomersArray : [],
  hourlyPurchasesArray : []
};
seattleCenter.hourlyCustomers();
seattleCenter.hourlyPurchases();
var customerList =  document.getElementById('seattleCenter_Customers');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + seattleCenter.hourlyCustomersArray[i];
  listItem.textContent = listContent;
  customerList.appendChild(listItem);
}
var customerList2 = document.getElementById('seattleCenter_Purchases');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + seattleCenter.hourlyPurchasesArray[i];
  listItem.textContent = listContent;
  customerList2.appendChild(listItem);
};
var totalPurchasesListItem = document.createElement('li');
totalPurchasesListItem.textContent = 'Total Purchases: ' + seattleCenter.totalDailyCookieSales;
customerList2.appendChild(totalPurchasesListItem);
var capitolHill = {
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookies: 2.3,
  totalDailyCookieSales: 0,
  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      this.hourlyCustomersArray.push(customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      console.log(hours[i], purchases);
      this.hourlyPurchasesArray.push(purchases);
      capitolHill.totalDailyCookieSales += purchases;
    }
  },
  hourlyCustomersArray : [],
  hourlyPurchasesArray : []
};
capitolHill.hourlyCustomers();
capitolHill.hourlyPurchases();
var customerList =  document.getElementById('capitolHill_Customers');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + capitolHill.hourlyCustomersArray[i];
  listItem.textContent = listContent;
  customerList.appendChild(listItem);
}
var customerList2 = document.getElementById('capitolHill_Purchases');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + capitolHill.hourlyPurchasesArray[i];
  listItem.textContent = listContent;
  customerList2.appendChild(listItem);
}
var totalPurchasesListItem = document.createElement('li');
totalPurchasesListItem.textContent = 'Total Purchases: ' + capitolHill.totalDailyCookieSales;
customerList2.appendChild(totalPurchasesListItem);
var alki = {
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  totalDailyCookieSales: 0,
  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      this.hourlyCustomersArray.push(customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 0; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      this.hourlyPurchasesArray.push(purchases);
      alki.totalDailyCookieSales += purchases;
    }
  },
  hourlyCustomersArray : [],
  hourlyPurchasesArray : []
};
alki.hourlyCustomers();
alki.hourlyPurchases();
var customerList = document.getElementById('alki_Customers');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + alki.hourlyCustomersArray[i];
  listItem.textContent = listContent;
  customerList.appendChild(listItem);
}
var customerList2 = document.getElementById('alki_Purchases');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + alki.hourlyPurchasesArray[i];
  listItem.textContent = listContent;
  customerList2.appendChild(listItem);
}
var totalPurchasesListItem = document.createElement('li');
totalPurchasesListItem.textContent = 'Total Purchases: ' + alki.totalDailyCookieSales;
customerList2.appendChild(totalPurchasesListItem);
