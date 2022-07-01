/** @format */

const { gql, makeExecutableSchema } = require("apollo-server-express");
const { User } = require("./models/user");
const { Professional } = require("./models/Professional");

const typeDefs = gql`
	type Query {
		getUser: [User]
	}
	type User {
		id: ID
		UserName: String
		Password: String
		Email: String
	}
	type ProfessionType{
		ProfessionType:String
	}
	type PersonalInfoSchema {
		FirstName:String
		LastName:String
		Dob:String
		Phone:String
		Address:String
		City:String
		Zipcode:String
	  }

	  type CarrierInformationSchema{
		NumberOfmovis:String
		Awards:String
		Price:String
	  }
	  type EducaftionInformationSchema{
		BachlorOfArts:String
		MasterOfArts:String
		Acting:String
	  }
	  type PrcingInformationSchema{
		OneDayPrice:String
		OneMonthPrice:String
		OneYearPrice:String
	  }
	  type AwardInformationSchema{
		Award:String
		AwardDate:String
		AwardReceivedBy:String

	  }

	type Professional {
		ProfessionType: String
		PersonalInformation:PersonalInfoSchema
		CarrierInformation:CarrierInformationSchema
		EducaftionInformation:EducaftionInformationSchema
		PrcingInformation:PrcingInformationSchema
		AwardInformation:AwardInformationSchema

	}

	input PersonalInformationArgs {
		FirstName: String
		LastName: String
		Dob: String
		Phone: String
		Address: String
		City: String
		Zipcode: String
		State: String
	}

	input CarrierInformationArgs {
		NumberOfmovis: String
		Awards: String
		Price: String
	}
	input EducaftionInformationArgs {
		BachlorOfArts: String
		MasterOfArts: String
		Acting: String
	}
	input PrcingInformationArgs {
		OneDayPrice: String
		OneMonthPrice: String
		OneYearPrice: String
	}

	input AwardInformationArgs {
		Award: String
		AwardDate: String
		AwardReceivedBy: String
	}

	type Mutation {
		addUser(id: ID, UserName: String, Password: String, Email: String): User
		removeUser(id: ID, UserName: String, Password: String, Email: String): User
		updateUser(id: ID, Password: String): User
		addProfessional(
			ProfessionType: String
			PersonalInformation: PersonalInformationArgs
			CarrierInformation: CarrierInformationArgs
			EducaftionInformation: EducaftionInformationArgs
			PrcingInformation: PrcingInformationArgs
			AwardInformation: AwardInformationArgs
		): Professional
	}
`;
const resolvers = {
	Query: {
		getUser: (parent, args) => {
			return User.find();
		},
	},
	Mutation: {
		addUser: (parent, args) => {
			try {
				let newUser = new User({
					UserName: args.UserName,
					Password: args.Password,
					Email: args.Email,
				});
				return newUser.save();
			} catch (error) {
				console.log(error);
			}
		},
		addProfessional: (parent, args) => {
			try {
				let newProfessional = new Professional({
					ProfessionType: args.ProfessionType,
					PersonalInformation: args.PersonalInformation,
					CarrierInformation: args.CarrierInformation,
					EducaftionInformation:args.EducaftionInformation,
					PrcingInformation:args.PrcingInformation,
					AwardInformation:args.AwardInformation,
				});
				return newProfessional.save();
			} catch (error) {
				console.log(error);
			}
		},

		removeUser: (parent, args) => {
			try {
				return User.findByIdAndRemove(args.id);
			} catch (error) {
				console.log(error);
			}
		},

		updateUser: (parent, args) => {
			try {
				const update_obj = {
					Password: args.Password,
				};
				return User.findByIdAndUpdate(args.id, update_obj, { new: true });
			} catch (error) {
				console.log(error);
			}
		},
	},
};

module.exports = makeExecutableSchema({
	typeDefs: [typeDefs],
	resolvers: resolvers,
});
