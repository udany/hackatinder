import Entity from '../base/Entity';
import Campus from '../enums/Campus';

/**
 * @name UserCampus
 * @property {number} userId
 * @property {Campus} campus
 */
export class UserCampus extends Entity {}

UserCampus.Register();
UserCampus.Attributes = [
    new Entity.Attributes.Integer('userId'),
    new Entity.Attributes.Enum('campus', Campus)
];

export default UserCampus;
