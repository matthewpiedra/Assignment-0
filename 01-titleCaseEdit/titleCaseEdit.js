function titleCaseEdit(title) {
  // Insert code here;
  let string = title[0].toUpperCase();
  for(let i=1;i<title.length;i++) {
     if(title[i] === " ") {
        string+=" " + title[i+1].toUpperCase();
     }
     else if(title[i-1] === " ") {
        continue;
     }
     else {
        string+=title[i];
     }
  }

  return string;
}

// Do not edit this line;
module.exports = titleCaseEdit;