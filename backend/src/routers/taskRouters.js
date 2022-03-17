const express = require('express');
const router = express.Router();

const { validateBodyReq, resRegisterTask } = require('../controllers/controlTask');

router.get('/get-task');
router.get('/all-task');

router.post('/new-task', validateBodyReq, resRegisterTask);

router.put('/edit-task');

router.delete('/remove-task');

module.exports = router;