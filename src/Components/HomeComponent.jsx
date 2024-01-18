
import React, { useState } from 'react'
import CardComponent from './CardComponent'
import salmon from './Assets/salmon.jpg'
import burger from './Assets/burger.jpg'
import pasta from './Assets/pasta.jpg'


const HomeComponent = () => {

        const [recipe,setName] = useState([
            {title: 'Salmon', img:salmon, body: '5.06.2023 г. — Те остават ненаситни, докато не публикуват тези сочни и вкусни храни в социални медийни платформи като Facebook, Instagram, Pinterest и т.н.'  },
            {title: 'Burger', img:burger, body: 'Хамбургерът е вид сандвич, състоящ се от плоско говеждо кюфте, което се слага в разрязано на две кръгло хлебче. Хамбургерите често се предлагат с различни сосове, най-често кетчуп, майонеза и горчица. Обикновено се прибавят гарнитури от типа на маруля, домати, лук, кисели краставици и кашкавал.'  },
            {title: 'Pasta', img:pasta, body: 'Нарежете лука и чесъна и ги сложете да се запържат в маслото и зехтина. След което, добавете доматения сос. Разбъркайте добре и добавете малко сол, черен пипер, захар, ако соса ви е прекалено кисел. Оставете така приготвения сос, да къкри на слаб огън около 20-30 минути. Можете да сложите и малко червен пипер, по желание. '  }
        ]);


  return (
    <div className="home-component">
      <h1>MyBlogProject</h1>
      <CardComponent recipe ={recipe} />
    </div>
    
  )
}
export default HomeComponent
