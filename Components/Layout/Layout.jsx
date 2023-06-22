import Header from './Header';
import Footer from './Footer';
import { Fragment, useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Router, { useRouter } from 'next/router';
import variables from '@/styles/variables';

const Layout = ({ children }) => {
    const router = useRouter();

    const photos =
        useContext(optContext).options.data.attributes.transitionImages.data;

    let color = variables.char_500;
    const [photo, setPhoto] = useState(photos[0].attributes.url);

    const pickPhoto = (list) => {
        return list[Math.floor(Math.random() * list.length)].attributes.url;
    };

    Router.events.on('routeChangeStart', (url) => {
        setPhoto(pickPhoto(photos));
    });

    return (
        <AnimatePresence mode='wait'>
            <Fragment key={router.asPath + '-page'}>
                <motion.div
                    key='page-animation-slide'
                    id='page-animation-slide'
                    style={{
                        backgroundColor: `${color}`,
                        position: 'fixed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        width: '100vw',
                        zIndex: 2147483632,
                        paddingTop: '130px',
                    }}
                    initial={{
                        x: "0%"
                    }}
                    animate={{
                        x: '100%',
                        transitionEnd: {
                            x: '-100%',
                        },
                    }}
                    exit={{
                        x: '0%',
                        transitionEnd: {
                            x: '0%',
                        },
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                >
                    <img
                        src={photo}
                        alt='Pizza Icon'
                        style={{
                            maxWidth: '70vw',
                            maxHeight: '70vh',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </motion.div>
                <Header />
                <main id='#main'>{children}</main>
                <Footer />
            </Fragment>
        </AnimatePresence>
    );
};

export default Layout;
