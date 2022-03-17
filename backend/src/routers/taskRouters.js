const express = require('express');
const router = express.Router();

const { validateBodyReq, resRegisterTask, allTask } = require('../controllers/controlTask');

router.get('/get-task');
router.get('/all-task', allTask);

router.post('/new-task', validateBodyReq, resRegisterTask);

router.put('/edit-task');

router.delete('/remove-task');

module.exports = router;