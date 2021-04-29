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


    var bhk = document.querySelector(".m-srp-card__title__bhk").innerText;
   
//location........................   
    var location = document.querySelector(".m-srp-card__title").innerText;


//price..............................
    var c = document.querySelector(".m-srp-card__price").innerText;
    var res = c.split("           ");
    var str1 = res[5].split("");
    var arr = [];
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== "\t" && str1[i] !== " " && str1[i] !== "\n") {
        arr.push(str1[i]);
      }
    }
    var price = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== ",") {
        price.push(arr[i]);
      }
    }
    price = Number(price.join(''))




//sqrt................................
    var sqrt = document.querySelector("#propertyArea52465999").value
    var sqrt_split = sqrt.split('')
    var arr_sqrt = []
    for (var i = 0; i < sqrt_split.length; i++) {
      if (sqrt_split[i] !== "s" && sqrt_split[i] !== "q" && sqrt_split[i] !== "f" && sqrt_split[i] !== "t" && sqrt_split[i] !== " ") {
        arr_sqrt.push(sqrt_split[i])
      }
    }
    sqrt = Number(arr_sqrt.join(''))






    // for (var i = 0; i < l; i++) {
    //   c = document.querySelectorAll(".SRCard")[i].innerText; //innertext
    //   b = c.split("\n");
    //   d = b[4];
    //   d = d.substring(1);
    //   d = d.replace(',', '');
    //   d = d.replace(' ', '');
    //   d = Number(d);
    //   price = d;

    //   dat = b[3];
    //   dat = dat.replace("Posted:", '');
    //   dat = dat.substring(1);

    //   sq = b[6];
    //   vr = sq.split(" ");
    //   chk = vr.find(function (val) {
    //     return val === "sqft"
    //   })
    //   square_ft = 0;
    //   if (chk === "sqft") {
    //     square_ft = Number(vr[vr.length - 2])
    //   } else {
    //     //wrong desc
    //   }


    //   data_code = document.querySelectorAll(".SRCard")[i].dataset.code; //dataset.code
    //   data_code = data_code.replace("openDetailPage(event, ", "");
    //   data_code = data_code.replace(");", "");
    //   data = data_code.split(',');
    //   link = data[0];
    //   link = link.replace("'", '');
    //   link = link.replace("'", '');
    //   //var sum_up={price:price, dat:dat, square_ft:square_ft, link:link}
    //   var sum_up = [price, dat, square_ft, link]
    //   arr.push(sum_up);

    //   alert(arr[i])
    // }
  })


  alert(arr[0].price)

  // for (var i = 0; i < l; i++) {
  console.log(arr[0])
  // }





  //  await browser.close();
})();