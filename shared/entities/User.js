import Entity from '../base/Entity';

/**
 * @name User
 * @property {number} id
 *
 * @property {string} name
 * @property {string} email
 * @property {string} password
 *
 * @property {number} major
 * @property {string} semester
 *
 * @property {Date} birthday
 * @property {number} enrolmentStatus
 * @property {number} educationLevel
 * @property {number} sexualOrientation
 * @property {number} genderPreference
 * @property {string} neighborhood
 * @property {string} phone
 *
 * @property {string} description
 *
 * @property {string} matchMessage
 */
export class User extends Entity {}

User.Register();
User.Attributes = [
    new Entity.Attributes.Integer('id'),

    new Entity.Attributes.String('name'),
	new Entity.Attributes.String('email'),
	new Entity.Attributes.String('password'),

	new Entity.Attributes.Integer('major'),
	new Entity.Attributes.String('semester'),

	new Entity.Attributes.Date('birthday'),
	new Entity.Attributes.Integer('enrolmentStatus'),
	new Entity.Attributes.Integer('educationLevel'),
	new Entity.Attributes.Integer('sexualOrientation'),
	new Entity.Attributes.Integer('genderPreference'),
	new Entity.Attributes.String('neighborhood'),
	new Entity.Attributes.String('phone'),

	new Entity.Attributes.String('description'),

	new Entity.Attributes.String('matchMessage'),
];

export default User;
