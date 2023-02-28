// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


// collections of db
db.company_drives.find({})
db.users.find({})
db.mentor.find({})
db.tasktopic.find({})


// create a Collections

// task_topic
db.tasktopic.insertMany(

[

{
    "id":"1",
    "name_topic": "Topic 1",
    "name_task": "Task 1",
    "deadline": ISODate("2020-10-15T00:00:00.000Z"),
    "submitted": false
},
{
    "id":"2",
"name_topic": "Topic 2",
    "name_task": "Task 2",
    "deadline": ISODate("2020-10-20T00:00:00.000Z"),
    "submitted": true
},
{
    "id":"3",
 "name_topic": "Topic 3",
    "name_task": "Task 3",
    "deadline": ISODate("2020-10-31T00:00:00.000Z"),
    "submitted": false
}

]

)

// company_drives
db.company_drives.insertMany(

[

{
    "id":"1",
    "name": "Company 1",
      "drives": "Company1",
 "placement": "student2",
   "date": ISODate("2020-10-15T00:00:00.000Z")

},
{
    "id":"2",
    "name": "Company 2",
  "drives": "Company1",
     "placement": "student1",
 "date": ISODate("2020-10-20T00:00:00.000Z")
},
{
    "id":"3",
    "name": "Company 3",
  "drives": "Company1",
"placement": "student1",
 "date": ISODate("2020-10-29T00:00:00.000Z")

}
]

)



// use mentor
db.mentor.insertMany(
    [

        {
            "id":"1",
            "name": "Mentor 1",
            "email": "mentor1@example.com",
            "mentee_count": 17
        },
        {
            "id":"2",
            "name": "Mentor 2",
            "email": "mentor2@example.com",
            "mentee_count": 8
        },
        {
            "id":"3",
            "name": "Mentor 3",
            "email": "mentor1@example.com",
            "mentee_count": 16
        }
        
        
        
        
        ]
        
        
)

// users
db.users.insertMany(
    [
        {
            "id": "1",
            "name": "John Doe",
            "email": "johndoe@example.com",
            "role": "student1",
            "deadline": ISODate("2020-10-15T00:00:00.000Z"),
            "present": true,
        "codekata_count": 300
        },
        {
            "id": "2",
            "name": "John Doe2",
            "email": "johndoe2@example.com",
            "role": "student2",
          "deadline": ISODate("2020-10-20T00:00:00.000Z"),
            "present": true,
        "codekata_count": 250
        },
        {
            "id": "3",
            "name": "John Doe3",
            "email": "johndoe3@example.com",
            "role": "student3",
         "deadline": ISODate("2020-10-30T00:00:00.000Z"),
            "present": false,
        "codekata_count": 150
        }
        ]
        

)

// Find all the topics and tasks which are thought in the month of October
db.tasktopic.find({deadline:{$gt: ISODate("2020-10-01T00:00:00Z")}},{name_task:1,name_topic:1});

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({date:{$gte: ISODate("2020-10-15T00:00:00Z"),$lte:ISODate("2020-10-30T00:00:00Z")}});


// Find all the company drives and students who are appeared for the placement.
db.company_drives.find({}, {drives:1,placement:1})


// Find the number of problems solved by the user in codekata
db.users.aggregate([
    { $group: { _id: "$name", totalcount: { $sum: { $add: "$codekata_count" } } } }
]);


// Find all the mentors with who has the mentee's count more than 15
db.mentor.find({mentee_count:{$gte: 15}})


// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.users.find({ $and: [{present: false,
    deadline:{$gte: ISODate("2020-10-15T00:00:00Z"),$lte:ISODate("2020-10-30T00:00:00Z")}

}]});
























