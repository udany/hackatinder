    import Entity from '../base/Entity';

class Evaluation extends Entity {}

Evaluation.Register();
Evaluation.Attributes = [
    new Entity.Attributes.Integer('id'),
    new Entity.Attributes.Integer('evaluatingUser'),
    new Entity.Attributes.Integer('evaluatedUser'),
    new Entity.Attributes.Integer('evaluation'),
    new Entity.Attributes.Date('datetime'),
];

export default Evaluation;