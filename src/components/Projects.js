import React from 'react'

const Projects = () => {
  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'100px',marginBottom:'0px'}}>پروژه های من</h1>
    <div id='projects'>
      <a href="#projects" >
      <div class="card">
        <div class="wrapper">
          <img src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688558.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph" class="cover-image" />
        </div>
      </div>
      <small className='projects-name'>فروشگاه آنلاین</small>
    </a>

<a href="#projects" >
  <div class="card">
    <div class="wrapper">
      <img src="https://img.freepik.com/free-photo/aerial-view-man-typing-retro-typewriter_53876-13416.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph" class="cover-image" />
    </div>
  </div>
  <small className='projects-name'>بلاگ</small>

</a>


<a href="#projects" >
  <div class="card">
    <div class="wrapper">
      <img src="https://img.freepik.com/free-vector/hand-drawn-chat-mobile-pattern_52683-713.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph" class="cover-image" />
    </div>
  </div>
  <small className='projects-name'>چت اپلیکیشن</small>

</a>


<a href="#projects" >
  <div class="card">
    <div class="wrapper">
      <img src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph" class="cover-image" />
    </div>
  </div>
  <small className='projects-name'>سفارش غذا</small>

</a>


    </div>
    </div>
  )
}

export default Projects