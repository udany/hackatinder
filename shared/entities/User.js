import Entity from '../base/Entity';

/**
 * @name User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */
export class User extends Entity {}

User.Register();
User.Attributes = [
    new Entity.Attributes.Integer('id'),
    new Entity.Attributes.String('name'),
	new Entity.Attributes.String('email'),
	new Entity.Attributes.String('password')
];

export default User;
