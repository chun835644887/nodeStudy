const crypto = require("crypto");

const name = "yangyichun";
const hash = crypto.createHmac("sha256",name)
.update("i llke miss su").digest("hex");
console.log(`${hash}`);