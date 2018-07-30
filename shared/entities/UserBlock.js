import Entity from "../base/Entity";

class UserBlock extends Entity {}

UserBlock.Register();
UserBlock.Attributes = [
    new Entity.Attributes.Integer('blockingUser'),
    new Entity.Attributes.Integer('blockedUser'),
    new Entity.Attributes.Date('datetime')
];

export default UserBlock;