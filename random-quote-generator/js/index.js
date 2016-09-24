  $(document).ready(function() {

    
    //New quote button
    $("#newQuote").on("click", function(){
      $.getJSON("//api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en&callback=?", function(json) {
        //Outputs quote 
        $(".quote").html('"'+json.quoteText+'"');
        //Outputs Author
        $(".author").html(json.quoteAuthor);
              
        //Twitter url
        var url = 'https://twitter.com/intent/tweet?text=' +'"'+ json.quoteText +'" '+ " -" +json.quoteAuthor;
        
        //Ensure quote is under the 140 character limit 
        //The +5 accounts for quotes, space, and hyphen
        if ((json.quoteText.length + json.quoteAuthor.length) > (140 - (json.quoteAuthor.length + 5)))
          {
  
             json.quoteText = json.quoteText.slice(0, (140 - (json.quoteAuthor.length + 5)));
             json.quoteText = json.quoteText.split("");
            
            //Add ... to the truncated quote
             for (i=0; i < 3; i++){
             json.quoteText.pop();
             }
            
            for (i=0; i < 3; i++){
              json.quoteText.push(".");
             }
    
            json.quoteText = json.quoteText.join("");
            //tweet truncated quote
            url = 'https://twitter.com/intent/tweet?text=' + '"' +json.quoteText +'" '+ ' -' + json.quoteAuthor;
          }
       
        //opens twitter window
        document.getElementById('twitter').href = url;     
        
        
        
      }); 
    });
    
  });