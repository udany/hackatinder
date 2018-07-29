import express from 'express';
import db from '../Database';
import EvaluationModel from "../models/EvaluationModel";
import Evaluation from "../../shared/entities/Evaluation";
import {DatabaseQueryCondition} from "../js/DatabaseQueryComponent";

let router = express.Router();

router.get('/', async function (req, res, next) {
    let data = await EvaluationModel.select(db);
    res.send(data);
});

// Save
router.post('/', async function (req, res, next) {
    const obj = new Evaluation(req.body);
    await EvaluationModel.save(db, obj, ['evaluatingUser', 'evaluatedUser', 'evaluation', 'datetime']);

    // After inserting the evaluation, see if there is a counterpart for a match:
    let queryResult = await EvaluationModel.select(db, [
        new DatabaseQueryCondition({ column: 'evaluatingUser', values: obj.evaluatedUser}),
        new DatabaseQueryCondition({ column: 'evaluatedUser', values: obj.evaluatingUser}),
        new DatabaseQueryCondition({ column: 'evaluation', values: 1})
    ]);
    if (queryResult.size() > 0) {
        const matchObj = new MatchModel()
        await MatchModel.save(db, )
    }

    res.send(obj);
});

module.exports.path = '/evaluation';
module.exports.router = router;