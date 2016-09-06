'use strict'
import http from 'http'
import request from 'request'
import { matchHex, compose, take} from './utils'
import config from './config'

const getColor = (time) => {
  return new Promise((resolve, reject) => {
    request(config, (err,res,body) => {
      if(err){
        reject(err);return
      }
      resolve(body)
    })
  }).then(data => matchHex(24)(data)).then(hex => take(time,hex))
}

const color = async(time=1) => {
  let rawdata = await getColor(time)
  rawdata.map(o => {
    console.log(matchHex(6)(o))
  })
}

export default color
