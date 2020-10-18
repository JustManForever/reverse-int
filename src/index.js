module.exports = function reverse (int) {
  let a =  Array.from("" + Math.abs(int)).reverse();
    console.log(a)
    if(a.indexOf('0') === 0) {
        a.shift()
    }

    return Number.parseInt(a.join(''))
}
