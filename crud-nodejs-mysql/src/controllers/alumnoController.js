const controller = {};

controller.list = (req, res) => {   
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        conn.query('SELECT * FROM ALUMNO', (err, rows) => {
        if (err) {
            res.json(err);
        }
        console.log(rows);
        res.render('alumnos', { 
            data: rows
        });

        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if(err){
            console.log('Something went wrong');
        }
        conn.query('INSERT INTO alumno SET ?', [data], (err, row) => {
            //console.log(row);
            res.redirect('/');
        });
    });
};

module.exports = controller;