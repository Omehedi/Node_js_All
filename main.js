 // 1 : Request response module ====== Hello world run kora hoyece

/* 

//http module connect kora hoyece
let http=require('http');
//http variable theke call korlam create server method ke() and ei methoder vitore ekta call back function dite hobe and dui ta parameter dibo  1: req, 2:res;
let server=http.createServer(function(req,res) {
    res.end("Hello world !");//node js eita show korbe
})

//and server take amra listen korabo and kon port diye run korabo sei port boel dite hobe
server.listen(5050);
console.log("Server Thik Ase");  

*/































//   2  :Request Response Model


//kivabe amra ekta server create korbo / and kivabe ekta server run korbo/ and ekta server er vitore ki ki hocee ta dekhbo kmne sei niya ajker

// ei file amra prothome ekta server toiri korbo. ar server toiri korar jonno amader node js core module http mdule ta ekhane dorkar/ tar por amder ke http module ta ke import korte hobe ba ante hobe/ http module ta ke connect korar jonno ekta variable dite hobe and ekta function toiri korte hobe/and jei module takew connect korbo sei module ta ke bole dite hobe/jemon amra ekhane core module tar moddhe http bole  dite hobe/ annd oi http ta ke create namer ekta server name ekta method ase oi method() take call kore dite hobe; and oi http .create server name  ekta call back function dite hobe/and oi functioner vitore duit para peter jabe 1st: req,and 2nd: res server e dui dhorener ghotona ghote ek holo reqest jay and oi request er jonno server theke ekta response ase/server e je req and response manage korar jonno ei dui parameter use kora hoyece 1st req, 2nd res/ amra jei server create koreci and server ta ke run korar jonno amder ke ekta port bole dite hobe and amra  jei server create koreci oi server take ekta variabler moddhe rekhe dite hobe/ and oi variabler nam ke listen kore dite hobe/ and jei port diya run korabo just oi port ta bole dite hobe /and jei port dibo oi port diya amar node js server ta run hobe jemon


/*
let http = require('http');

let server = http.createServer(function(req, res) {
    res.end("Hello ma");
});

server.listen(5050);
console.log("server thik ase");   

*/



































//  3 : How Request Response Model Works in node js



// amra ekta server er moddhe vinovabe request dite pari jemon get request post request http request/ and amder request and response manage korar jonno amader ke duit parameter dite hobe jemono req,res parameter duita use korte hobe /request er aginst a abar response jenarator korbe

//response= response er moddhe abar kisu ongsho thake jemon  Status code, Body, Header thake; server er moddhe amra abar url use kore request patabo/



//if and else if use kore kivabe server kaj kore tah kora hoyece/ prothome amader ke req.url dite hobe and kise dekhbo seita bole dite hobe/tarpor amder response head dite hobe /response head likhar nioun holo porthome amader ke res parameter likhte hobe and res.diya writeHead name method() ta ke call korte hobe/and head er vitiore amra ki dite cacci seta amader ke parameter a bole dite hobe /and head er vitore amra onk option bole dite pari jemon content-type ba aro onek kiso/kinto status code er pore seta ke object kore amader ke likhte hobe and sobar shese amader ke response ta ke end kore dite hobe





//prothome server er moddhe ekta request asbe and tar agnest a amra ekta response asbe/ and request ta amra dibo holo url theke/amra jei request gula deci sob gula holo get request/get request er agnist a amra response dicci and tar agnist e head thakbe, body thakbe,and shese giye amra take res.end() kore dibo// and output dekhte holo amder ke localhost likhte hobe and colon dite hobe and port er numbar dite hobe jemon=== localhost:5050d dite hobe and jei jei name url dekhbo just backslash/ diye likhte hobe jemon === localhost:5050/home ba /about ba /cotact/ and amra jei request patayci and jei response paice seta holo shodo browser diya /amra browser diya request patayci and paici


