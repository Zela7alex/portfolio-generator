//slice first 3 items of argvs not needed AND THEN returns only the arguments left over through argv.length ---- this creates a different array from process.argv's original data
const profileDataArgs = process.argv.slice(2, process.argv.length)

