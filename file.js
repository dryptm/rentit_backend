var express = require("express");
var app = express();




const puppeteer = require('puppeteer');
let prop_details = [];
let properties_all = [];
let prpcnt = 0;

(async () => {
  var d = new Date();
  var n1 = d.getSeconds();

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
  });









  let bhk_count = [0, 1, 1, 1, 0, 0];
  let place = "tamil nadu";
  let url_count = 0;
  let url_count1 = 0;
  let place1 = "";
  let place2 = "";


  let w = place.split(" ");

  if (w.length > 1) {
    for (let x = 0; x < bhk_count.length; x++) {
      if (bhk_count[x] == 0) {
        prop_details[x] = [];
      } else if (bhk_count[x] == 1) {
        const page = await browser.newPage();
        page.setViewport({
          width: 0,
          height: 0
        });

        if (url_count == 0) {
          const search_string = " " + place + " rent " + (x + 1) + "bhk magicbricks"

          console.log("-x-x-x-x- start -x-x-x-x-x-x-")
          await page.goto("https://www.google.com/search?q=" + search_string);
          console.log("x-x-x-x-x- next -x-x-x-x-x")
          await page.evaluate(() => {
            document.querySelector('.DKV0Md').click()

          })
          // full page load wait
          await page.waitForNavigation({
            waitUntil: 'networkidle2',
          });
          place1 = await page.evaluate(() => {
            let x = document.URL.split("-")
            let l = x.length
            let pl = [];
            for (let i = 6; i < l - 1; i++) {
              pl.push(x[i])
            }
            place1 = pl.join("-")
            return place1;
          })

          var page_prop = await page.evaluate(() => {

            var numberofblocks = document.querySelectorAll(".m-srp-card").length;
            var property_details = [];

            for (let i = 0; i < numberofblocks; i++) {

              //redirect_url....................................

              if (document.querySelectorAll(".SRCard")[i] && document.querySelectorAll(".SRCard")[i].dataset.code) {
                var redirect_url = document.querySelectorAll(".SRCard")[i].dataset.code;
                var arr_urlx = redirect_url.split(',')
                var arr_urly = arr_urlx[1].split("'")
                redirect_url = arr_urly[1];
              } else {
                var redirect_url = "does not exist"
              }

              // bhk..................................
              var bhk = document.querySelectorAll(".m-srp-card__title__bhk")[i].innerText;
              var arr_bhk = bhk.split("");
              var arr1_bhk = arr_bhk[0];
              bhk = arr1_bhk;
              bhk = Number(bhk);
              //location........................   
              var location_prop = document.querySelectorAll(".m-srp-card__title")[i].innerText;
              //price..............................
              var c = document.querySelectorAll(".m-srp-card__info")[i].children[1].firstChild.data;
              var price = [];
              if (c.length > 10) {
                var res = c.split("           ");
                var str1 = res[5].split("");
                var arr = [];
                for (var j = 0; j < str1.length; j++) {
                  if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
                    arr.push(str1[j]);
                  }
                }
                var lack_check = arr[(arr.length) - 3] + arr[(arr.length) - 2] + arr[(arr.length) - 1]

                if (lack_check === "Lac") {
                  for (var j = 0; j < ((arr.length) - 3); j++) {
                    price.push(arr[j]);
                  }
                  price = (Number(price.join('')) * 100000);
                } else {
                  for (var j = 0; j < arr.length; j++) {
                    if (arr[j] !== ",") {
                      price.push(arr[j]);
                    }
                  }
                  price = Number(price.join(''));
                }
              } else {
                price = "Call for price";
              }
              //size................................
              var size = document.querySelectorAll(".m-srp-card__title")[i].innerText;

              if (Number(size.split(" ")[(size.split(" ").length) - 2]) % 1 == 0) {
                size = (size.split(" ")[(size.split(" ").length) - 2] + size.split(" ")[(size.split(" ").length) - 1]);

              } else {
                size = "unknown"
              }

              var object_property = {

                "redirect_url": redirect_url,
                "bhk": bhk,
                "location": location_prop,
                "price": price,
                "size": size
              };

              //picture.....................................
              if (document.querySelectorAll(".m-photo__fig")[i].firstElementChild && document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src) {
                object_property.picture = document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src;
              }

              property_details.push(object_property);
            }

            return property_details;

          })
          url_count++;
        } else {
          console.log("-x-x-x-x- start -x-x-x-x-x-x-")
          await page.goto("https://www.magicbricks.com/" + (x + 1) + "-bhk-flats-for-rent-in-" + place1 + "-pppfr");

          var page_prop = await page.evaluate(() => {

            var numberofblocks = document.querySelectorAll(".m-srp-card").length;
            var property_details = [];

            for (let i = 0; i < numberofblocks; i++) {

              //redirect_url....................................

              if (document.querySelectorAll(".SRCard")[i] && document.querySelectorAll(".SRCard")[i].dataset.code) {
                var redirect_url = document.querySelectorAll(".SRCard")[i].dataset.code;
                var arr_urlx = redirect_url.split(',')
                var arr_urly = arr_urlx[1].split("'")
                redirect_url = arr_urly[1];
              } else {
                var redirect_url = "does not exist"
              }

              // bhk..................................
              var bhk = document.querySelectorAll(".m-srp-card__title__bhk")[i].innerText;
              var arr_bhk = bhk.split("");
              var arr1_bhk = arr_bhk[0];
              bhk = arr1_bhk;
              bhk = Number(bhk);

              //location........................   
              var location_prop = document.querySelectorAll(".m-srp-card__title")[i].innerText;

              //price..............................
              var c = document.querySelectorAll(".m-srp-card__info")[i].children[1].firstChild.data;


              var price = [];

              if (c.length > 10) {
                var res = c.split("           ");
                var str1 = res[5].split("");
                var arr = [];
                for (var j = 0; j < str1.length; j++) {
                  if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
                    arr.push(str1[j]);
                  }
                }
                var lack_check = arr[(arr.length) - 3] + arr[(arr.length) - 2] + arr[(arr.length) - 1]

                if (lack_check === "Lac") {
                  for (var j = 0; j < ((arr.length) - 3); j++) {
                    price.push(arr[j]);
                  }
                  price = (Number(price.join('')) * 100000);
                } else {
                  for (var j = 0; j < arr.length; j++) {
                    if (arr[j] !== ",") {
                      price.push(arr[j]);
                    }
                  }
                  price = Number(price.join(''));
                }
              } else {
                price = "Call for price";
              }

              //size................................
              var size = document.querySelectorAll(".m-srp-card__title")[i].innerText;

              if (Number(size.split(" ")[(size.split(" ").length) - 2]) % 1 == 0) {
                size = (size.split(" ")[(size.split(" ").length) - 2] + size.split(" ")[(size.split(" ").length) - 1]);

              } else {
                size = "unknown"
              }



              var object_property = {

                "redirect_url": redirect_url,
                "bhk": bhk,
                "location": location_prop,
                "price": price,
                "size": size
              };

              //picture.....................................
              if (document.querySelectorAll(".m-photo__fig")[i].firstElementChild && document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src) {
                object_property.picture = document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src;
              }

              property_details.push(object_property);
            }

            return property_details;

          })

        }

        //////////////////////////99acers//////////////99acers//////////////////////////
        if (url_count1 == 0) {
          const search_string1 = "rent 99acres " + (x + 1) + " bhk " + place + " ";

          console.log("-x-x-x-x- start -x-x-x-x-x-x-")
          await page.goto("https://www.google.com/search?q=" + search_string1);
          console.log("x-x-x-x-x- next -x-x-x-x-x")
          await page.evaluate(() => {
            document.querySelector('.DKV0Md').click()

          })
          // full page load wait
          await page.waitForNavigation({
            waitUntil: 'networkidle2',
          });
          place2 = await page.evaluate(() => {
            let url = document.URL;
            let sp = url.split("-")
            let sp_l = sp.length
            let sp_arr = [];
            for (let i = 6; i < sp_l - 1; i++) {
              sp_arr.push(sp[i])
            }
            let p = sp_arr.join("-")

            return p;
          })


          var page_prop1 = await page.evaluate(() => {

            var numberofblocks = document.querySelectorAll(".srp").length;
            var property_details = [];

            for (let i = 0; i < numberofblocks; i++) {

              //redirect_url...................................
              let url_code = document.querySelectorAll(".srp")[i].outerHTML.split(" ")[4].split('"')[1];
              let redirect_url = "https://www.99acres.com/" + url_code;

              // bhk..................................
              let bhk = document.querySelectorAll(".srpTuple__spacer16 ")[(i * 3) + 2].innerText;
              bhk = Number(bhk.split(" ")[0]);

              //location........................   
              var location_prop = document.querySelectorAll(".srpTuple__tupleTable")[i].firstElementChild.firstElementChild.innerText;

              //price..............................
              let c = document.querySelectorAll(".srpTuple__spacer16 ")[i * 3].innerText

              var price = [];

              if (c.length > 10) {
                var res = c.split(" ");
                var str1 = res[1].split("");
                var arr = [];
                for (var j = 0; j < str1.length; j++) {
                  if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
                    arr.push(str1[j]);
                  }
                }
                var lack_check = res[2];

                if (lack_check === "Lac") {
                  price = (Number(res[1]) * 100000);
                } else {
                  for (var j = 0; j < arr.length; j++) {
                    if (arr[j] !== ",") {
                      price.push(arr[j]);
                    }
                  }
                  price = Number(price.join(''));
                }
              } else {
                price = "Call for price";
              }

              //size................................
              let size = document.querySelectorAll(".srpTuple__spacer16 ")[(i * 3) + 1].innerText;
              size = size.split(" ")[0] + size.split(" ")[1];



              var object_property = {

                "redirect_url": redirect_url,
                "bhk": bhk,
                "location": location_prop,
                "price": price,
                "size": size
              };

              //picture.....................................
              if (document.querySelectorAll(".srpTuple__tupleDetails ")[i] && document.querySelectorAll(".srpTuple__tupleDetails ")[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.attributes[0].value) {
                object_property.picture = document.querySelectorAll(".srpTuple__tupleDetails ")[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.attributes[0].value;
              }

              property_details.push(object_property);
            }

            return property_details;

          })
          page_prop = page_prop.concat(page_prop1);
          prop_details.push(page_prop)
          console.log(page_prop);
          url_count1++;
        } else {
          console.log("-x-x-x-x- start -x-x-x-x-x-x-")
          await page.goto("https://www.99acres.com/" + (x + 1) + "-bhk-residential-apartments-for-rent-in-" + (place2) + "-ffid");

          var page_prop1 = await page.evaluate(() => {

            var numberofblocks = document.querySelectorAll(".srp").length;
            var property_details = [];

            for (let i = 0; i < numberofblocks; i++) {

              //redirect_url...................................
              let url_code = document.querySelectorAll(".srp")[i].outerHTML.split(" ")[4].split('"')[1];
              let redirect_url = "https://www.99acres.com/" + url_code;

              // bhk..................................
              let bhk = document.querySelectorAll(".srpTuple__spacer16 ")[(i * 3) + 2].innerText;
              bhk = Number(bhk.split(" ")[0]);

              //location........................   
              var location_prop = document.querySelectorAll(".srpTuple__tupleTable")[i].firstElementChild.firstElementChild.innerText;

              //price..............................
              let c = document.querySelectorAll(".srpTuple__spacer16 ")[i * 3].innerText

              var price = [];

              if (c.length > 10) {
                var res = c.split(" ");
                var str1 = res[1].split("");
                var arr = [];
                for (var j = 0; j < str1.length; j++) {
                  if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
                    arr.push(str1[j]);
                  }
                }
                var lack_check = res[2];

                if (lack_check === "Lac") {
                  price = (Number(res[1]) * 100000);
                } else {
                  for (var j = 0; j < arr.length; j++) {
                    if (arr[j] !== ",") {
                      price.push(arr[j]);
                    }
                  }
                  price = Number(price.join(''));
                }
              } else {
                price = "Call for price";
              }

              //size................................
              let size = document.querySelectorAll(".srpTuple__spacer16 ")[(i * 3) + 1].innerText;
              size = size.split(" ")[0] + size.split(" ")[1];



              var object_property = {

                "redirect_url": redirect_url,
                "bhk": bhk,
                "location": location_prop,
                "price": price,
                "size": size
              };

              //picture.....................................
              if (document.querySelectorAll(".srpTuple__tupleDetails ")[i] && document.querySelectorAll(".srpTuple__tupleDetails ")[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.attributes[0].value) {
                object_property.picture = document.querySelectorAll(".srpTuple__tupleDetails ")[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.attributes[0].value;
              }

              property_details.push(object_property);
            }

            return property_details;

          })
          page_prop = page_prop.concat(page_prop1);
          prop_details.push(page_prop)
          console.log(page_prop);

        }


        //////////////////////////////////////////////////////////////////////



      }
      prpcnt = prpcnt + prop_details[x].length;

    }
  } else {
    for (let x = 0; x < bhk_count.length; x++) {
      if (bhk_count[x] == 0) {
        prop_details[x] = [];
      } else if (bhk_count[x] == 1) {
        const page = await browser.newPage();
        page.setViewport({
          width: 0,
          height: 0
        });

        console.log("-x-x-x-x- start -x-x-x-x-x-x-")
        await page.goto("https://www.magicbricks.com/" + (x + 1) + "-bhk-flats-for-rent-in-" + place + "-pppfr");

        var page_prop = await page.evaluate(() => {

          var numberofblocks = document.querySelectorAll(".m-srp-card").length;
          var property_details = [];

          for (let i = 0; i < numberofblocks; i++) {

            //redirect_url....................................

            if (document.querySelectorAll(".SRCard")[i] && document.querySelectorAll(".SRCard")[i].dataset.code) {
              var redirect_url = document.querySelectorAll(".SRCard")[i].dataset.code;
              var arr_urlx = redirect_url.split(',')
              var arr_urly = arr_urlx[1].split("'")
              redirect_url = arr_urly[1];
            } else {
              var redirect_url = "does not exist"
            }

            // bhk..................................
            var bhk = document.querySelectorAll(".m-srp-card__title__bhk")[i].innerText;
            var arr_bhk = bhk.split("");
            var arr1_bhk = arr_bhk[0];
            bhk = arr1_bhk;
            bhk = Number(bhk);

            //location........................   
            var location_prop = document.querySelectorAll(".m-srp-card__title")[i].innerText;

            //price..............................
            var c = document.querySelectorAll(".m-srp-card__info")[i].children[1].firstChild.data;


            var price = [];

            if (c.length > 10) {
              var res = c.split("           ");
              var str1 = res[5].split("");
              var arr = [];
              for (var j = 0; j < str1.length; j++) {
                if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
                  arr.push(str1[j]);
                }
              }
              var lack_check = arr[(arr.length) - 3] + arr[(arr.length) - 2] + arr[(arr.length) - 1]

              if (lack_check === "Lac") {
                for (var j = 0; j < ((arr.length) - 3); j++) {
                  price.push(arr[j]);
                }
                price = (Number(price.join('')) * 100000);
              } else {
                for (var j = 0; j < arr.length; j++) {
                  if (arr[j] !== ",") {
                    price.push(arr[j]);
                  }
                }
                price = Number(price.join(''));
              }
            } else {
              price = "Call for price";
            }

            //size................................
            var size = document.querySelectorAll(".m-srp-card__title")[i].innerText;

            if (Number(size.split(" ")[(size.split(" ").length) - 2]) % 1 == 0) {
              size = (size.split(" ")[(size.split(" ").length) - 2] + size.split(" ")[(size.split(" ").length) - 1]);

            } else {
              size = "unknown"
            }



            var object_property = {

              "redirect_url": redirect_url,
              "bhk": bhk,
              "location": location_prop,
              "price": price,
              "size": size
            };

            //picture.....................................
            if (document.querySelectorAll(".m-photo__fig")[i].firstElementChild && document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src) {
              object_property.picture = document.querySelectorAll(".m-photo__fig")[i].firstElementChild.dataset.src;
            }

            property_details.push(object_property);
          }

          return property_details;

        })
        console.log(page_prop);
        // -----------------------99acers------------------------------------------------99acers--------------------------------------------------

        console.log("-x-x-x-x- start -x-x-x-x-x-x-")
        await page.goto("https://www.99acres.com/" + (x + 1) + "-bhk-flats-for-rent-in-" + place + "-ffid");

        var page_prop1 = await page.evaluate(() => {

          var numberofblocks = document.querySelectorAll(".srp").length;
          var property_details = [];

          for (let i = 0; i < numberofblocks; i++) {

            //redirect_url...................................
            let url_code = document.querySelectorAll(".srp")[i].outerHTML.split(" ")[4].split('"')[1];
            let redirect_url = "https://www.99acres.com/" + url_code;

            // bhk..................................
            let bhk = document.querySelectorAll(".srpTuple__spacer16 ")[(i * 3) + 2].innerText;
            bhk = Number(bhk.split(" ")[0]);

            //location........................   
            var location_prop = document.querySelectorAll(".srpTuple__tupleTable")[0].firstElementChild.firstElementChild.innerText;

            //price..............................
            let c = document.querySelectorAll(".srpTuple__spacer16 ")[i * 3].innerText

            var price = [];

            if (c.length > 10) {
              var res = c.split(" ");
              var str1 = res[1].split("");
              var arr = [];
              for (var j = 0; j < str1.length; j++) {
                if (str1[j] !== "\t" && str1[j] !== " " && str1[j] !== "\n") {
                  arr.push(str1[j]);
                }
              }
              var lack_check = res[2];

              if (lack_check === "Lac") {
                price = (Number(res[1]) * 100000);
              } else {
                for (var j = 0; j < arr.length; j++) {
                  if (arr[j] !== ",") {
                    price.push(arr[j]);
                  }
                }
                price = Number(price.join(''));
              }
            } else {
              price = "Call for price";
            }

            //size................................
            let size = document.querySelectorAll(".srpTuple__spacer16 ")[(i * 3) + 1].innerText;
            size = size.split(" ")[0] + size.split(" ")[1];



            var object_property = {

              "redirect_url": redirect_url,
              "bhk": bhk,
              "location": location_prop,
              "price": price,
              "size": size
            };

            //picture.....................................
            if (document.querySelectorAll(".srpTuple__tupleDetails ")[i] && document.querySelectorAll(".srpTuple__tupleDetails ")[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.attributes[0].value) {
              object_property.picture = document.querySelectorAll(".srpTuple__tupleDetails ")[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.attributes[0].value;
            }

            property_details.push(object_property);
          }

          return property_details;

        })
        page_prop = page_prop.concat(page_prop1);
        prop_details.push(page_prop)
        console.log(page_prop);





      }
      prpcnt = prpcnt + prop_details[x].length;

    }
  }







  console.log(prpcnt + " properties searched.")


  var d = new Date();
  var n2 = d.getSeconds();
  if ((n2 - n1) < 0) {
    console.log((60 + (n2 - n1)) + " seconds taken to load.");
  } else {
    console.log(((n2 - n1)) + " seconds taken to load.");
  }


  // await browser.close();
  for (let i = 0; i < 6; i++) {
    let l = prop_details[i].length;
    if (l != 0) {
      for (let j = 0; j < l; j++) {
        properties_all.push(prop_details[i][j])
      }
    }
  }
})();





app.get("/", (req, res) => {
  res.send(properties_all)
})




app.listen(process.env.PORT || 3000, function () {
  console.log("server started at 3000");
});