const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (data) => {
  try {
    const { username, wallet_address } = data;
    const createRes = await prisma.userInfo.create({
      data: {
        username,
        wallet_address,
      },
    });
    return createRes
  }catch(err){
    console.log(err)
  }
};

const readUserByAddress = async (wallet_address) => {
  try{
    const readRes = await prisma.userInfo.findUnique({
      where: {
        wallet_address: wallet_address,
      },
    });
    //console.log(readRes)
    return readRes
  }catch(err){
    console.log(err)
  }
}

// createUser({username: 'hyuntae', wallet_address: '0x123'})
// readUserByAddress('0x123')

module.exports = {
  createUser,
  readUserByAddress
};