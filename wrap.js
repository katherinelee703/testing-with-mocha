const wrap = (line, maxLen) => {
  if (line.indexOf(maxLen)) {
    if (line.length > maxLen) {
      let finalLines = "";
      for (let i = 0; i < line.length; i++) {
        let char = line[i];
        if (i % maxLen === 0 && i !== 0) {
          finalLines += "\n";
        }
        finalLines += char;
      }
      return finalLines;
    }
  }
  return line;
};

// function wrap(line, maxLen) {
//   if (line.length <= maxLen) {
//     return line;
//   }
//   const indexOfBlank = line.lastIndexOf(" ", maxLen);
//   let split;
//   let offset;
//   if (indexOfBlank > -1) {
//     split = indexOfBlank;
//     offset = 1;
//   } else {
//     split = maxLen;
//     offset = 0;
//   }
//   return (
//     line.substring(0, split) +
//     "\n" +
//     wrap(line.substring(split + offset), maxLen)
//   );
// }
module.exports = wrap;
