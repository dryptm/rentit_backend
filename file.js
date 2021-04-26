const puppeteer = require('puppeteer');

var arr = [];
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  page.setViewport({
    width: 0,
    height: 0
  });


 
  var l;
  var link, data_code, data, square_ft, sq, vr, chk, c, b, d, price, dat;


  const search_string = "lucknow rent 3bhk"

  console.log("-x-x-x-x- start -x-x-x-x-x-x-")
  await page.goto("https://www.google.com/search?q=" + search_string);
  console.log("x-x-x-x-x- next -x-x-x-x-x")
  await page.evaluate(() => {
    document.querySelector('.DKV0Md').click()

  })





  //later change delay
  //---------------------------
  function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time)
    });
  }
  await delay(4000);
  //-------------------------------------





  console.log(arr);
  await page.evaluate(() => {

    console.log(arr);

    l = document.querySelectorAll(".SRCard").length;
  

    for (var i = 0; i < l; i++) {
      c = document.querySelectorAll(".SRCard")[i].innerText; //innertext
      b = c.split("\n");
      d = b[4];
      d = d.substring(1);
      d = d.replace(',', '');
      d = d.replace(' ', '');
      d = Number(d);
      price = d;

      dat = b[3];
      dat = dat.replace("Posted:", '');
      dat = dat.substring(1);

      sq = b[6];
      vr = sq.split(" ");
      chk = vr.find(function (val) {
        return val === "sqft"
      })
      square_ft = 0;
      if (chk === "sqft") {
        square_ft = Number(vr[vr.length - 2])
      } else {
        //wrong desc
      }


      data_code = document.querySelectorAll(".SRCard")[i].dataset.code; //dataset.code
      data_code = data_code.replace("openDetailPage(event, ", "");
      data_code = data_code.replace(");", "");
      data = data_code.split(',');
      link = data[0];
      link = link.replace("'", '');
      link = link.replace("'", '');
      //var sum_up={price:price, dat:dat, square_ft:square_ft, link:link}
      var sum_up = [price, dat, square_ft, link]
      arr.push(sum_up);

      alert(arr[i])
    }
  })


  alert(arr[0].price)

  // for (var i = 0; i < l; i++) {
  console.log(arr[0])
  // }





  //  await browser.close();
})();


