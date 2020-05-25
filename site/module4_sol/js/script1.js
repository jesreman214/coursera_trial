(function(window){
var byespeaker ={};
var speakWord = "good bye";
byespeaker.speak=function(name) {
  console.log(speakWord +" "+ name); //+ "" +  name);
}
window.byespeaker=byespeaker;
})(window);