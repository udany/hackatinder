import express from 'express';
import db from '../Database';
import {Reply} from "../base/Reply";
import EvaluationModel from "../models/EvaluationModel";
import User from "../../shared/entities/User";
import UserModel from "../models/UserModel";
import Evaluation from "../../shared/entities/Evaluation";

let router = express.Router();

router.get('/', async function (req, res, next) {
    let data = await EvaluationModel.select(db);
    res.send(data);
});

// Save
router.post('/', async function (req, res, next) {
    const obj = new Evaluation(req.body);
    await EvaluationModel.save(db, obj, ['evaluatingUser', 'evaluatedUser', 'evaluation', 'datetime']);
    res.send(obj);
});

module.exports.path = '/evaluation';
module.exports.router = router;