(function(){
    const calendar = document.querySelector('.months-container');

    // Init Calander
    new Calendar('.calander', {
        clickDay: function(e) {
            alert('Click on day ' + e.date.toString());
        }
    })

    // // Init Tilt Js
    function vanilaTilt(){
        VanillaTilt.init(document.querySelectorAll(".month-container"), {
            perspective: 600,
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.6,
            reset: true
        });
       
        
        VanillaTilt.init(document.querySelectorAll(".year-title"), {
            perspective: 600,
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.6,
            reset: true
        });
    }

   
    
    vanilaTilt();

})();
