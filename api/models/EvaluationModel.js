import {DatabaseField, DatabaseModel} from '../js/DatabaseModel';
import Evaluation from "../../shared/entities/Evaluation";

class EvaluationModel extends DatabaseModel {

};

EvaluationModel.config({
    table: 'evaluation',
    entity: Evaluation,
    fields: [
        new DatabaseField({name: "evaluatingUser", type: "int", length: 11})
            .setPrimaryKey(true),
        new DatabaseField({name: "evaluatedUser", type: "int", length: 11})
            .setPrimaryKey(true),
        new DatabaseField({name: "evaluation", type: "tinyint", length: 1}),
        new DatabaseField({name: "datetime", type: "datetime"}),
    ],
});

export default EvaluationModel;