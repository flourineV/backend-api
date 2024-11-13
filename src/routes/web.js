const express = require('express');
const {getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage} = require('../controllers/homeController');
const router = express.Router();


//router.Method('/route', handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoiDanIT);
router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);
module.exports = router; //export default