import express from 'express';
import db from '../Database';
import MatchModel from "../models/MatchModel";

let router = express.Router();

router.get('/', async function (req, res, next) {
    let data = await MatchModel.select(db);
    res.send(data);
});

module.exports.path = '/match';
module.exports.router = router;