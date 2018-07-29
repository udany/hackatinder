import express from 'express';
import db from '../Database';
import UserReportModel from "../models/UserReportModel";
import UserReport from "../../shared/entities/UserReport";

let router = express.Router();

// Save

router.post('/', async function (req, res, next) {
    const obj = new UserReport(req.body);
    await UserReportModel.save(db, obj, ['reportingUser', 'reportedUser',  'datetime',]);
    res.send(obj);
});


module.exports.path = '/user-report';
module.exports.router = router;