/*

let http=require(`http`);

let server=http.createServer(function(req,res){

    if(req.url=="/"){
        //res .writeHead method()/ and ekhane onk option dewa jabe jemon status code content-type and every thing 
        //request head eita
        res.writeHead(200,{'content-type':'text-developer'});
        //request body
        res.write('<h1>This Is Home Page</h1>');
        //res.end method()use kora hoyece
        res.end();
    }



    else if(req.url=="/about"){
        //res .writeHead method()/ and ekhane onk option dewa jabe jemon status code content-type and every thing 
        //request head eita
        res.writeHead(200,{'content-type':'text-developer'});
        //request body eita
        res.write('<h1>This Is About Page</h1>');
        //res.end method()use kora hoyece
        res.end();
    }





    else if(req.url=="/contact"){
        //res .writeHead method()/ and ekhane onk option dewa jabe jemon status code content-type and every thing 
        //request head eita
        res.writeHead(200,{'content-type':'text-developer'});
        //request body eita 
        res.write('<h1>This Is Contact Page</h1>');
        //res.end method()use kora hoyece
        res.end();
    }


});

server.listen(5050);
console.log("Server Is Run Succesful"); 


*/
































//   4 :  Understanding Http Client


// kisu kisu aplication toiri korte browser pawa jai ba thake nah jemon   desktop application, nativ andriod application, nativ I s appllication ei software gula toiri korte browser thake nah  and seta dekhar jonno amader ke http client use korte hobe/ and ei http client korbe ki prothome server a ekta request dibe and tar kas theke akta response asbe sei response se receved korbe/

//Http Client hocce amon ekta client ba emon ekta libary ba emon ekta module/ je module kore ja server Http Request pathay and server theke jei response ase take receved kore take  Http Client bole

//HTTP Client gula holo
/*  1: Axios   / javascript http client
2: Fetch      / javascript  http client
3: Jquery Ajax / javascript http client
4: cURL        / php  http client
5: Volly       / java  http client
6: Retrofit    / java   http client
7: RestSharp   / C sharp  http client   */  



//opurer http client gula holo programming language/ ei gula shadharonot amra ei gula amra development er somoy babohar kore thaki/ and testing er somoy request ar response ta astece ki na ba jacce ki na ta dekhar jonno amra postman software use kore thaki


















/*   //  5 :  Understanding Package Json file





  // package.json mane holo json application er nothi / jei nothir er vitore oi applicton er bivinno bisioy sajan thake sundor vabe / jemon kon frame work babohar korlam kon libary use korlam se gula package.jeson er vitor sajano thake/


//package.json er kaj holo amader applicationer meta data gula ke hold korbe/and amadr applicatione er vitore jodi kono thirdparty dependency index korbe/ ek kothay joto kisu use korbo sob gula ei package.json nothi kore rakhbe mane hole sajiye rakhbe




// jeson file create korar niyoum holo / tarminal theke new tarmina a jaite hobo and okhan theke npm space init --y dite hobe jemon === npm init --y;






//package.json dile amra all detels pabo jemon niche dewa ase


{
  "name": "node-js-all",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

*/

































//  6 :  URL Module


//node js url module holo node js er ekta nijosso bild in module/ ei module babohar kore web addres ke bivinno vage vag kore felte pari ekta URL er kinto bivinno vage avg kora jay and er alada alada nam ase / node js URL module diye amra ekta URL ke bivinno vabe vag korte pari and alada alada korte pari and name chinnito korte pari /jemon host name / url path name/ and  search Query pabo


// kivabe node js url module babohar korte hobe ta holo / jei vabe amra http add korci thik oi vabe url module ta amader ekhane add korte hobe and ekta variabler moddhe rekhe dite hobe / and amra jei url ke vangte cai take ekta variabler moddhe rekhe dite hobe/URL module ta ke vangte caile URL theke url.parse()method ta ke call korte hobe/ and kon url ta ke vangte cai sei url ta ke oi parse method er vitore parameter hisabe bose dite hobe and true name ekta boolean parameter pase korate hobe and amader url module ta venge jabe/ tar por amra oi url model theke amra ekta object pabo/ sei object ta ke amra ekta variabler moddhe rekhe dite hobe/jokhoni amra kono url ke parse method er moddhe diye pase korabo and amra jeita return pabo seta holo oi object er soman/ /caile amra ekta url ke vangte and tokru tokru korte parbo jemon


//jodi amra ekta url theke host name ke alada korte cai tahole amader ke arekta variable nite hobe and object theke host ke call kore dibo/host ke call korle url er je host name seta pawa jabe/


