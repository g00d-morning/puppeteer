// const puppeteer = require('puppeteer');
// const fs = require('fs');

// let scrape = async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://m.4008823823.com.cn/');
//   const length = await page.evaluate(() => {
//     return document.querySelectorAll('#sectionLeft > li').length
//   })

//   //有一处坑  .product:nth-child(2)这个的索引是从2开始计数
//    //找到问题所在了  :nth-of-type()

//   for(let i = 1; i<=length; i++) {
//     let len = await page.evaluate((i) => {
//       return document.querySelectorAll(`.scroll-tab-content > dl:nth-of-type(${i}) > .product`).length
//     }, i)
//     console.log('当前项的子项:'+len)
//     console.log('---------------')
//     for(let j = 1; j<=len; j++){
//     //   await page.click(`#sectionLeft > li:nth-of-type(${i})`)
//       await page.waitFor(`#section > div > dl:nth-of-type(${i}) > .product:nth-of-type(${j}`)
//       await page.hover(`#section > div > dl:nth-of-type(${i}) > .product:nth-of-type(${j})`);
//     }  
//   }
// await page.waitFor(2000);  


//   const result = await page.evaluate(() => {
//     let blockList = [...document.querySelectorAll('#sectionLeft > li')].map(item => {
//       let blockName = item.querySelector('p').innerText;
//       let blockSrc = item.querySelector('.icon > img').src;
//       return {
//         blockName,
//         blockSrc,
//       }
//     })
//      let menu = [...document.querySelectorAll('.scroll-tab-content > dl')].map(item => {
//          let dt = item.firstChild.innerText;
//          let product = [...item.getElementsByClassName('product flex')].map(i => {
//             //  let arr = []
//             //     arr.push({
//             //       [i.querySelector('.desc > .name').innerText]: i.firstChild.src})
//             return {
//               productName: i.querySelector('.desc > .name').innerText,
//               productImg: i.firstChild.src
//             }           
//          });
//       return  {
//           blockName: dt,
//           product,
//       }
//     })
//     return {
//       menu,
//       blockList
//     }
// });
//   browser.close();
//   return result;
// };

// scrape().then((value) => {
//   console.log(value); // Success!
//   let jsonedValue = JSON.stringify(value);
//   // let jsonedValue = JSON.parse(JSON.stringify(value));
//   console.log("准备写入文件");
// fs.writeFile('./data/result2.json', jsonedValue,  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("--------我是分割线-------------")
//    console.log("读取写入的数据！");
//    fs.readFile('./data/result2.json', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });
// });
