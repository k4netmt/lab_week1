#!/usr/bin/env babel-node

let path = require('path')
let yargs = require('yargs').default('dir', __dirname)
    .argv
let ls = require("./ls.js")
let flatten = require("flatten")
let dir = yargs.dir;

ls(dir).then(function (data) {
    {
        let temp = flatten(data)
        temp.forEach(function (element) {
            console.log(element)
        }, this);
    }
})
