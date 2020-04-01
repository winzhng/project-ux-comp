// SPOILERS

// If you wanted a list of them and their distance from the top of the document:
document.querySelectorAll('h2').forEach(heading => {
  console.log(`Heading: "${heading.textContent}" is ${heading.offsetTop}px from the top of the document`)
})

let theStateOfTheInterface = (event) => {
    
    let winH = document.documentElement.clientHeight
    let winW = document.documentElement.clientWidth
    let docH = document.documentElement.scrollHeight
    let docW = document.documentElement.scrollWidth
    let winY = window.scrollY
    let winX = window.scrollX 
    let maxY = docH - winH 
    let maxX = docW - winW
    let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
    let pctX = Math.round(winY / Math.max(maxY, 1) * 100)

document.querySelector('.panel').innerHTML = `
<ul class="panel" id="panel_nav">
  <li><a class="panel_item" href="#design"><strong>About</strong></a></li>
  <li><a class="panel_item" href="#enviro"><strong>Environmental Benefits</strong></a></li>
  <li><a class="panel_item" href="#labour"><strong>Labour and Materials</strong></a></li>
  <li><a class="panel_faq" href="#materials">Cost Effective Materials</a></li>
  <li><a class="panel_faq" href="#lab_int">Less Labour Intensive</a></li>
  <li><a class="panel_faq" href="#install">Installation Process</a></li>
  <li><a class="panel_item" href="#flex"><strong>Flexibility</strong></a></li>
  <li><a class="panel_item" href="#cost"><strong>Affordability</strong></a></li>
</ul>
`
}
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('click', theStateOfTheInterface)

