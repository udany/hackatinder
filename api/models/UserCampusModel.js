import {DatabaseField, DatabaseModel} from '../js/DatabaseModel';
import UserCampus from '../../shared/entities/UserCampus';

class UserCampusModel extends DatabaseModel {}

UserCampusModel.config({
	table: 'user_campus',
	entity: UserCampus,
	insertWithId: true,
	updateOnDuplicate: true,

	fields: [
		new DatabaseField({name: 'userId', type: 'int', length: 11})
			.setPrimaryKey(true),

		new DatabaseField({name: 'campus', type: 'tinyint', length: 2})
			.setPrimaryKey(true)
	]
});


export default UserCampusModel;