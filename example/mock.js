const data = { 
    "recipient":{ 
       "first_name":"vinay",
       "last_name":"thallam"
    },
    "meeting":{ 
       "meeting_with":"Salesforce",
       "day":"Monday",
       "date":"07",
       "month":"Feb",
       "year":"2020",
       "internal_attendees":[ 
          { 
             "first_name":"Bessie",
             "last_name":"Mckinney",
             "email":"bessie.mc@acmecorp.com",
             "company":"Acme Corporation"
          },
          { 
             "first_name":"Kyle",
             "last_name":"Nguyen",
             "email":"kyle.ng@acmecorp.com",
             "company":"Acme Corporation"
          },
          { 
             "first_name":"Andrew",
             "last_name":"Ng",
             "email":"andy.ng@acmecorp.com",
             "company":"Acme Corporation"
          }
       ],
       "external_attendees":[ 
          { 
             "first_name":"Mark",
             "last_name":"Ashley",
             "email":"mark.ash@microsoft.com",
             "company":"Microsoft"
          },
          { 
             "first_name":"Kiran",
             "last_name":"Kumar",
             "email":"kiran.k@reactgroup.com",
             "company":"React Group"
          },
          { 
             "first_name":"Rohan",
             "last_name":"Jain",
             "email":"rohan.jain@zigwheels.com",
             "company":"Zig Wheels"
          }
       ]
    }
 }

 module.exports = {
	data
 }