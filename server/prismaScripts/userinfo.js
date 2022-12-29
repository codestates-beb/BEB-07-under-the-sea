const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (data) => {
  try {
    const { wallet_address } = data;
    //console.log(wallet_address);
    const createRes = await prisma.userInfo.create({
      data: {
        wallet_address: wallet_address[0],
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

const updateProfileImg = async (data) => {
  try{
    const { wallet_address, profile_img } = data
    const updateRes = await prisma.userInfo.update({
      where: { wallet_address },
      data: { profile_img }
    });
    //console.log(updateRes)
    return updateRes
  }catch(err){
    console.log(err)
  }
}

const updateBackgroundImg = async (data) => {
  try{
    const { wallet_address, background_img } = data
    const updateRes = await prisma.userInfo.update({
      where: { wallet_address },
      data: { background_img }
    });
    //console.log(updateRes)
    return updateRes
  }catch(err){
    console.log(err)
  }
}

const updateUsername = async (data) => {
  try{
    const { wallet_address, username } = data
    const updateRes = await prisma.userInfo.update({
      where: { wallet_address },
      data: { username }
    });
    //console.log(updateRes)
    return updateRes
  }catch(err){
    console.log(err)
  }
}


// createUser({username: 'hyuntae', wallet_address: '0x123'})
// readUserByAddress('0x123')
// updateProfileImg({wallet_address: "0x123", profile_img: "www.naver.com"});
// updateUsername({wallet_address: "0x123", username: "kht"})

module.exports = {
  createUser,
  readUserByAddress,
  updateProfileImg,
  updateBackgroundImg,
  updateUsername
};