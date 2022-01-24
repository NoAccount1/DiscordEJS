export default (str: string, color: string) => {
  String(str);
  if (color.toString()[0] == "#") {
    let c: string = color.toString();
    let r: number = parseInt(c.substring(1, 3), 16);
    let g: number = parseInt(c.substring(3, 5), 16);
    let b: number = parseInt(c.substring(5, 7), 16);
    str = "\x1b[38;2;" + r + ";" + g + ";" + b + "m" + str + "\x1b[0m";
  } else {
    switch (color) {
      case "black":
      case "bk":
        str = "\x1b[30m" + str + "\x1b[0m";
        break;
      case "red":
      case "r":
        str = "\x1b[31m" + str + "\x1b[0m";
        break;
      case "green":
      case "g":
        str = "\x1b[32m" + str + "\x1b[0m";
        break;
      case "yellow":
      case "y":
        str = "\x1b[33m" + str + "\x1b[0m";
        break;
      case "blue":
      case "b":
        str = "\x1b[34m" + str + "\x1b[0m";
        break;
      case "magenta":
        str = "\x1b[35m" + str + "\x1b[0m";
        break;
      case "cyan":
      case "c":
        str = "\x1b[36m" + str + "\x1b[0m";
        break;
      case "white":
      case "w":
        str = "\x1b[37m" + str + "\x1b[0m";
        break;
      default:
        str = "\x1b[m" + str + "\x1b[0m";
        break;
    }
  }
  return str;
};

/* Reset = '\x1b[0m'
Bright = '\x1b[1m'
Dim = '\x1b[2m'
Underscore = '\x1b[4m'
Blink = '\x1b[5m'
Reverse = '\x1b[7m'
Hidden = '\x1b[8m'

FgBlack = '\x1b[30m'
FgRed = '\x1b[31m'
FgGreen = '\x1b[32m'
FgYellow = '\x1b[33m'
FgBlue = '\x1b[34m'
FgMagenta = '\x1b[35m'
FgCyan = '\x1b[36m'
FgWhite = '\x1b[37m'

BgBlack = '\x1b[40m'
BgRed = '\x1b[41m'
BgGreen = '\x1b[42m'
BgYellow = '\x1b[43m'
BgBlue = '\x1b[44m'
BgMagenta = '\x1b[45m'
BgCyan = '\x1b[46m'
BgWhite = '\x1b[47m'
*/
