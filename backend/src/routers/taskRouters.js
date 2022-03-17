const express = require('express');
const router = express.Router();

const controlTask = require('../controllers/controlTask');

router.get('/get-task/:title', controlTask.findTask);
router.get('/all-task', controlTask.allTask);

router.post('/new-task', 
  controlTask.validateBodyReq, 
  controlTask.resRegisterTask
);

router.put('/edit-task');

router.delete('/remove-task');

module.exports = router;