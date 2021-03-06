import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import db from '../Database';

const UserController = {

	async register(obj) {
		await this.encryptPassword(obj);

		const result = await UserModel.save(db, obj, ['name','email','password','major',
			'semester','gender','enrollmentStatus',
			'educationLevel','sexualOrientation',
			'genderPreference','neighborhood','phone',
			'birthday', 'description', 'matchMessage',
			'tags']);

		return result;
	},

	async encryptPassword(user) {
		if (user.passwordRaw) {
			user.password = await bcrypt.hash(this.passwordRaw, 12);
			user.passwordRaw = '';
		}
	}
};

export default UserController;