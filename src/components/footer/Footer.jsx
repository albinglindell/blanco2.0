import { Typography } from 'antd';
import React from 'react';

const{Text, Title} = Typography

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
            <div style={styles.textContainer}>
                    <Title style={styles.textHeader}>Studio Blanco Tattoo</Title>
                    <Text style={styles.text}>
                    Studio Blanco Tattoo ligger på Ringvägen 85, mittemot Eriksdalshallen. Lättaste sättet att hitta hit är att gå från Skanstulls t-bana eller gå av vid Södra station och ta buss 4:a, 1 hållplats mot Gullmarsplan.
                    </Text>
                    <Text style={styles.text}>
                        Call us: (123) 456-7890
                    </Text>
                </div>
                <div style={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2084.3035544063578!2d18.066800106644806!3d59.30897084918797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f2193d4365%3A0x2e793057e54d8653!2sLifestyle%20Tattoo%20S%C3%B6dermalm!5e0!3m2!1sen!2sse!4v1721636936702!5m2!1sen!2sse"
                        width="100%"
                        height="300"
                        style={{ ...styles.map, filter: "grayscale(100%) invert(95%) brightness(85%)" }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map Location"
                    ></iframe>
                </div>
             
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        marginTop:24,
        background: 'rgb(31, 31, 31)',
        color: 'white',
        padding: '20px 0',
        textAlign: 'start',
        position: 'relative',
        bottom: '0',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    mapContainer: {
        flex: 1,
        paddingLeft: '20px',
    },
    textContainer: {
        flex: 1,
    },
    textHeader: {
        marginBottom: '10px',
        color:"white"
    },
    text: {
        margin: '5px 0',
        color:"white"
    },
    map: {
        border: 'none',
    },
};

export default Footer;
