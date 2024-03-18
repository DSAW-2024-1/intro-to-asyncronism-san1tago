$(document).ready(function(){
  
    var author;
    var quote;
    
    function getQuote(){
      
    $.ajax({
      url: 'https://thesimpsonsquoteapi.glitch.me/quotes',
  
      success: function(response){
        quote = response[0].quote;
        author = response[0].character;
        $('#quote1').text(quote);
        if(author){
          $('#authorOne').text('said by ' + author);
        }
        else{
          $('#authorOne').text('unknown author');
        }
      }
    });
    }  // moved here
    /*
     $.getJson(url, function(data){
      $("#quote1").html(data);
    })
    };
    */
    $('#buttonOne').click( function(event){
      event.preventDefault();
      getQuote();
    });
  
    
   getQuote();
  });