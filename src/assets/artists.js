import Andy from "../assets/images/Andy.webp";
import Adrian from "../assets/images/Adrian.webp";
import Joel from "../assets/images/Joel.webp";
import McLovin from "../assets/images/Thomas.webp";
import Amina from "../assets/images/Amina.webp";

import AndySM from "../assets/images/Andy-sm.jpg";
import AdrianSM from "../assets/images/Adrian-sm.jpg";
import JoelSM from "../assets/images/Joel-sm.jpg";
import McLovinSM from "../assets/images/McLovin-sm.jpg";

import AndyMD from "../assets/images/Andy_md.jpg";
import AdrianMD from "../assets/images/Adrian_md.jpg";
import JoelMD from "../assets/images/Joel_md.jpg";
import McLovinMD from "../assets/images/McLovin_md.jpg";

import adrianSquare from "../assets/images/squares/adrian.jpg"
import andySquare from "../assets/images/squares/andy.jpg"
import joelSquare from "../assets/images/squares/joel.jpg"
import thomasSquare from "../assets/images/squares/thomas.jpg"
import aminaSquare from "../assets/images/squares/amina.jpg"


 const artists = [
    {
        "name":"JOEL STENLUND",
        "id": 0,
        "image": Joel,
        "square": joelSquare,
        "image_sm":JoelSM,
        "image_md":JoelMD,
        "email":"joel@studioblancotattoo.com",
        "instagram": "tatmush",
        "questions":["Hur skulle du beskriva din tatueringsstil?", " Vad inspirerar dig?" ,"Vad är din bakgrund som tatuerare? "],
        "answers":["”Är specialiserad på asiatiska tatueringar.”","”Mina kunder och deras idéer.”","”Jag började tatuera 2011. Har tatuerat flera olika stilar men fastnar för de asiatiska.”"]
    },
    {
        "name":"ADRIAN LINDELL",
        "id": 1,
        "image": Adrian,
        "square": adrianSquare,
        "image_sm":AdrianSM,
        "image_md":AdrianMD,
        "email":"adrian@studioblancotattoo.com",
        "instagram": "adrian.lindell",
        "questions":["Hur skulle du beskriva din tatueringsstil?", " Vad inspirerar dig?" ,"Vad är din bakgrund som tatuerare? "],
        "answers":["”Främst black & grey realism men är öppen för dom flesta tankar och idéer.”",
      "”I mitt designarbete inspireras jag mest av kundens story och berättelser om varför personen just vill ha tatueringen. Då upplever jag att möjligheterna att få ett nytt och häftigt bildspråk kan framkomma.”",
       "”Jag började jobba som tatuerare 2016 och har jobbat ganska mycket runt i världen för att vidga mina vyer och utvecklas i tatuerandet.”"]
    },
    {
        "name":"ANDY BLANCO",
        "id": 2,
        "image": Andy,
        "square": andySquare,
        "image_sm":AndySM,
        "image_md":AndyMD,
        "email":"andy@studioblancotattoo.com",
        "instagram": "andyblancotattoo",
        "questions":["Hur skulle du beskriva din tatueringsstil?", " Vad inspirerar dig?" ,"Vad är din bakgrund som tatuerare? "],
        "answers":["”Jag har specialiserat mig på tatueringar i gråskala! Jag strävar efter ett tidlöst uttryck med en bra balans mellan detaljrikedom och tydliga kompositioner. Både större och mindre projekt är kul!”",
      "”Främst inspireras jag av att lyssna på kundens tankar och idéer som utgångspunkt. Eftersom varje samarbete blir unikt, strävar jag efter att skapa en design som speglar just detta. Av erfarenhet blir det oftast som bäst när det finns öppenhet och tillit till att våga skapa något eget.  Utöver min passion för tatueringskonsten hämtar jag inspiration från en mängd olika källor, inklusive klassisk och modern konst, musik, film, litteratur och naturen.”",
       "”Jag började tatuera 2009 och sedan dess har det alltid varit mitt största intresse. Genom tatuerandet har jag fått möjlighet att resa runt i världen, träffa många olika människor och få ägna mig åt något jag verkligen älskar, vilket jag är tacksam för. År 2016 öppnade jag Studio Blanco Tattoo”"]
    },
    {
        "name":"THOMAS BLOMQVIST",
        "id": 3,
        "image": McLovin,
        "square": thomasSquare,
        "image_sm":McLovinSM,
        "image_md":McLovinMD,
        "email":"thomas@studioblancotattoo.com",
        "instagram": "atypical.thomas",
        "questions":["Hur skulle du beskriva din tatueringsstil?", " Vad inspirerar dig?" ,"Vad är din bakgrund som tatuerare? "],
        "answers":["”Min stil är black & gray men kommer ifrån gamla skolan där man gjorde allt som trillade in på studion, så jag kan fortfarande uppskatta att göra andra stilar lite då och då.”",
      "”Kanske låter klyschigt men min största inspiration är nog att se hur folk lyser när dom går och kollar i spegeln, att få göra nån mer nöjd med sig själv är nått jävligt speciellt.”",
       "”Jag började tatuera som 17 åring”"]
    },
    {
        "name":"AMINA SELLING",
        "id": 4,
        "image": Amina,
        "square": aminaSquare,
        "image_sm":Amina,
        "image_md":Amina,
        "email":"amina@studioblancotattoo.com",
        "instagram": "aminaselling",
        "questions":["Hur skulle du beskriva din tatueringsstil?", " Vad inspirerar dig?" ,"Vad är din bakgrund som tatuerare? "],
        "answers":["”Amina Selling kvinnlig tatuerare. Jobbar specifikt med black and grey”",
        "”Mötet med andra människor är inspirerande. Mina kunders historier och sinnes intryck skapar ett fint möte och den känslan vill jag förmedla på både hud och konst.”",
       "”Min resa som tatuerare började 2018. Vilket var väldigt givande på många sätt! Att jag idag kan jobba som konstnär och tatuera är jag tacksam för!”"]
    }
]
export default artists