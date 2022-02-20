const express = require('express')
const config = require('config')
const mongoose = require('mongoose');

const app = express()
const PORT = config.get('port') || 8080
const user = require('../models/user')

async function start() {
    try {
        await mongoose.connect(config.get('mongooseUrl'))
        console.log('database connected')
    } catch (e) {
        //TODO Обработать правильно ошибку.
    }
}

start()