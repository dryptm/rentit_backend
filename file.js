const puppeteer = require('puppeteer');

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




  // full page load wait
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });



  var page_prop = await page.evaluate(() => {

    var numberofblocks = document.querySelectorAll(".m-srp-card").length;
    var property_details = [];

    for (var i = 0; i < numberofblocks; i++) {
      
      //url
      var pic_url=document.querySelectorAll(".m-photo__img")[i].src;


      
      
      // bhk
      var bhk = document.querySelectorAll(".m-srp-card__title__bhk")[i].innerText;
      var arr_bhk = bhk.split("");
      var arr1_bhk = arr_bhk[0];
      bhk = arr1_bhk;
      bhk = Number(bhk);




      //location........................   
      var location_prop = document.querySelectorAll(".m-srp-card__title")[i].innerText;


      //price..............................
      var c = document.querySelectorAll(".m-srp-card__price")[i].innerHTML;
      var res = c.split("           ");
      var str1 = res[5].split("");
      var arr = [];
      for (var j = 0; j < str1.length; j++) {
        if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
          arr.push(str1[j]);
        }
      }
      var price = [];
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] !== ",") {
          price.push(arr[j]);
        }
      }
      price = Number(price.join(''));



      //sqrt................................
      var sqrt = document.querySelectorAll(".m-srp-card__title")[i].innerText;


      sqrt = Number(sqrt.split(" ")[(sqrt.split(" ").length) - 2])




      var object_property = {
        "picture":pic_url,
        "bhk": bhk,
        "location": location_prop,
        "price": price,
        "sqrt": sqrt
      };

      property_details.push(object_property);
    }
    return property_details;


  })

  console.log(page_prop);





  //  await browser.close();
})();