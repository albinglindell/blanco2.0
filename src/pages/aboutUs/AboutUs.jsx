import { Card, Typography } from 'antd'
import React from 'react'

const {Text, Title} = Typography


function AboutUs() {
  const isMobile = window.innerWidth <= 768


  return (
    <div className={`${isMobile ? 'mobile' : 'aboutContainer'}`}>
      <div className="aboutUsInfoContainer">
        <Card style={{backgroundColor:"transparent", color:"white", border:"none", width:"85%"}}>
        <Title style={{color:"white"}} className='aboutHeading'>OM OSS</Title>
        <Text style={{color:"white"}} className='aboutInfo'>Välkommen till Studio Blanco Tattoo. En framstående tatueringsstudio belägen på Södermalm i hjärtat av Stockholm. Studion grundades 2016 av Andy Blanco och har sedan dess varit en plats synonymt med passion att skapa unika tatueringar som berättar varje kunds unika historia.
 
 Varje medlem i vårt team har en stor passion för yrket med ett gemensamt mål är att skapa något nytänkande i en tidlös anda.<br/><br/>
  
 Som privat tatueringsstudio har vi inga fasta öppettider utan arbetar enbart efter tidsbokningar för at kunna ge varje inbokad kund den uppmärksamhet de förtjänar. För att boka en tid rekommenderar vi därför att kontakta respektive tatuerare direkt.
  
 Studions passion till konsten har inte gått obemärkt förbi. År 2021 dokumenterade SVT vårt arbete i dokumentärserien ”Under Nålen” som sträckte sig över sex avsnitt. Studion har även uppmärksammats genom olika mediekanaler, vunnit ett flertal priser och haft äran att välkomna diverse kändisar som besökt oss genom åren.  <br/><br/>
  
 Vi är enormt tacksamma till var och en av er som valt föreviga era minnen hos oss! Vi välkomnar även de nya kunderna som blir en del av vår fortsatta resa framåt.<br/><br/><br/> Mvh/ Studio Blanco Tattoo</Text>

        </Card>

      </div>
    </div>
  )
}

export default AboutUs