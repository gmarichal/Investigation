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

controller.delete = (req, res) => {
    const { id } = req.params;
    //const id = req.params.id; OLD WAY
    req.getConnection((err, conn) => {
        if(err){
            console.log('Unable to connect to database: ' + err);
        }
        conn.query('DELETE FROM alumno WHERE id = ?', [id], (err, row) => {
            //console.log(row);
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    //const id = req.params.id; OLD WAY
    req.getConnection((err, conn) => {
        if(err){
            console.log('Unable to connect to database: ' + err);
        }
        conn.query('SELECT * FROM alumno WHERE id = ?', [id], (err, row) => {
            //console.log(row);
            res.render('alumno_edit', {
                data: row[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const alumno = req.body;
    //const id = req.params.id; OLD WAY
    req.getConnection((err, conn) => {
        if(err){
            console.log('Unable to connect to database: ' + err);
        }
        conn.query('UPDATE alumno SET ? WHERE id = ?', [alumno, id], (err, row) => {
        //console.log(row);
        res.redirect('/');
        });
    });
};

module.exports = controller;