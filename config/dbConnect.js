const mongoose = require("mongoose");
const dbConnect = async () => {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(process.env.CONNECTION_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: "school-management",
		});
		console.log("db connected successfully");
	} catch (error) {
		console.log("db connected failed: ", error?.message);
	}
};

dbConnect();
