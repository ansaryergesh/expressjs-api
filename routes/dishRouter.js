const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode=  200;
    res.setHeader = ('Content-Type', 'text/plain');
    next();
})

.get((req,res,next)=> {
    res.end('Will send all the dishes list for you');
})

.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all the dish: '+req.params.id+' to u!');
})

.post((req,res,next) => {
	res.statusCode = 403;
    res.end('post operation not supported on dishes/:dishId');
})

.put((req,res,next) => {
   	res.write('Updating the dish: ' + req.params.dishId + '\n')
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting dish: ' + req.params.id);
});


module.exports = dishRouter;