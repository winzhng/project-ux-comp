// If you wanted a list of them and their distance from the top of the document:
document.querySelectorAll('h2').forEach(heading => {
  console.log(`Heading: "${heading.textContent}" is ${heading.offsetTop}px from the top of the document`)
})

let theStateOfTheInterface = (event) => { 
  
  let winH = document.documentElement.clientHeight
  let docH = document.documentElement.scrollHeight
  let winY = window.scrollY
  let maxY = docH - winH
  
  //infinite scroll
  if (winY >= maxY) {

    document.querySelector('#main_nav').innerHTML += `
      <section class="ldpage">
        <img src="img/ModbuildEDIT.jpg" alt="modular">
        <div class="text">
          <h1>Modular Building</h1>
        </div>
      </section>
      <section class="designQ" id=design>
        <h1>How can we use a limited amount of space efficiently in order to fulfill all the needs of a smart city, without causing traffic and congestion during its construction?</h1>
        <p>The inspiration is based on the housing crisis in Toronto. Many people struggle with affordable housing, often compromising their quality of living with reduced space. Our team believes in being environmentally responsible. Modules are constructed using sustainable materials and renewable resources; construction is off-site and waste is minimal as they’re made precisely to order. Using sustainable and locally sourced materials, it’ll decrease the cost of equipment and supplies, while fulfilling the price range of a potential owner's expectations. Modular building ensures flexibility whether it’s transporting to another site or allowing the individual to freely design their own concept. </p>
      </section>
      <section class="full">
        <h2 id="enviro">Environmental Benefits</h2>
        <p>Modules are constructed using recycled materials and renewable resources such as bamboo, as well as parts from other modules that are not currently being used, as they can be reused into different modules.  The modules produce a small amount of construction waste as they are made precisely to order.  There is also less onsite disturbance, making construction in sensitive areas possible, without damaging the ecosystem it’s in. We have implemented photovoltaic glass (PV glass) windows to reduce heating and cooling consumption. Solar panels are installed on the roof of the entire structure to generate energy to each module.</p>
        <ul class="gallery">
          <li>
            <img src="img/bamboo.jpg">
            <p>Bamboo</p>
          </li>
          <li>
            <img src="img/solarpanels.jpg">
            <p>Solar Panels</p>
          </li>
          <li>
            <img src="img/recyle.jpg">
            <p>Recycled Plastics</p>
          </li>
          <li>
            <img src="img/reclaimedwood.png">
            <p>Reclaimed Wood</p>
          </li>
        </ul>
      </section>
      <section class="full">
          <h2 id="labour">Labour and Materials</h2>
            <p>Modular building provides labour and material benefits as well as being environmental friendly.  Modules are built off site, using precise construction techniques, ensuring that the exact amount of materials are used without waste.  Less concrete is used on site and the modules get set up quickly, keeping labour costs down by finishing building quickly.
            </p>
          <section class="faq_container">
            <div class="accordion">
              <div class="acc_item" id="materials">
                <a class="acc_link" href="#materials">
                  Cost Effective Materials
                  <ion-icon name="add-outline"></ion-icon>
                  <ion-icon name="remove-outline"></ion-icon>
                </a>
                <div class="answer">
                  <p>Modules are constructed using sustainable materials and renewable resources as it’ll decrease the cost of equipment and supplies. Recycled plastic bottles can be made into paneled walls or bricks. Since plastic is so durable, it can withstand strong weather. Bamboo is a highly renewable resource, it grows fast and is highly durable and resilient. It has been used in many countries for centuries. Upcycling with reclaimed wood can add beautiful pieces to your module or even as an exposed or hidden wall.</p>
                </div>
              </div>
              <div class="acc_item" id="lab_int">
                <a class="acc_link" href="#lab_int">
                  Less Labour Intensive
                  <ion-icon name="add-outline"></ion-icon>
                  <ion-icon name="remove-outline"></ion-icon>
                </a>
                <div class="answer">
                  <p>As the modules are built off-site, a construction team can focus solely on building the modules. This promotes efficency as workers are given more work experience, learning,higher productivity and safer working conditions. Prefabricating componenets in a factory setting can be easily automated and help with traditional complex methods. While working in factory, the working conditions are equivalent to the manufacturating industry with less harsh weather conditions and less workplace injuries.</p>
                </div>
              </div>
              <div class="acc_item" id="install">
                <a class="acc_link" href="#install">
                  Installation Process
                  <ion-icon name="add-outline"></ion-icon>
                  <ion-icon name="remove-outline"></ion-icon>
                </a>
                <div class="answer">
                  <p>The construction of the modules are made quickly, then transported to the desired location in pieces. Each wall, floor or roof panel is then assembled at the location and this allows the client to design it however they desire. Modular building ensures flexibility whether it’s transporting to another site in the future or allowing the client to freely mix and match.</p>
                </div>
              </div>
          </section>
      </section>
      <section class="full">
        <h2 id="flex">Flexibility</h2>
        <p>Modular building ensures flexibility whether it is moving it to a different site or having the freedom to design it however you want. The option to choose identical buildings or creating individual design concepts is decided by the owner or company. Vertical building is effective in a condensed city such as Toronto, but also beneficial to any city that is looking to expand their community vertically.</p>
        <div id="carouselSlides" class="carousel slide z-depth-1-half" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="carousel-photo" src="img/mod-house.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="carousel-photo" src="img/mod-house1.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="carousel-photo" src="img/mod-house2.jpg" alt="Third slide">
            </div>
          </div>
          <a class="prev-photo" href="#carouselControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="next-photo" href="#carouselControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>     
      </section>
      <section class="full">
        <h2 id="cost">Affordability</h2>
        <p>The inspiration of our design is based on the housing crisis in Toronto. Many people living in a metropolitan area struggle with affordable housing, often compromising their quality of living with reduced space as there's a high demand and lack of return on the market.</p>        <img class="aff" src="img/house.jpg">
      </section>
      `
  }


  //scrollspy
document.querySelector('.panel').innerHTML = `
  <ul class="panel" id="panel_nav">
    <li><a class="panel_item" href="#design"><strong>About</strong></a></li>
    <li><a class="panel_item" href="#enviro"><strong>Environmental Benefits</strong></a></li>
    <li><a class="panel_item" href="#labour"><strong>Labour and Materials</strong></a></li>
    <li><a class="panel_faq" href="#lab_int">Less Labour Intensive</a></li>
    <li><a class="panel_faq" href="#install">Installation Process</a></li>
    <li><a class="panel_item" href="#flex"><strong>Flexibility</strong></a></li>
    <li><a class="panel_item" href="#cost"><strong>Affordability</strong></a></li>
  </ul>
`

}
window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)