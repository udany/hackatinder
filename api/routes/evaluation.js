import express from 'express';
import db from '../Database';
import EvaluationModel from "../models/EvaluationModel";
import Evaluation from "../../shared/entities/Evaluation";
import {DatabaseQueryCondition} from "../js/DatabaseQueryComponent";
import Match from "../../shared/entities/Match";
import MatchModel from "../models/MatchModel";

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

    // TODO: Check if there isn't a match already

    if (queryResult.size() > 0) {
        const matchObj = new Match({
            user1: obj.evaluatedUser,
            user2: obj.evaluatingUser,
            datetime: new Date()
        });
        await MatchModel.save(db, matchObj)
    }

    // TODO: Change res.send to send in the Reply() format and inform whether a match has occurred.

    res.send(obj);
});

module.exports.path = '/evaluation';
module.exports.router = router;