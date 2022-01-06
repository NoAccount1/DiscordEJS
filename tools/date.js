module.exports = (t) => {
  let d = new Date(t);
  return dformat = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
}


// console.log(date(1641207489207))

module.exports