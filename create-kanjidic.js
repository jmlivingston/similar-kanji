const fs = require('fs')

const kanjidic = require('kanjidic')
const dump = kanjidic.toJSON()
fs.writeFileSync('kanjidic.json', JSON.stringify(dump, null, 2))
