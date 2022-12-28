const express = require('express');
const { readUserByAddress } = require('../prismaScripts/userinfo');

module.exports = {

  readUserByAddress: async (req, res) => { // req는 {wallet_address: "지갑주소"} 형태이어야 한다.
    try{
      const address = req.params.address;
      console.log(address)
      const readRes = await readUserByAddress(address);
      console.log(readRes)
      return res.status(200).send(readRes) // res.body에 json 형태로 반환.
    }catch(err){
      console.log(err)
    };
  }
}