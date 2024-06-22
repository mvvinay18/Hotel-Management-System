var characters = "ABCDEFGHTUVWXTZklmnopqrstuvwxyz0123456789";   
    var lenString = 15;  
    var randomstring = '';   
    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random()*characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
    }
    console.log(randomstring);