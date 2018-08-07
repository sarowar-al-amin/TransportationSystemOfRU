# TransportationSystemOfRU

**Show/Get Schedule of Buses**
----
  Returns json data about the schedule of all buses.

* **URL**

  localhost:3000/schedule

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {
    "_id": "5b69ebf6897f411960db0046",
    "busNumber": "Raj-A-123",
    "destination": "bazar",
    "shift": "Morning",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T18:59:02.147Z",
    "updatedAt": "2018-08-07T18:59:02.147Z",
    "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `
    { 
       Some error occured while retrieving total schedule!!
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Post Schedule of Buses**
----
  Posts json data about the schedule of all buses.

* **URL**

  localhost:3000/schedule

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {
    "_id": "5b69ebf6897f411960db0046",
    "busNumber": "Raj-A-123",
    "destination": "bazar",
    "shift": "Morning",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T18:59:02.147Z",
    "updatedAt": "2018-08-07T18:59:02.147Z",
    "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
    { 
       Every vehicle must have registration number.
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Something goes wrong while creating the schedule!!
    }


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Update/Put Schedule of a Bus**
----
  Updates json data about the schedule of a bus.

* **URL**

  localhost:3000/schedule/:busNumber

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {
    "_id": "5b69ebf6897f411960db0046",
    "busNumber": "Raj-A-123",
    "destination": "bazar",
    "shift": "Morning",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T18:59:02.147Z",
    "updatedAt": "2018-08-07T18:59:02.147Z",
    "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Schedule not found for the bus number
    }

  * **Code:** 404 <br />
    **Content:** `
    { 
       Error occured during updating schedule
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/:busNumber",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete Schedule of a Bus**
----
  Deletes json data about the schedule of a bus.

* **URL**

  localhost:3000/schedule/:busNumber

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    []

	

* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Schedule is not found for the bus
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Not possible to delete
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/:busNumber",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Show/Get Schedule of Buses According to Location**
----
  Returns json data about the schedule of buses going to a specific destination.

* **URL**

  localhost:3000/schedule/bazar

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
   {
    "_id": "5b69f0c0490ae62108195ae2",
    "busNumber": "Raj-A-123",
    "shift": "Morning",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T19:19:28.621Z",
    "updatedAt": "2018-08-07T19:19:28.621Z",
    "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `
    { 
       Some error occured while retrieving total schedule!!
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/bazar",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Post Schedule of Buses According to Location**
----
  Posts json data about the schedule of buses going to a specific destination.

* **URL**

  localhost:3000/schedule/bazar

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
   {
    "_id": "5b69f0c0490ae62108195ae2",
    "busNumber": "Raj-A-123",
    "shift": "Morning",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T19:19:28.621Z",
    "updatedAt": "2018-08-07T19:19:28.621Z",
    "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
    { 
       Every vehicle must have registration number.
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Something goes wrong while creating the schedule!!
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/bazar",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Update/Put Schedule of a Bus According to Location**
----
  Updates json data about the schedule of a bus going to a specific destination.

* **URL**

  localhost:3000/schedule/bazar/:busNumber

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
   {
    "_id": "5b69f0c0490ae62108195ae2",
    "busNumber": "Raj-A-123",
    "shift": "Morning",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T19:19:28.621Z",
    "updatedAt": "2018-08-07T19:19:28.621Z",
    "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Schedule not found for the bus number
    }

  * **Code:** 404 <br />
    **Content:** `
    { 
       Error occured during updating schedule
    }


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/bazar/:busNumber",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete Schedule of a Bus According to Location**
----
  Deletes json data about the schedule of a bus going to a specific destination.

* **URL**

  localhost:3000/schedule/bazar/:busNumber

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    []

	
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Schedule is not found for the bus
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Not possible to delete
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/bazar/:busNumber",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show/Get Schedule of Buses According to Shift**
----
  Returns json data about the schedule of buses in a specific shift.

* **URL**

  localhost:3000/schedule/morning

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
   {
    "_id": "5b69f11f490ae62108195ae3",
    "busNumber": "Raj-A-123",
    "destination": "bazar",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T19:21:03.198Z",
    "updatedAt": "2018-08-07T19:21:03.198Z",
    "__v": 0
   }
    
    }

	
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `
    { 
       Some error occured while retrieving total schedule!!
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/morning",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Post Schedule of Buses According to Shift**
----
  Posts json data about the schedule of buses in a specific shift.

* **URL**

  localhost:3000/schedule/morning

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
   {
    "_id": "5b69f11f490ae62108195ae3",
    "busNumber": "Raj-A-123",
    "destination": "bazar",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T19:21:03.198Z",
    "updatedAt": "2018-08-07T19:21:03.198Z",
    "__v": 0
   }
    
    }

	
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
    { 
       Every vehicle must have registration number.
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Something goes wrong while creating the schedule!!
    }


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/morning",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Update/Put Schedule of Buses According to Shift**
----
  Updates json data about the schedule of buses in a specific shift.

* **URL**

  localhost:3000/schedule/morning/:busNumber

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
   {
    "_id": "5b69f11f490ae62108195ae3",
    "busNumber": "Raj-A-123",
    "destination": "bazar",
    "arivalTime": " 8:10am",
    "departureTime": "8:40am",
    "passengerType": "Male",
    "createdAt": "2018-08-07T19:21:03.198Z",
    "updatedAt": "2018-08-07T19:21:03.198Z",
    "__v": 0
   }
    
    }

	
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Schedule not found for the bus number
    }

  * **Code:** 404 <br />
    **Content:** `
    { 
       Error occured during updating schedule
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/morning/:busNumber",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete Schedule of Buses According to Shift**
----
  Deletes json data about the schedule of buses in a specific shift.

* **URL**

  localhost:3000/schedule/morning/:busNumber

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    []

	
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Schedule is not found for the bus
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Not possible to delete
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/schedule/morning/:busNumber",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show/Get Information on Manpower and Finance**
----
  Returns json data about manpower and finance.

* **URL**

  localhost:3000/manpower_finance

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {
        "_id": "5b69dc1adb09052b1078b1c1",
        "annualCost": "20 Core",
        "studentFarePerYear": "120",
        "numberOfWorkers": "150",
        "createdAt": "2018-08-07T17:51:23.002Z",
        "updatedAt": "2018-08-07T17:51:23.002Z",
        "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `
    { 
       Something goes wrong while retrieving data!!
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/manpower_finance",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Post Information on Manpower and Finance**
----
  Posts json data about manpower and finance.

* **URL**

  localhost:3000/manpower_finance

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {
        "_id": "5b69dc1adb09052b1078b1c1",
        "annualCost": "20 Core",
        "studentFarePerYear": "120",
        "numberOfWorkers": "150",
        "createdAt": "2018-08-07T17:51:23.002Z",
        "updatedAt": "2018-08-07T17:51:23.002Z",
        "__v": 0
    }
    
    }

	
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
    { 
       Input is not able to fullfill the requirements.
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/manpower_finance",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Update/Put Information on Manpower and Finance**
----
  Updates json data about manpower and finance.

* **URL**

  localhost:3000/manpower_finance/:annualCost

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {
        "_id": "5b69dc1adb09052b1078b1c1",
        "annualCost": "20 Core",
        "studentFarePerYear": "120",
        "numberOfWorkers": "150",
        "createdAt": "2018-08-07T17:51:23.002Z",
        "updatedAt": "2018-08-07T17:51:23.002Z",
        "__v": 0
    }

    }

	
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
    { 
       Annual Cost can not be null.
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/manpower_finance/:annualCost",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete Information on Manpower and Finance**
----
  Deletes json data about manpower and finance.

* **URL**

  localhost:3000/manpower_finance/:annualCost

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    []

	
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
    { 
       Manpower and financial information is not found.
    }

  * **Code:** 500 <br />
    **Content:** `
    { 
       Not possible to delete
    }

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/manpower_finance/:annualCost",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```
