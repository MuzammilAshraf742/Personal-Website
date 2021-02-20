// Its shorthand is $(function() {...} 
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

         // toggle menu/navbar Script
         $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
         });
    });
   




// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     })
// });