const dbConnection = require('../../config/dbConnection');

module.exports = app =>{

    const connection = dbConnection();
    
    app.get('/', (req,res) => {
        connection.query('SELECT * FROM `datos-generales`',(err,result) =>{
            res.render('news/news', {
                news: result
            });
        });
    });
}