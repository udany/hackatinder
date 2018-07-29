import {DatabaseField, DatabaseModel} from "../js/DatabaseModel";
import UserReport from "../../shared/entities/UserReport";

class UserReportModel extends DatabaseModel{};
UserReportModel.config({
    table: 'user_report',
    entity: UserReport,

    fields: [
        new DatabaseField({name: 'id', type: 'int', length: '11',})
            .setAutoIncrement(true).setPrimaryKey(true),

        new DatabaseField({name: 'reportingUser', type: 'int', length: '11'}),
        new DatabaseField({name: 'reportedUser', type: 'int', length: '11'}),

        new DatabaseField({name: 'type', type: 'int', length: '1'}),

        new DatabaseField({name: 'datetime', type:'datetime'}),
    ],
});

export default UserReportModel;