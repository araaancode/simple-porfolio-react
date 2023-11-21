import React from 'react'

const Skills = () => {
  return (
    <div id='skills'>
      <h1 style={{textAlign:'center',color:'#fff'}}>مهارت های من</h1>
      <div class='row'>
        <div class='column'>
            <p className="skill-name">Javascript</p>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" />
        </div>
        <div class='column'>
          <p className="skill-name">++C</p>
          <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" />
        </div>
      </div>
      <div class='row'>
        <div class='column'>
          <p className="skill-name">React</p>
          <img src="https://cdn-icons-png.flaticon.com/128/760/760457.png" />
        </div>
        <div class='column'>
          <p className="skill-name">Ruby</p>
          <img src="https://cdn-icons-png.flaticon.com/128/7432/7432950.png?uid=R25619652&ga=GA1.1.1410702522.1689505960&track=ais" />
        </div>
      </div>

      <div class='row'>
        <div class='column'>
          <p className="skill-name">HTML</p>
          <img src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" />
        </div>
        <div class='column'>
          <p className="skill-name">Python</p>
          <img src="https://cdn-icons-png.flaticon.com/128/3098/3098090.png" />
        </div>
      </div>
    </div>
  )
}

export default Skills