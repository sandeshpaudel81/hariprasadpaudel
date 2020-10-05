$('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__jackInTheBox');
    }, {
        offset:'50%;'
});
$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInDown');
    }, {
        offset:'50%;'
});


/*----------------------FOR CATEGORY-------------------*/
function openPage(pageName, elmnt, color) {
  
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; }


      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";}
      document.getElementById(pageName).style.display = "block";
      elmnt.style.backgroundColor = color;}

        document.getElementById("defaultOpen").click();

