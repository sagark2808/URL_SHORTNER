const jwt =require("jsonwebtoken");
const secret ="Piyush$123@$";

function setUser(user){
  return jwt.sign({ _id: user._id }, secret, { expiresIn: "1h" }); // Token expires in 1 hour
}

// Verify the token and handle errors
function getUser(token) {
  try {
    if (!token) return null; 
    return jwt.verify(token, secret);
  } catch (err) {
    console.error("JWT Error:", err.message);
    return null; // Return null instead of crashing the app
  }
}
module.exports = {
  setUser,
  getUser,
};