import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.json({success: false, message: "Not Authorized"});
    }

    try{
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
       if(tokenDecoded.id){
            req.body.userId = tokenDecoded.id;
       }else{
            return res.json({success: false, message: "Not Authorized"});
       }
        next();
    }catch(error){
        console.error(error);
        return res.json({success: false, message: error.message});
    }
}

export default userAuth;