
const jwt = require('jsonwebtoken');


const generateJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {
        const payload = { uid };

        jwt.sign( payload, process.env.JWT_KEY, { 
            expiresIn: '24h'
        }, ( err, token ) => {
    
            if ( err ) {
                
                // token not created
                reject('Não foi possível gerar o JWT');

            } else {
                
                // token
                resolve( token );
                
            }
    
        });
    });

}

const verifyJWT = ( token = '' ) => {

    try {

        const { uid } = jwt.verify( token, process.env.JWT_KEY );
        return [ true, uid ];

    } catch (error) {
        
        return [ false, null ];

    }

}



module.exports = {
    generateJWT,
    verifyJWT
}