import { Schema, model } from 'mongoose';

const ayurvedicSchema = Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 1,
			trim: true,
		},
		dosage: {
			type: String,
			required: false,
		},
		side_effect: [
			{
				name:String,
				required: false,
			},
		],
		causes_id: [
			{
				name:String,
				required: false,
			},
		],
	},
	{
		timestamps: true,
		toJSON: {
			transform(_, returnedData) {
				returnedData.id = returnedData._id;
				delete returnedData._id;
			},
		},
	}
);

export const Ayurvedic = model('ayurvedic', ayurvedicSchema);