//host namer vitore ase holo path name seta dekhar jonno ekta variable nite hobe and pathNaem bole dite hobe


//and Query korte hole arekta variable nite hobe and sekhane just search name diya likhte hobe 

//url ke abar tin vage vag kora jay










/*   //code start now

//http module connect kora hoyece
let http=require('http');

//URL module create kora hoyece
let URL=require('url');

//http variable theke call korlam create server method ke() and ei methoder vitore ekta call back function dite hobe and dui ta parameter dibo  1: req, 2:res;
let server=http.createServer(function(req,res) {


    //url ke amra ekta variable moddhe rekhe dibo
    let myURL="https://ostad.app/dashboard/my-courses/65029bca6ac293e56aa9ed9c/videos"

    //url module theke parse() namer ekta method ase seita ke amra call kore dibo and kon url ta ke vangte cai seta ke dite hobe/ and duita parameter calabo ekta holo amra url arekta holo boolean parameter true or false bujabe
    myURLObj=URL.parse(myURL);

    //url er host name ke dekte holo ei vabe call korte hobe jemon
    let myHostName=myURLObj.host;//host ke call

    let myPathName=myURLObj.pathname;//pathname call

    let mySearchName=myURLObj.search;// serchname ke call



    //out put dekhte hole amader ei body te write naem method taek call korte hobe and jeita dekhte caibo oitake oi methoder vitore bole dite hobe
    res.writeHead(200,{'content-type':'text/html'})
    res.write(myHostName);
    res.end();

});

//and server take amra listen korabo and kon port diye run korabo sei port boel dite hobe
server.listen(5050);
console.log("Server Thik Ase");


*/
































// 7 :  Getting Started With FS Module


// FS Module Method ki and ki vabe kaj kore/ and kokhon kon method use korte hobe and kon method ki rokon hobe bojbo kivabe / 




// 1: Asynchronous poddhoti te method er nam savabik thakbe/ and Asynchronous poddhoti te callback function thakbe


// 2 : Synchronous poddhoti te method er namer shese just Sync word ta jokto korte hobe / Synchronous method e kono call back function thakbe nag 













//Node JS FS module mane holo / F Mening= File, ar  S Menint= System,  mane holo file system / 

//node js FS module babohar kore amra server er je keno file ke acces korte pari , file delet korte pari file edit korte pari,and noton file create korte pari .ortaht  file managment kora

//Fs module babohar kore amra jokhon kono operation kori seta dui dhorener hote pare jemon 


// 1 : Synchronous holo jodi user multitasking kaj na korte pare ekta web application er vitore tahole take synchronous bole / ek sate jodi dui ta kaj no kora jay tahole take synchronous bole/and synchronous er vitore onek koyekta method thake 



// 2: Asynchronous holo jodi user ekta web application er vitore multitasking kaj korte pare tahole take Asynchronous bole / orthat ek sate dui ta ba odhik kaj jora jay tahole take Asynchronous bole /Asynchronous er vitore onek koyekta method thake 




//EI Somoy Gulate Amra ASynchronous Use Korte Hobe

// ASynchronous kokhon Suitable hoi / suitable  mane holo opojokto//jemon youtube ekta vido jokhon amra ekta video upload kori tokhon amra amadr computer ba mobile theke ekta request pathay te ci tokhon amadr video ta kinto uplod hower pasa pasi aro onk ghoto na ghot te thake jemon video uplod howyer pore video ta ke abar server compress kortece and bivinno resulation e format kore and tar pro copy right ba violation ase ki na ta cheack kore and tar por amadr ke ekta response dei / youtube kinto Asynchronous suitable babohar kora hoi/uporer process gula somponno hote je ghotona gula ghote se gula holo youtuber backend e ghote / and Asynchronous ei jonno use kora hoi jate ekjon user ke jate ekta webapplicatione wait korate na hoi sei jonno Asynchronous use kora hoi jate ekta user multitasking korte pare;
































//  8 : 14 fs ready file ready html page


// FS ready module how it work / fs module niye kaj korar jonno amra ekta file er moddhe / amader ke fs module file ta ke import ba add  korte hobe / and eita korar jonno amader ke  ekta variable nite hobe and fs likhle amadr fs module ta add hoye jabe/ and oi bisoy gula server e run korar jonno amader ke arek ta http module er proyojon hobe and seta ke create korte hobe and seta ke handle korar jonno parenthsi er vitore http dite hobe/ and amra kon file ta ke read korabo sei file take create korte hobe 




