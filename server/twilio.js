const Twilio = require('twilio');
let config, accountSid, authToken;

try {
  config = require('./config');
  accountSid = config.accountSid;
  authToken = config.accountSid;
} catch(err) {
  accountSid = process.env.ACCOUNT_SID;
  authToken = process.env.AUTH_TOKEN;
}

const client = new Twilio(accountSid, authToken);

const accessCodeLength = 8;
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

const accessCode = (n) => {
  let str = '';
  for (let i = 0; i < n; i += 1) {
    const random = Math.floor(alphabets.length * Math.random());
    str += alphabets[random];
  }
  return str;
};

const capitalize = str => (str.charAt(0).toUpperCase() + str.slice(1));

const sendMessage = (user) => {
  const code = accessCode(accessCodeLength);

  return client.messages.create({
    body: `Hello ${capitalize(user.firstname)}, Grazers conference access code is ${code}`,
    to: `+${user.phone}`,
    from: '+12065650583'
  })
};

module.exports = sendMessage;
