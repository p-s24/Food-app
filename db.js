// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://vanshgoel87:nonu2003@cluster0.6gmkvsq.mongodb.net/gofoodmern?retryWrites=true&w=majority"
// const mongoDB = () => {
//     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
//         .then(() => {
//             console.log('Connected to MongoDB');
//             // Your code here, e.g., define models, perform queries, etc.
//             const foodItemsCollection =  mongoose.connection.db.collection("foodCategory");
//             foodItemsCollection.find({}).toArray((err, data) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(data);
//                 }
//                 mongoose.connection.close();
//             });
//         })
//         .catch(error => {
//             console.error('MongoDB connection error:', error);
//         });

// };

// module.exports = mongoDB;
const mongoose = require('mongoose');

const foodDataSchema = new mongoose.Schema({
    _id : mongoose.ObjectId,
    CategoryName : String,
    description : String,
    img : String,
    name : String,
    options : Array
});

const mongoURI = "mongodb+srv://vanshgoel87:nonu2003@cluster0.6gmkvsq.mongodb.net/gofoodmern?retryWrites=true&w=majority" 
const mongoDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(mongoURI);
        console.log('Mongo connected')

        const foodData1 = mongoose.model('foodData1', foodDataSchema, 'foodData2');
        const dataa = await foodData1.find({}).exec();

        const foodName = mongoose.model('foodName', foodDataSchema, 'food_items');
        const data = await foodName.find({}).exec();

            const foodCategory1 = mongoose.model('foodCategory1', foodDataSchema, 'foodCategory');
            const catData = await foodCategory1.find({}).exec();

        // console.log(data);
        global.food_items = data;
        global.foodCategory = catData;
        console.log(global.food_items);
        console.log(global.foodCategory);
    }
    catch(error) {
        console.error(error)
        process.exit(1);
    }
}


module.exports = mongoDB;
