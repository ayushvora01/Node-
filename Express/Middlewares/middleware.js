function myMiddleware(req,res,next){
    console.log('Custom Middleware 1');
    next();
}

module.exports = myMiddleware;