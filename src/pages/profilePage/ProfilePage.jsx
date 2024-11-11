import { useParams } from 'react-router-dom'
import artists from '../../assets/artists';
import { FaInstagram } from "react-icons/fa";
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
import { Col, Flex, Image, Row, Typography } from 'antd';
import andy from "../../assets/images/Andy.webp"

const {Text, Title} = Typography

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};


function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile = useIsMobile()
    const {name} = useParams()
  useEffect(()=>{

  },[])

    const artist = artists.find( (artistName) => artistName.name === name );
  return (
    <div>
        <Header />
    <div className={`${isMobile?'MobileProfileContainer':'profileContainer'}`}>
        <div className="imageComponent"> 
        <img lazy className='artistImg' width={350} height={524.65} src={`${artist.image}`} alt="artist" />
        </div>
        <div className="infoContainer">
            <Title>{artist.name}</Title>
            <a target='_blank' rel="noreferrer" href={`https://www.instagram.com/${artist.instagram}`}><FaInstagram className='icon'/> {artist.instagram.toUpperCase()}</a>
                <Flex gap={24} vertical className="interviewContainer">
                {artist.questions.map((question, i) =>{
                   return (
                    <Flex vertical gap={4}>
                        <Title style={{margin:0}} level={4} className='question'>{question}</Title>
                       <Text className='answer'>{artist.answers[i]}</Text>
                    </Flex>
                   )
                })}
                </Flex>
        </div>
    </div>
    <Flex justify="center" wrap gap={16} style={{marginBottom:16}}>
      <Row gutter={[16,16]}>
  <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
  <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
  <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
   <Col xs={24} sm={12} md={6}>
    <Flex justify='center'>
    <Image
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
      }}
      src={andy}
    />
    </Flex>
  </Col>
</Row>

  </Flex>
    </div>
  )
}

export default ProfilePage