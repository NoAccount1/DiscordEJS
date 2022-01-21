const drawBox = async (customText) => {
  let consoleX = process.stdout.rows;
  let consoleY = process.stdout.columns;
  if (customText) {
    customText.substring(consoleX - 2);
    var rowUp = customText + '─'.repeat(consoleX - (2 + customText.length));
    var rowDown = '─'.repeat(consoleX - 2);
  } else {
    var rowUp = '─'.repeat(consoleX - 2);
    var rowDown = '─'.repeat(consoleX - 2);
  }
  let spaces = ' '.repeat(consoleX - 2);
  let box = '┌' + rowUp + '┐' + '\n│' + spaces + '│\n' + '└' + rowDown + '┘';
  let cursPos = (-1 * consoleX) + 2;
  process.stdout.write(box);
  process.stdout.moveCursor(cursPos, -1);
};

const clearBox = async () => {
  process.stdout.moveCursor(0, 0);
  process.stdout.clearLine();
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine();
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine();
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine();
  process.stdout.moveCursor(-2, 1);
}

const refreshBox = () => {
  clearBox();
  drawBox();
}

const date = (t) => {
  let d = new Date(t);
  return dformat = [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
}

const color = (str, color) => {
  String(str)
  if (color.toString()[0] == "#") {
    c = color.toString();
    let r = parseInt(c.substring(1, 3), 16);
    let g = parseInt(c.substring(3, 5), 16);
    let b = parseInt(c.substring(5, 7), 16);
    str = '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' + str + '\x1b[0m'
  } else {
    switch (color) {
      case "black": case "bk": str = '\x1b[30m' + str + '\x1b[0m'; break;
      case "red": case "r": str = '\x1b[31m' + str + '\x1b[0m'; break;
      case "green": case "g": str = '\x1b[32m' + str + '\x1b[0m'; break;
      case "yellow": case "y": str = '\x1b[33m' + str + '\x1b[0m'; break;
      case "blue": case "b": str = '\x1b[34m' + str + '\x1b[0m'; break;
      case "magenta": str = '\x1b[35m' + str + '\x1b[0m'; break;
      case "cyan": case "c": str = '\x1b[36m' + str + '\x1b[0m'; break;
      case "white": case "w": str = '\x1b[37m' + str + '\x1b[0m'; break;
      default: str = '\x1b[m' + str + '\x1b[0m'; break;
    }
  }
  return str
}

module.exports = {
  color, date, drawBox, clearBox, refreshBox
}

/*
if (color.toString()[0] == "#") {}
function hexToRGB(color) {
  color = color.toString();
  var r = parseInt(color.substring(1, 3), 16);
  var g = parseInt(color.substring(3, 5), 16);
  var b = parseInt(color.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
} */
/* Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

console.log('\x1b[46m\x1b[4m%s\x1b[0m\x1b[0m', 'I am cyan');
*/