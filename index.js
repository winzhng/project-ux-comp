// SPOILERS

// While you're here, if you want to know how many headings exist in a document:
console.log(`There are ${document.querySelectorAll('h2').length} <h2> elements!`)

// If you wanted a list of them and their distance from the top of the document:
document.querySelectorAll('h2').forEach(heading => {
  console.log(`Heading: "${heading.textContent}" is ${heading.offsetTop}px from the top of the document`)
})

$(document).ready(function(){
  $(".prev-slide").click(function(){
      $("#myCarousel").carousel('prev');
  });
});

$(document).ready(function(){
  $(".next-slide").click(function(){
      $("#myCarousel").carousel('next');
  });
});