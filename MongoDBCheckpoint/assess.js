// MongoDB Commands for Contact Database Operations

// 1. Create database and switch to it
use contact

// 2. Create collection and insert documents
db.contactlist.insertMany([
    {
        lastName: "Ben",
        firstName: "Moris",
        email: "ben@gmail.com",
        age: 26
    },
    {
        lastName: "Kefi",
        firstName: "Seif",
        email: "kefi@gmail.com",
        age: 15
    },
    {
        lastName: "Emilie",
        firstName: "brouge",
        email: "emilie.b@gmail.com",
        age: 40
    },
    {
        lastName: "Alex",
        firstName: "brown",
        age: 4
    },
    {
        lastName: "Denzel",
        firstName: "Washington",
        age: 3
    }
])

// 3. Display all contacts
db.contactlist.find()

// 4. Display contact by ID (replace with actual ID)
db.contactlist.findOne({ _id: ObjectId("your_id_here") })

// 5. Display contacts with age > 18
db.contactlist.find({ age: { $gt: 18 } })

// 6. Display contacts with age > 18 and name containing "ah"
db.contactlist.find({
    $and: [
        { age: { $gt: 18 } },
        {
            $or: [
                { firstName: { $regex: "ah", $options: "i" } },
                { lastName: { $regex: "ah", $options: "i" } }
            ]
        }
    ]
})

// 7. Update Kefi Seif's first name to Kefi Anis
db.contactlist.updateOne(
    { lastName: "Kefi", firstName: "Seif" },
    { $set: { firstName: "Anis" } }
)

// 8. Delete contacts aged under 5
db.contactlist.deleteMany({ age: { $lt: 5 } })

// 9. Display final contact list
db.contactlist.find() 