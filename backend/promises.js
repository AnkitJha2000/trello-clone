const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      else {
        resolve(data)
      }
    });
  });
};

// getText('./content/text1.txt').then(data => {
//     console.log(data)
//     return getText('./content/text2.txt')
// }).then( data => {
//     console.log(data)
// }).catch(err => console.log(err))

const res = async () => {
  console.log("yooy")
  const temp = await getText('./content/text1.txt')
  console.log(temp)
}
res()

