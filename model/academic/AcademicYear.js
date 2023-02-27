const mongoose = require("mongoose");

const { Schema } = mongoose;

const academicYearSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		fromYear: {
			type: Date,
			required: true,
		},
		toYear: {
			type: Date,
			required: true,
		},
		isCurrent: {
			type: Boolean,
			default: false,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Admin",
			required: true,
		},
		students: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Student",
			},
		],
		teachers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Teacher",
			},
		],
		//Finance
		//Librarian
		//......
	},
	{
		timestamps: true,
	}
);

//model
const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);

module.exports = AcademicYear;
