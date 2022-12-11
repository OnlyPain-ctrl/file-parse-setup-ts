import { parse } from './data/parse'
import fs from 'fs'

init()

async function init() {
    const input = await getFile()
    writeOut(await parse(input))
}

async function getFile() {
    return fs.readFileSync('./data/input.txt', 'utf8')
}

async function writeOut(data: string) {
    const timestamp = Math.floor(Date.now() / 1000)

    if (!fs.existsSync('./data')) fs.mkdirSync('./data')

    if (fs.existsSync('./data/output.txt')) {
        if (!fs.existsSync('./data/old')) fs.mkdirSync('./data/old')
        fs.renameSync(
            './data/output.txt',
            './data/old/output_' + timestamp + '.txt'
        )
    }

    fs.writeFileSync('./data/output.txt', data)
}
