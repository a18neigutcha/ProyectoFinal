const formidable = require('formidable');
const form = formidable({ multiples: true });
    
form.parse(req, (err, fields, files) => {
    if (err) {
        console.log(err)
        next(err);
        return;
    }

    console.log({fields,files});
    res.json({ fields, files });
});