//Amra FS Module babohar kore je kono file ke amra server a read korte pari / amd oi output ta amra show korabo / fs er mul bisioy ta holo eitay/ 




//s module er kaj holo file uplod kor, file download kora, read kore oita ke abar output hisabe read kora, kono ekta web page er name delet kora rename kora, create kora ittadi




//ami ekta file ke read korar jonoo ekta index.html file create korece/ amra ei html fiel take server e read korabe and tar por html file theke ja ja pabe segul amader ke response akare dibe and amra oi werb page ta ke dekhte pabo








/*
// create fs module
let fs = require('fs');

// create http module because server run korar jonno ei http module ta create kora hoyece
let http = require('http');

// http module use and create server / and ekta callback function jabe and dita parameter jabe (req,res)/and take run korar jonno ba listen korar jonno take ekta varibler moddhe rekhe dite hobe
let server = http.createServer(function (req, res) {

  // url shudo slash mane holo home page
  if (req.url == "/") {

    // fs module use and read method by Asynchronous method  read / fs readfile er vitore abar parameter 3 ti jemon 1st parmeter holo path, 2nd holo option, 3rd holo call back function/ and oi callback function er vitore abar dui ta parametr dite hobe / 1st: erro and 2nd : data/ error use kora hoi jodi fiel ta ke red korte kono somossa hoi tahole amader ke ekta error message dibe/ ar data mane holo amra jei file take read korci oi file er vitore ja ja ase seta dekha be

    // create by Async file
    fs.readFile('Home.html', function (error, data) {
      // response head create
      res.writeHead(200, { 'content-type': 'text/html' });
      // response body create
      res.write(data);
      res.end();
    });
  }

});

// create server listen and port numbar dite hobe
server.listen(4040);
console.log("Server run is successful by read");


*/



































//  9 : 15 fs read file Synchronous



// Synchronous poddhoti ki vabe amra keta file read korte pari/ Fs.readFile method take call korte hobe and tar age ekta sync likte hobe just ei ekta extention ta likhte hobe/jodi synchronous niya kaj kori tahoel amder methoder age just sync likhte hobe / Asynchronous er age ekta call back function thake / kinto Synchronous er age kono call back function thake nah/ synchronous method er khettre amra fs.readFile likhtece kinto tar pore amra Sync likhteci/and read kora hoye gale amra je data ta pabo sei data puro module take return korbe and sei data ke ekta variabler moddhe rekhe dite hobe/ and jei data pabo sei data amra body te write kore dibo 



// Asynchronous a call back function thaktece/ ar Synchronous a call back function thakbe nah




/*
let fs= require('fs');
let http=require('http');

let server=http.createServer(function(req,res){

    if(req.url=="/"){

        // fs file create by Sync poddhoti
        let mydata= fs.readFileSync('Home.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(mydata);
        res.end();
    }

});

server.listen(8080);
console.log("This server is run");

*/



































// 10 : 16 fs File Write Async


//Fs Asynchronous poddhotite  write korte hole amader ke prothome  Asynchronous er niyome amadr ke create korte hobe / and prothoem fs module use korte hobe / fs module theke write file method ta ke call kore ddib 




/*
//fs module use
let fs= require('fs');
let http=require('http');

let server=http.createServer(function(req,res){

    //eita home url module 
    if(req.url=="/"){



        //fs module theke writeFile method ta ke call kore dite hobe/ tokhon oi fiel ta holo ekta Asynchronous method /and ekhane ekta file create korte hobe filer nam hobe holo demo.txt  and file er vitore ki data thakbe seta bolte hobe jemon eikhane dewa ase holo "Hello world./ and ekta call back function dite hobe and functioner vitore amra ekta parameter dibo error name/ jodi kono amadr functioner moddhe error thake tahole amra ei error dara paye jabo

        //fs write fiel method call and ekta fiel create hobe and fiel er vitore likha thakbe == hello world
        fs.writeFile('demo.txt','hello world',function(error){


            if(error){
                res.writeHead(200,{'content-tye':'text/html'});
                res.writeFile("Write fall ");
                res.end();
            }
            else{
                res.writeHead(200,{'content-tye':'text/html'});
                res.write("Write file success");
                res.end();
            }
        })


    }

});

server.listen(9000);
console.log("This server is run 22");

*/
































