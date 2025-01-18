import express from 'express';
import usercreatcontroler from '../controlers/usercreatecontroler.js';
import userupdatecontroler from '../controlers/userupdatecontroler.js';
import userdataaddcontoler from '../controlers/userdataaddcontroler.js';
import userlogincontroler from '../controlers/userlogincontroler.js'
const router = express.Router();

router.post('/register',usercreatcontroler);
router.put('/remove',userupdatecontroler);
router.post('/add',userdataaddcontoler);
router.post('/login',userlogincontroler)

export default router;