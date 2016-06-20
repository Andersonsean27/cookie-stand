var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: 6.3,
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
    }
  },
  hourlyCustomersArray : []
};
firstAndPike.hourlyCustomers();
var customerList =  document.getElementById('firstAndPike_Customers');
for (var i = 0; i < hours.length; i++) {
  var listItem = document.createElement('li');
  var listContent = hours[i] + ' ' + firstAndPike.hourlyCustomersArray[i];
  listItem.textContent = listContent;
  customerList.appendChild(listItem);}

// ============================

var seaTacAirport = {
  minimumCustomers: 3 ,
  maximumCustomers: 24,
  averageCookies: 1.2,
  hourlyCustomers: function() {
    for (var i = 1; i < 15; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      console.log(hours[i], customers);
    }
  },

  hourlyPurchases: function() {
    for (var i = 1; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      console.log(hours[i], purchases);
    }
  }
};
var seattleCenter = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookies: 3.7,
  hourlyCustomers: function() {
    for (var i = 1; i < 15; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      console.log(hours[i], customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 1; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      console.log(hours[i], purchases);
    }
  }
};

var capitolHill = {
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookies: 2.3,
  hourlyCustomers: function() {
    for (var i = 1; i < 15; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      console.log(hours[i], customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 1; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      console.log(hours[i], purchases);
    }
  }
};

var alki = {
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  hourlyCustomers: function() {
    for (var i = 1; i < 15; i++) {
      var customers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
      console.log(hours[i], customers);
    }
  },
  hourlyPurchases: function() {
    for (var i = 1; i < hours.length; i++) {
      var purchases = Math.floor(Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers) * this.averageCookies);
      console.log(hours[i], purchases);
    }
  }
};
