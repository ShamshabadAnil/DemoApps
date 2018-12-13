var app2={}
app2.init=function(){
    var button=document.getElementById('head');
    //function takes two arguments, secondone is 
    //annonymous function also known as callback function
    button.addEventListener('click',function(){
      // getElementById is a method called with()
        var h1Id=document.getElementById('h1');
        //innnerHtml is property
        h1Id.innerHTML='blah blah blah'
    });
    
    var button2=document.getElementById('subHead');
    button2.addEventListener('click',app2.showSubHeading('hfsfhsfhdshfh'))
}
app2.showSubHeading=function(info){
    return function(){
        var h4Id=document.getElementById('h4');
        h4Id.innerHTML=info;
    };
}

