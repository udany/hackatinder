import Entity from "../base/Entity";

class UserSocial extends Entity{};

UserSocial.Register();
UserSocial.Attributes = [
    new Entity.Attributes.Integer('user'),
    new Entity.Attributes.Integer('network'),
    new Entity.Attributes.String('networkHandle'),
];

export default UserSocial;