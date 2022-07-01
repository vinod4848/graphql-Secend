const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonalInfoSchema = new Schema({
	FirstName: { type: String, required: true },
	LastName: { type: String, required: true },
	Dob: { type: String, required: true },
	Phone: { type: String, required: true },
	Address: { type: String, required: true },
	City: { type: String, required: true },
	Zipcode: { type: String, required: true },
	State: { type: String, required: true },
})

const CarrierInformationSchema = new Schema({
	NumberOfmovis: { type:String, required: true },
	Awards: { type: String, required: true },
	Price: { type: String, required: true },
})

const EducaftionInformationSchema = new Schema({
	BachlorOfArts: { type: String, required: true },
	MasterOfArts: { type: String, required: true },
	Acting: { type: String, required: true },
})

const PrcingInformationSchema = new Schema({
	OneDayPrice: { type: String, required: true },
	OneMonthPrice: { type: String, required: true },
	OneYearPrice: { type: String, required: true },
})

const AwardInformationSchema = new Schema({
	Award: { type: String, required: true },
	AwardDate: { type: String, required: true },
	AwardReceivedBy: { type: String, required: true },
})

const ProfessionalSchema = new Schema({
	User: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
	PersonalInformation: { type: PersonalInfoSchema },
	CarrierInformation: { type: CarrierInformationSchema },
	EducaftionInformation: { type: EducaftionInformationSchema },
	PrcingInformation: { type: PrcingInformationSchema },
	AwardInformation: { type: AwardInformationSchema },
	ProfessionType: {
		type: String,
		enum: ["Actor", "Directer", "Producer", "Cameraman"],
		required: true,
	},
})
let Professional = mongoose.model("Professional", ProfessionalSchema)
module.exports = { Professional, ProfessionalSchema }
