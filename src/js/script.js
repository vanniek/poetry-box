var poem = document.getElementById("poem");
var ptitle = document.getElementById("ptitle");
var author = document.getElementById("author");

function poemFinder(i){

  if (i == null) {
    var i = Math.floor(Math.random() * poemlist.length); 
  }

  var poemCount = poemlist[i].length;
  var randNumber= Math.floor(Math.random() * poemCount) + 1;  
  var p = poemlist[i][randNumber-1];
  ptitle.innerHTML = p.title;
  author.innerHTML = p.author;
  var lines = p.lines;
  var string = ''
  for (i in lines) {
    string += lines[i] + "<br/>"
  }

  poem.innerHTML = string;
}

function search() {
  var item = document.getElementById('input').value;
  for(var i = 0; i < poemlist.length; i++){
    if(item == poemlist[i][0].author){
      poemFinder(i);
      break;
    } else {
      ptitle.innerHTML = "";
      author.innerHTML = "";
      poem.innerHTML = 'Sorry, we could not find any poems written by ' + item + '. Please try again.';
    }
  } 
}

function newPoem(){

  var randList = [];
  
  for(var i = 0; i < poemlist.length; i++) {
    var randAuthor = Math.floor(Math.random() * poemlist.length);  
    var randPoem = Math.floor(Math.random() * poemlist[randAuthor].length);  
    randList.push([randAuthor, randPoem]);
  }

  var poemGenerated = '';

  for(var i = 0; i < randList.length; i++) {
    
    var x = randList[i][0];
    var y = randList[i][1];
    var p = poemlist[x][y];
    var randLine = Math.floor(Math.random() * p.lines.length); 
    poemGenerated += p.lines[randLine] + "<br/>";
  }
  
  ptitle.innerHTML = "";
  author.innerHTML = "";
  poem.innerHTML = poemGenerated;

}

document.body.onkeyup = function(e){
  if(e.keyCode == 13){
    search();
    document.getElementById('input').value= "";
  }
}

function about(){
  ptitle.innerHTML = '';
  author.innerHTML = 'About';
  poem.innerHTML = 'Poetry box is a simple site that allows users to read timeless poems and sonnets written from poets across centuries. The site uses poetrydb to get the poems.' + '</p>' + 'Feel free to play around with the site! You can use the search bar to find a specific poet or browse through the collection of poems by hitting the randomize button. <i> Or,</i> if you want something new, use the new button to generate fresh poems using existing lines from poets.';
}








