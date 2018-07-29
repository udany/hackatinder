import Entity from "../base/Entity";

class UserReport extends Entity{};

UserReport.Register();
UserReport.Attributes = [
    new Entity.Attributes.Integer('id'),

    new Entity.Attributes.Integer('reportingUser'),
    new Entity.Attributes.Integer('reportedUser'),

    new Entity.Attributes.Integer('type'),

    new Entity.Attributes.Date('datetime'),
];

export default UserReport;
