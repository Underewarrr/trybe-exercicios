let lines = []
lineReader.eachLine('./movies.txt', lines.push)

Promise.all(lines.map(getMovie)).then(console.log)
