import { parse } from './data/parse'
import fs from 'fs'

getFile().then((i) => parse(i).then((o) => writeOut(o)))

async function getFile() {
    console.time('time')

    return fs.readFileSync('./data/input.txt', 'utf8')
}

async function writeOut(data: string) {
    if (!fs.existsSync('./data')) fs.mkdirSync('./data')

    if (fs.existsSync('./data/output.txt')) {
        if (!fs.existsSync('./data/old')) fs.mkdirSync('./data/old')
        fs.renameSync(
            './data/output.txt',
            './data/old/output_' + Math.floor(Date.now() / 1000) + '.txt'
        )
    }

    fs.writeFileSync('./data/output.txt', data)

    console.timeEnd('time')
}
