function userAuth(_req,res,next){
    const role='user';
    if(role==='user'){
        console.log('authorised')
        next();
        return;
    }
    res.send('unauthorised access');
}

function adminAuth(_req,res,next){
    const role='admin';
    if(role==='admin'){
        console.log('authorised')
        next();
        return;
    }
    
    res.send('unauthorised access');
}

module.exports= {adminAuth,userAuth};