const getHomepage = (req, res) => {
    //process data
    //call model 
    res.send('Hello World!');
}

const getABC = (req,res) => {
    res.send('check ABC');
}

const getHoiDanIT = (req,res) =>{
    // res.send('<h1>Day la tuan trann</h1>')
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC, getHoiDanIT
}