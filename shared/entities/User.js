import Entity from '../base/Entity';
import Gender from '../enums/Gender';
import EnrollmentStatus from '../enums/EnrollmentStatus';
import EducationLevel from '../enums/EducationLevel';
import SexualOrientation from '../enums/SexualOrientation';
import UserTag from './UserTag';

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
 * @property {Gender} gender
 * @property {EnrollmentStatus} enrolmentStatus
 * @property {EducationLevel} educationLevel
 * @property {SexualOrientation} sexualOrientation
 * @property {Gender[]} genderPreference
 * @property {string} neighborhood
 * @property {string} phone
 * @property {Date} birthday
 *
 * @property {string} description
 *
 * @property {string} matchMessage
 *
 * @property {UserTag[]} tags
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

	new Entity.Attributes.Enum('gender', Gender),
	new Entity.Attributes.Enum('enrolmentStatus', EnrollmentStatus),
	new Entity.Attributes.Enum('educationLevel', EducationLevel),
	new Entity.Attributes.Enum('sexualOrientation', SexualOrientation),
	new Entity.Attributes.Flags('genderPreference', Gender),
	new Entity.Attributes.String('neighborhood'),
	new Entity.Attributes.String('phone'),
	new Entity.Attributes.Date('birthday'),

	new Entity.Attributes.String('description'),

	new Entity.Attributes.String('matchMessage'),

	new Entity.Attributes.EntityList('tags', UserTag),
];

export default User;