//  11 : fs File Write Sync

// fs file write sync korara jonno just Sync likhte hoi just ei tuko parthokko/ sync poddhotti te fiel write korar jonno amra write fiel method ta ke call kore dibo fs. writeFileSynce thakbe shese


/*
let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res) {

    if (req.url == "/") {


// fs writeFileSync method ke call kora hoyece/ and ekta fiel create kora hoyece and oi filer vitore ki ki thakbe ta bole dite hobe/ Ar Sync file e call back function thakbe nah and ei puro method ba function ke ekta variabler moddhe rekhe dite hobe
        try {
            fs.writeFileSync('demoSync.txt', 'Welcome to my Sync file ');

            res.writeHead(200, { 'content-type': 'text/html' });
            res.write("Write file success");
            res.end();
        } catch (error) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write("Write failed: " + error.message);
            res.end();
        }
    }
});

server.listen(5050)
console.log("Server is running on port 5050. All is okay. Please run your code.");

*/

































//  12: fs File Rename Async

// Amader ke Async poddhotite fs file renamne korte hole prothome amader ke rename namer jei method ase take call korte hobe / amra jokhon kono file rename korbo tokhon amder ke oi file er old path bole dite hobe and new path bole dite hobe and call back function bole dite hobe 




/*
let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res) {

    if (req.url == "/") {




        //fiel rename korara jonno amader ke fs.rename method take call korte hobe / and oi filer vitore rename korar jonno prothome/ file er old path ta ke bole dite hobe and new file er path bole dite hobe and ekta call back function dite hobe/ jodi amadr fiel ta khuje pay tahoe amder ke output succes lekha dibe/ ar na paile dibe failed leka dibe

        fs.rename('demoNew.txt','demoNew222.txt',function(error) {


            try {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write("Write file rename success by mehedi hasan ");
                res.end();
            } 
            catch (error) {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write("Write faile rename failed " + error.message);
                res.end();
            }

        })

// fs writeFileSync method ke call kora hoyece/ and ekta fiel create kora hoyece and oi filer vitore ki ki thakbe ta bole dite hobe/ Ar Sync file e call back function thakbe nah and ei puro method ba function ke ekta variabler moddhe rekhe dite hobe
    }
});

server.listen(5050)
console.log("Server is running on port 5050. All is okay. Please run your code. 2024");

*/


































//  13:  fs File Rename Sync 

// file rename by Asynchronous poddhotite korar niyoum holo Asynchronous er moty sobi thik ase just khali rename method er age Sync ta likhte hobe / and bole dite hobe old file path and new file path bole dite hobe kintu kono call back function jabe nah




/*
let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if (req.url === "/") {
        try {
            // Rename the file synchronously  
        //create by Sync Poddhitite/ and ekta old fiel er path bole  dibo and oi file ta ke abar amra rename korbo / jodi rename kora succes hoi tahole amader ager fiel ta rename hoye jabe
                let error = fs.renameSync('demoSyncNewNew.txt','demoSyncNew_1.txt');

            // If renaming is successful
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write("fs File Rename Sync is success");
        } catch (error) {
            // If an error occurs during renaming
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write("fs File Rename Sync is fail");
        } finally {
            // End the response in both cases
            res.end();
        }
    }
});

server.listen(9000);
console.log("This Is Sync File Thik Ase");

*/



































//  14: fs File Delete Async





// ki vabe amra fs file delet korbo Async poddhotite/ mara fs fiel delet korar jonno Async ba Sync duita poddhoti use korte pari jemon



/*
let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if (req.url === "/") {


// Amra jodi Asynchronous poddhoti use kore file delet korte cai tahole amader ke fs module theke fs.unlink namer ekta method use call korte hobe//tar por file er path dite hobe je amra kon fiel ke delet korte cai //and jeheto eita Asynchronous poddhotite tai amader ke ekta call back function dite hobe
        fs.unlink('mmm.txt', function() {

            try { 
    
                // If renaming is successful
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write("File delet success");//jodi amader fiel delet hoi tahole amra ei output dekhte pabo
            } catch (error) {
                // If an error occurs during renaming
                res.writeHead(404, { 'content-type': 'text/html' });
                res.write("File delet fail");//jodi file delet na hoi tahoel amra ei output dekhte pabo
            } finally {
                // End the response in both cases
                res.end();
            }
        })

    }
});

server.listen(9000);
console.log("This Is  File Thik Ase");*/
































