import Entity from '../base/Entity';

/**
 * @name UserTag
 * @property {number} userId
 * @property {string} tag
 */
export class UserTag extends Entity {}

UserTag.Register();
UserTag.Attributes = [
    new Entity.Attributes.Integer('userId'),
    new Entity.Attributes.String('tag'),
];

export default UserTag;
