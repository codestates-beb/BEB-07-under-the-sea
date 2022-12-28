const express = require('express');
const { readUserByAddress, createUser, updateProfileImg, updateBackgroundImg, updateUsername } = require('../prismaScripts/userinfo');

module.exports = {

  readUserByAddress: async (req, res) => { // req는 {wallet_address: "지갑주소"} 형태이어야 한다.
    try{
      const address = req.params.address; // 0x123
      console.log(address)
      const readRes = await readUserByAddress(address);
      console.log(readRes)
      return res.status(200).send(readRes) // res.body에 json 형태로 반환.
    }catch(err){
      console.log(err)
    };
  },

  createUser: async (req, res) => {
    try{
      const body = req.body; // { wallet_address: '0x456' }
      console.log(body);
      const createRes = await createUser(body);
      console.log(createRes)
      return res.status(200).send(createRes)
    }catch(err){
      console.log(err)
    }
  },

  updateProfileImg: async (req, res) => {
    try{
      const body = req.body; // { wallet_address: '0x123', profile_img: 'www.daum.net' }
      console.log(body);
      const updateRes = await updateProfileImg(body);
      console.log(updateRes);
      return res.status(200).send(updateRes)
    }catch(err){
      console.log(err)
    }
  },

  updateBackgroundImg: async (req, res) => { // { wallet_address: '0x123', background_img: 'www.apple.com' }
    try{
      const body = req.body;
      console.log(body);
      const updateRes = await updateBackgroundImg(body);
      console.log(updateRes);
      return res.status(200).send(updateRes)
    }catch(err){
      console.log(err)
    }
  },

  updateUsername: async (req, res) => { // { wallet_address: '0x123', username: 'jmt' }
    try{
      const body = req.body;
      console.log(body);
      const updateRes = await updateUsername(body);
      console.log(updateRes);
      return res.status(200).send(updateRes)
    }catch(err){
      console.log(err)
    }
  }
}