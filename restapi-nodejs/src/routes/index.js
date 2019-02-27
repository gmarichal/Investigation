const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Gaston",
        "website": "hay mono!"
    };
    res.json(data);    
});


module.exports = router;