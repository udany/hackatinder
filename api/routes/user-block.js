import express from 'express';
import db from '../Database';
import {Reply} from "../base/Reply";
import UserBlockModel from "../models/UserBlockModel";
import UserBlock from "../../shared/entities/UserBlock";

let router = express.Router();

router.get('/', async function (req, res, next) {
    let data = await UserBlockModel.select(db);
    res.send(data);
});

// Save

router.post('/', async function (req, res, next) {
    const obj = new UserBlock(req.body);
    await UserBlockModel.save(db, obj, ['blockingUser', 'blockedUser',  'datetime',]);
    res.send(obj);
});

// Delete

router.delete('/:id', async function (req, res, next) {
    let data = await UserBlockModel.deleteById(db, req.params.id);

    res.send(new Reply(data));
});

module.exports.path = '/user-block';
module.exports.router = router;
