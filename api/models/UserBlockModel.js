import {DatabaseField, DatabaseModel} from "../js/DatabaseModel";
import UserBlock from "../../shared/entities/UserBlock";

class UserBlockModel extends DatabaseModel{};

UserBlockModel.config({
    table: 'user_bloc',
    entity: UserBlock,
    fields: [
        new DatabaseField({name: 'blockingUser', type: 'int', length: '11'})
            .setPrimaryKey(true),
        new DatabaseField({name: 'blockedUser', type: 'int', length: '11'})
            .setPrimaryKey(true),
        new DatabaseField({name: 'datetime', type: 'datetime'}),
    ],
});

export default UserBlockModel;