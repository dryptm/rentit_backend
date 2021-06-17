const express = require("express")
const app = express()
const puppeteer = require('puppeteer')
// (async () => {
//     const browser = await puppeteer.launch({
//         headless: false,
//         args: ['--start-maximized']
//     });
//     const page = await browser.newPage();
//     page.setViewport({
//         width: 0,
//         height: 0
//     });


//     await browser.close();
// })();

// let bhk_count = [1, 1, 1, 1, 1, 1]
let bhk_count = [0, 1, 1, 0, 0, 0];
let place = "tamil nadu";

var d = new Date();
var n1 = d.getSeconds();
var all_prop = []
var merged = []

for (let x = 0; x < bhk_count.length; x++) {
    if (bhk_count[x] == 1) {
        let w = place.split(" ");

        if (w.length > 1) {
            async function big() {
                // magicbricks---------------------------------------------------
                async function f1() {
                    const browser = await puppeteer.launch({
                        headless: false,
                        args: ['--start-maximized']
                    });
                    const page = await browser.newPage();
                    page.setViewport({
                        width: 0,
                        height: 0
                    });

                    const search_string = " " + place + " rent " + (x + 1) + "bhk magicbricks"

                    console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                    await page.goto("https://www.google.com/search?q=" + search_string);
                    console.log("x-x-x-x-x- next -x-x-x-x-x")
                    await page.evaluate(() => {
                        document.querySelector('.DKV0Md').click()

                    })
                    // full page load wait
                    await page.waitForNavigation();

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
                    // console.log(page_prop)


                    var d = new Date();
                    var n2 = d.getSeconds();
                    if ((n2 - n1) < 0) {
                        console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from magicbricks in " + place);
                    } else {
                        console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from magicbricks in " + place);
                    }

                    await browser.close();
                    return page_prop
                }
                // 99acers-----------------------------------------------------------------
                async function f2() {
                    const browser = await puppeteer.launch({
                        headless: false,
                        args: ['--start-maximized']
                    });
                    const page = await browser.newPage();
                    page.setViewport({
                        width: 0,
                        height: 0
                    });
                    const search_string1 = "rent 99acres " + (x + 1) + " bhk " + place + " ";

                    console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                    await page.goto("https://www.google.com/search?q=" + search_string1);
                    console.log("x-x-x-x-x- next -x-x-x-x-x")
                    await page.evaluate(() => {
                        document.querySelector('.DKV0Md').click()

                    })
                    // full page load wait
                    await page.waitForNavigation();

                    var page_prop = await page.evaluate(() => {

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
                    // console.log(page_prop)



                    var d = new Date();
                    var n2 = d.getSeconds();
                    if ((n2 - n1) < 0) {
                        console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from 99acers in " + place);
                    } else {
                        console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from 99acers in " + place);
                    }

                    await browser.close();
                    return page_prop
                }
                //housing.com----------------------------------------------------------------
                async function f3() {
                    const browser = await puppeteer.launch({
                        headless: false,
                        args: ['--start-maximized']
                    });
                    const page = await browser.newPage();
                    page.setViewport({
                        width: 0,
                        height: 0
                    });
                    var h;
                    if (x == 3 || x == 4 || x == 5) {
                        h = 3
                        const search_string1 = "rent housing.com " + (h + 1) + " bhk " + place + " ";

                        console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                        await page.goto("https://www.google.com/search?q=" + search_string1);
                        console.log("x-x-x-x-x- next -x-x-x-x-x")
                        await page.evaluate(() => {
                            document.querySelector('.DKV0Md').click()

                        })
                        // full page load wait
                        await page.waitForNavigation();

                        var page_prop = await page.evaluate(() => {

                            var numberofblocks = document.querySelectorAll(".results-wrapper")[0].childNodes.length;
                            var property_details = [];
                            for (let i = 0; i < numberofblocks; i++) {
                                if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0]) {
                                    if (document.querySelectorAll(".results-wrapper")[0].childNodes[i].localName == "article") {
                                        //redirect_url...................................

                                        let redirect_url = "https://housing.com/rent/search-" + document.URL.split("-")[document.URL.split("-").length - 1] + "?listingId=" + document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0].value

                                        // bhk..................................
                                        let bhk = Number(document.querySelectorAll(".results-wrapper")[0].childNodes[i].firstChild.childNodes[1].childNodes[0].childNodes[2].childNodes[0].innerText.split(" ")[0].split("\n")[0])

                                        //location........................   

                                        var location_prop = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[3].childNodes[0].innerText;


                                        //price..............................
                                        var price = ""
                                        var pr = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText
                                        var prsp = pr.split(",")
                                        for (var j = 0; j < prsp.length; j++) {
                                            price = price + prsp[j]
                                        }
                                        price = Number(price)

                                        //size................................
                                        let size = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[4].childNodes[1].innerText





                                        var object_property = {

                                            "redirect_url": redirect_url,
                                            "bhk": bhk,
                                            "location": location_prop,
                                            "price": price,
                                            "size": size
                                        };

                                        //picture.....................................
                                        if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc) {
                                            object_property.picture = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc;
                                        }
                                    }
                                }
                                property_details.push(object_property);
                            }



                            return property_details;

                        })
                        // console.log(page_prop)



                        var d = new Date();
                        var n2 = d.getSeconds();
                        if ((n2 - n1) < 0) {
                            console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        } else {
                            console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        }


                        await browser.close();
                    } else {
                        h = x
                        const search_string1 = "rent housing.com " + (h + 1) + " bhk " + place + " ";

                        console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                        await page.goto("https://www.google.com/search?q=" + search_string1);
                        console.log("x-x-x-x-x- next -x-x-x-x-x")
                        await page.evaluate(() => {
                            document.querySelector('.DKV0Md').click()

                        })
                        // full page load wait
                        await page.waitForNavigation();

                        var page_prop = await page.evaluate(() => {

                            var numberofblocks = document.querySelectorAll(".results-wrapper")[0].childNodes.length;
                            var property_details = [];
                            for (let i = 0; i < numberofblocks; i++) {
                                if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0]) {
                                    if (document.querySelectorAll(".results-wrapper")[0].childNodes[i].localName == "article") {
                                        //redirect_url...................................

                                        let redirect_url = "https://housing.com/rent/search-" + document.URL.split("-")[document.URL.split("-").length - 1] + "?listingId=" + document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0].value

                                        // bhk..................................
                                        let bhk = Number(document.querySelectorAll(".results-wrapper")[0].childNodes[i].firstChild.childNodes[1].childNodes[0].childNodes[2].childNodes[0].innerText.split(" ")[0].split("\n")[0])

                                        //location........................   

                                        var location_prop = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[3].childNodes[0].innerText;


                                        //price..............................
                                        var price = ""
                                        var pr = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText
                                        var prsp = pr.split(",")
                                        for (var j = 0; j < prsp.length; j++) {
                                            price = price + prsp[j]
                                        }
                                        price = Number(price)

                                        //size................................
                                        let size = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[4].childNodes[1].innerText





                                        var object_property = {

                                            "redirect_url": redirect_url,
                                            "bhk": bhk,
                                            "location": location_prop,
                                            "price": price,
                                            "size": size
                                        };

                                        //picture.....................................
                                        if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc) {
                                            object_property.picture = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc;
                                        }
                                    }
                                }
                                property_details.push(object_property);
                            }



                            return property_details;

                        })
                        // console.log(page_prop)



                        var d = new Date();
                        var n2 = d.getSeconds();
                        if ((n2 - n1) < 0) {
                            console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        } else {
                            console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        }


                        await browser.close();
                    }

                    return page_prop
                }
                let [res1, res2, res3] = await Promise.all([f1(), f2(), f3()]);
                all_prop.push(res1)
                all_prop.push(res2)
                all_prop.push(res3)
                merged = [].concat.apply([], all_prop);

                console.log(merged)
            }
            big();



        } else {
            // magicbrickes--------------------------------------
            async function big() {


                async function f1() {
                    const browser = await puppeteer.launch({
                        headless: false,
                        args: ['--start-maximized']
                    });
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
                    // console.log(page_prop)



                    var d = new Date();
                    var n2 = d.getSeconds();
                    if ((n2 - n1) < 0) {
                        console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from magicbricks in " + place);
                    } else {
                        console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from magicbricks in " + place);
                    }


                    await browser.close();
                    return page_prop
                }
                // 99acers-----------------------------------------
                async function f2() {
                    const browser = await puppeteer.launch({
                        headless: false,
                        args: ['--start-maximized']
                    });
                    const page = await browser.newPage();
                    page.setViewport({
                        width: 0,
                        height: 0
                    });
                    console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                    await page.goto("https://www.99acres.com/" + (x + 1) + "-bhk-residential-apartments-for-rent-in-" + (place) + "-ffid");

                    var page_prop = await page.evaluate(() => {

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
                    // console.log(page_prop)



                    var d = new Date();
                    var n2 = d.getSeconds();
                    if ((n2 - n1) < 0) {
                        console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from 99acers in " + place);
                    } else {
                        console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (x + 1) + "bhk data from 99acers in " + place);
                    }


                    await browser.close();
                    return page_prop
                }
                //housing.com----------------------------------------------------------------
                async function f3() {
                    const browser = await puppeteer.launch({
                        headless: false,
                        args: ['--start-maximized']
                    });
                    const page = await browser.newPage();
                    page.setViewport({
                        width: 0,
                        height: 0
                    });
                    var h;
                    if (x == 3 || x == 4 || x == 5) {
                        h = 3
                        const search_string1 = "rent housing.com " + (h + 1) + " bhk " + place + " ";

                        console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                        await page.goto("https://www.google.com/search?q=" + search_string1);
                        console.log("x-x-x-x-x- next -x-x-x-x-x")
                        await page.evaluate(() => {
                            document.querySelector('.DKV0Md').click()

                        })
                        // full page load wait
                        await page.waitForNavigation();

                        var page_prop = await page.evaluate(() => {

                            var numberofblocks = document.querySelectorAll(".results-wrapper")[0].childNodes.length;
                            var property_details = [];
                            for (let i = 0; i < numberofblocks; i++) {
                                if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0]) {
                                    if (document.querySelectorAll(".results-wrapper")[0].childNodes[i].localName == "article") {
                                        //redirect_url...................................

                                        let redirect_url = "https://housing.com/rent/search-" + document.URL.split("-")[document.URL.split("-").length - 1] + "?listingId=" + document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0].value

                                        // bhk..................................
                                        let bhk = Number(document.querySelectorAll(".results-wrapper")[0].childNodes[i].firstChild.childNodes[1].childNodes[0].childNodes[2].childNodes[0].innerText.split(" ")[0].split("\n")[0])

                                        //location........................   

                                        var location_prop = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[3].childNodes[0].innerText;


                                        //price..............................
                                        var price = ""
                                        var pr = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText
                                        var prsp = pr.split(",")
                                        for (var j = 0; j < prsp.length; j++) {
                                            price = price + prsp[j]
                                        }
                                        price = Number(price)

                                        //size................................
                                        let size = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[4].childNodes[1].innerText





                                        var object_property = {

                                            "redirect_url": redirect_url,
                                            "bhk": bhk,
                                            "location": location_prop,
                                            "price": price,
                                            "size": size
                                        };

                                        //picture.....................................
                                        if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc) {
                                            object_property.picture = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc;
                                        }
                                    }
                                }
                                property_details.push(object_property);
                            }



                            return property_details;

                        })
                        // console.log(page_prop)



                        var d = new Date();
                        var n2 = d.getSeconds();
                        if ((n2 - n1) < 0) {
                            console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        } else {
                            console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        }


                        await browser.close();
                        return page_prop
                    } else {
                        h = x
                        const search_string1 = "rent housing.com " + (h + 1) + " bhk " + place + " ";

                        console.log("-x-x-x-x- start -x-x-x-x-x-x-")
                        await page.goto("https://www.google.com/search?q=" + search_string1);
                        console.log("x-x-x-x-x- next -x-x-x-x-x")
                        await page.evaluate(() => {
                            document.querySelector('.DKV0Md').click()

                        })
                        // full page load wait
                        await page.waitForNavigation();

                        var page_prop = await page.evaluate(() => {

                            var numberofblocks = document.querySelectorAll(".results-wrapper")[0].childNodes.length;
                            var property_details = [];
                            for (let i = 0; i < numberofblocks; i++) {
                                if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0]) {
                                    if (document.querySelectorAll(".results-wrapper")[0].childNodes[i].localName == "article") {
                                        //redirect_url...................................

                                        let redirect_url = "https://housing.com/rent/search-" + document.URL.split("-")[document.URL.split("-").length - 1] + "?listingId=" + document.querySelectorAll(".results-wrapper")[0].childNodes[i].attributes[0].value

                                        // bhk..................................
                                        let bhk = Number(document.querySelectorAll(".results-wrapper")[0].childNodes[i].firstChild.childNodes[1].childNodes[0].childNodes[2].childNodes[0].innerText.split(" ")[0].split("\n")[0])

                                        //location........................   

                                        var location_prop = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[3].childNodes[0].innerText;


                                        //price..............................
                                        var price = ""
                                        var pr = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText
                                        var prsp = pr.split(",")
                                        for (var j = 0; j < prsp.length; j++) {
                                            price = price + prsp[j]
                                        }
                                        price = Number(price)

                                        //size................................
                                        let size = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[1].childNodes[0].childNodes[4].childNodes[1].innerText





                                        var object_property = {

                                            "redirect_url": redirect_url,
                                            "bhk": bhk,
                                            "location": location_prop,
                                            "price": price,
                                            "size": size
                                        };

                                        //picture.....................................
                                        if (document.querySelectorAll(".results-wrapper")[0].childNodes[i] && document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc) {
                                            object_property.picture = document.querySelectorAll(".results-wrapper")[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].currentSrc;
                                        }
                                    }
                                }
                                property_details.push(object_property);
                            }



                            return property_details;

                        })
                        // console.log(page_prop)



                        var d = new Date();
                        var n2 = d.getSeconds();
                        if ((n2 - n1) < 0) {
                            console.log(page_prop.length + " properties -- " + (60 + (n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        } else {
                            console.log(page_prop.length + " properties -- " + ((n2 - n1)) + " seconds taken to load " + (h + 1) + "bhk data from housing.com in " + place);
                        }


                        await browser.close();
                        return page_prop
                    }
                }
                let [res1, res2, res3] = await Promise.all([f1(), f2(), f3()]);
                all_prop.push(res1)
                all_prop.push(res2)
                all_prop.push(res3)
                merged = [].concat.apply([], all_prop);

                // console.log(merged)


            }
            big();

        }

    }

}
app.get('/', (req, res) => {


    res.send(merged)

})

app.listen(process.env.PORT || 3000, (err) => {
    console.log("Server is Running")
})