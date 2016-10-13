require('./helper')
let path = require('path')
let fs = require('fs').promise
let Promise = require("songbird")

async function ls(dir) {
    let lsPromise = []
    let stat = await fs.promise.stat(dir)
    if(!fs.access(dir)){
        return null
    } else {
        if(!stat.isDirectory()){
            // process.stdout.write(dir + "\n")
            return dir
        }else {
            // Use 'await' inside 'async function's
            let fileNames = await fs.readdir(dir)
            // console.log(fileNames)
            fileNames.forEach(function(element) {
                let temp = path.join(dir, element)
                let promise = ls(temp)
                lsPromise.push(promise)
            }, this);
        }
    }

    return Promise.all(lsPromise)
}


module.exports = ls