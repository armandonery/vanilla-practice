document.getElementById('languages').innerHTML = 'Top 10 most spoken Languages in the world';

var lang = ["Chinese", "Spanish", "English", "Hindi", "Arabic"];

var langL = lang.length;

text = "<ol>";

for(i = 0; i < langL; i++ ){
    text += "<li>" + lang[i] + "</li>";
}

text += "</ol>";

document.getElementById('list').innerHTML = text;
console.log(text);


