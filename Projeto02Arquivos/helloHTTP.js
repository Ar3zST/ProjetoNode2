//importar o bibli que imporeta o http e URL
const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(response, file){
    fs.readFile(file, function(err,data){
        response.end(data);
    })
}

//CRIAR FUNCAO PARA TRABALHAR NO SERVIDOR
var callback = function (request, response) {

    var parts = url.parse(request.url)
    var path  = parts.path

    if(parts. path == "/"){
        response.writeHead(200, {"content-type":"text/html"});
        readFile(response, "batata.html")
    }else if(parts.path =="/rota1"){
        response.writeHead(200, {"content-type":"application/pdf"});
        readFile(response, "arquivo1.pdf")
    }else if(parts.path =="/rota2"){
        response.writeHead(200, {"content-type":"application/json"});
        readFile(response, "arquivo2.json")
    }else if(parts.path =="/rota3"){
        response.writeHead(200, {"content-type":"image/png"});
        readFile(response, "arquivo3.png")
    }else if(parts.path =="/rota4"){
        response.writeHead(200, {"content-type":"application/zip"});
        readFile(response, "arquivo4.zip")
    }else if(parts.path =="/rota5"){
        response.writeHead(200, {"content-type":"text/html"});
        readFile(response, "Geradores.html")
    }else if(parts.path =="/rota6"){
        response.writeHead(200, {"content-type":"text/html"});
        readFile(response, "SiteUnicsul.html")
    }else {
        response.writeHead(200, {"content-type":"text/html"});
        response.end("Site404.html")
    }
}

//montar servidpr -----------------------------
var server = http.createServer(callback)
server.listen(3000)
console.log("[status] ... servidor montado em http://localhost:3000")