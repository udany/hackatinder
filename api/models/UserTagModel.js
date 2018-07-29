import {DatabaseField, DatabaseModel} from '../js/DatabaseModel';
import UserTag from '../../shared/entities/UserTag';

class UserTagModel extends DatabaseModel {}

UserTagModel.config({
	table: 'user_tag',
	entity: UserTag,
	insertWithId: true,
	updateOnDuplicate: true,

	fields: [
		new DatabaseField({name: 'userId', type: 'int', length: 11})
			.setPrimaryKey(true),

		new DatabaseField({name: 'tag', type: 'varchar', length: 128})
			.setPrimaryKey(true)
	]
});


export default UserTagModel;