// 15 :  fs File Delete Sync


// ki vabe amra fs file delet korbo Sync poddhotite/ mara fs fiel delet korar jonno Async ba Sync duita poddhoti use korte pari jemon



/*

let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if (req.url === "/") {


// Amra jodi Synchronous poddhoti use kore file delet korte cai tahole amader ke fs module theke fs.unlinkSync namer ekta method use call korte hobe//tar por file er path dite hobe je amra kon fiel ke delet korte cai /
        fs.unlinkSync('demoNew222.txt', function() {

            try { 
    
                // If renaming is successful
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write("File delet success");//jodi amader fiel delet hoi tahole amra ei output dekhte pabo
            } catch (error) {
                // If an error occurs during renaming
                res.writeHead(404, { 'content-type': 'text/html' });
                res.write("File delet fail");//jodi file delet na hoi tahoel amra ei output dekhte pabo
            } finally {
                // End the response in both cases
                res.end();
            }
        })

    }
});

server.listen(3000);
console.log("This Is  File Thik Ase");

*/
































//  16 :  fs File Exists Sync

//amader fiel exists korce ki na seta dekhar jonno ba cheack korar jonno amder ke fs module theke fs.exists method ta ke call korte hobe / abar ei exits method ke dui vabe use kora jay jemon Async and Sync poddhotite/jodi Amra Sync poddhotite korte cai tahoe amader ke shudo just Sync likhte hobe and kono call back function dewa lagbe nah

// Exists mane holo na amra jokhon kono ekta file er path bole dibo jodi oi file ta thake amader ke True return dibe / ar amra jei file er path dici oi fiel er path jodi khuke na pay ta hole amader ke false rturn korbe just eita bujay exits mane eitay



/*
let fs = require('fs');
let http=require('http');

let server=http.createServer(function(req,res) {

    if(req.url=="/"){
        //create fs module and call fs.exitsSync method/ and ei method er vitore amader ke ekta file er path bole dite hobe and dekhte hobe je fiel exitis kore ki na / ba kon fileer obosthan ami dekhte cai sei file er path bole dite hobe ei method er vitore/ and oi khan theke amra ekta result pabo and sei result ta exits kortece ki na seits dekhte pabo   
        let result=fs.existsSync("tt.txt")

        if(req.url=="/"){
            res.end("True");
        }
        else{
            res.end("False");
        }
    }
})

server.listen(5000);
console.log("All Is Ok Everything")
*/


































//  17 :  fs File Exists Async

//
//amader fiel exists korce ki na seta dekhar jonno ba cheack korar jonno amder ke fs module theke fs.exists method ta ke call korte hobe / abar ei exits method ke dui vabe use kora jay jemon Async and Sync poddhotite/ and  call back function dewa lagbe 

// Exists mane holo na amra jokhon kono ekta file er path bole dibo jodi oi file ta thake amader ke True return dibe / ar amra jei file er path dici oi fiel er path jodi khuke na pay ta hole amader ke false rturn korbe just eita bujay exits mane eitay



/*
let fs = require('fs');
let http=require('http');

let server=http.createServer(function(req,res) {

    if(req.url=="/"){
        //create fs module and call fs.exitsSync method/ and ei method er vitore amader ke ekta file er path bole dite hobe and dekhte hobe je fiel exitis kore ki na / ba kon fileer obosthan ami dekhte cai sei file er path bole dite hobe ei method er vitore/ and oi khan theke amra ekta result pabo and sei result ta exits kortece ki na seits dekhte pabo   
        let result=fs.exists("tt.txt",function(result) {

            if(result){
                res.end("This is File Aviable Aviable")
            }
            else{
                res.end("This is File Unaviable")
            }
        })

    }
})

server.listen(5000);
console.log("All Is Ok Everything")

*/
































// 18 : Create Simple Website And Deploy To Real Server


