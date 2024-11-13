const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
}

const getABC = (req,res) => {
    res.send('check ABC');
}

const getHoiDanIT = (req,res) =>{
    // res.send('<h1>Day la tuan trann</h1>')
    res.render('sample.ejs');
}

const postCreateUser = async (req,res)=>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(req.body);
    let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log(">>> check results: ", results);
    res.send('Created user succeed');
}

const getCreatePage = (req,res)=>{
    res.render('create.ejs');
}

module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage
}