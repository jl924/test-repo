const os = require('os')


//info about current user;

const user = os.userInfo()

console.log(user);

//system up time

console.log('system up time', os.uptime())


//currentOS

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)