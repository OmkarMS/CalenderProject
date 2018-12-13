var mysql = require('mysql');
exports.select = (userName) => {
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "irfan",
    database: "Calender_db"
});


    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");


        var usrNm = `select password from user_info where email_id='${userName}'`;
        con.query(usrNm, function (err, result) {
            if (err) {
                throw err;
            } 
           // console.log(result);
            console.log(result[0].password);

        });
        
    });
};
