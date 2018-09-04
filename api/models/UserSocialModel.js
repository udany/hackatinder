import {DatabaseField, DatabaseModel} from "../js/DatabaseModel";
import UserSocial from "../../shared/entities/UserSocial";

class UserSocialModel extends DatabaseModel{};
UserSocialModel.config({
    table: 'user_social',
    entity: UserSocial,

    fields: [
      new DatabaseField({name: 'userId', type: 'int', length: '11'})
          .setPrimaryKey(true),
      new DatabaseField({name: 'network', type: 'tinyint', length: '2'})
          .setPrimaryKey(true),
      new DatabaseField({name: 'networkHandle', type: 'varchar', length: '64'})
    ],
});

export default UserSocialModel;