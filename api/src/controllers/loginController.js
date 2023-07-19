import {sql} from "../server.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
try{
const {email, password} = req.body;
console.log(email, password)

// Check if user exists
const userInfo = await sql`SELECT * FROM users WHERE email = ${email};`;

if(userInfo.length === 0){
    throw new Error("User does not exist");
}

console.log(userInfo[0].password);
// Check if password is correct
const isPasswordCorrect = await bcrypt.compare(password, userInfo[0].password);
console.log(isPasswordCorrect);
if(!isPasswordCorrect){
    throw new Error("Password is incorrect");
}

// Create token
const token = jwt.sign({id: userInfo[0].id}, process.env.JWT_TOKEN);

// send back token and user info
res.status(200).json({token, userInfo});

console.log(userInfo)
res.status(200).json({userInfo})
}catch(err){
    console.error(err.message);
    res.status(400).json({err: err.message});
}

};