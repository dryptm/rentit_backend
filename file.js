var express = require("express");
var app = express();




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

  console.log

  var page_prop = await page.evaluate(() => {

    var numberofblocks = document.querySelectorAll(".m-srp-card").length;
    var property_details = [];

    for (let i = 0; i < numberofblocks; i++) {

      //url....................................
      // var pic_url;
      // if (document.querySelectorAll(".m-photo__img")[i]==undefined) {
      //   pic_url = "";
      //   return;
      // }
      // else{
      //   pic_url = document.querySelectorAll(".m-photo__img")[i].src;
      // }




      // bhk..................................
      var bhk = document.querySelectorAll(".m-srp-card__title__bhk")[i].innerText;
      var arr_bhk = bhk.split("");
      var arr1_bhk = arr_bhk[0];
      bhk = arr1_bhk;
      bhk = Number(bhk);




      //location........................   
      var location_prop = document.querySelectorAll(".m-srp-card__title")[i].innerText;


      //price..............................
      var c = document.querySelectorAll(".m-srp-card__price")[(i * 2) + 1].innerHTML;
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
      var sqft = document.querySelectorAll(".m-srp-card__title")[i].innerText;


      sqft = Number(sqft.split(" ")[(sqft.split(" ").length) - 2])




      var object_property = {
        "bhk": bhk,
        "location": location_prop,
        "price": price,
        "sqft": sqft
      };
      if (document.querySelectorAll(".m-photo__fig")[i].firstElementChild && document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src) {
        object_property.picture = document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src;
      }

      property_details.push(object_property);
    }

    return property_details;

  })
  var myJsonproperty = JSON.stringify(page_prop);
  console.log(page_prop);
  await browser.close();
  app.get("/", (req, res) => {
    res.send(myJsonproperty)
  })
})();





app.listen(process.env.PORT || 3000, function () {
  console.log("server started at 3000");
});