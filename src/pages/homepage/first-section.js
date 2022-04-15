import { Container } from "../../components/container"
import { Shapes } from "../../components/shapes"
import { Text } from "../../components/text"
import { RING, SQUARE, CUBE, HEXAGON, TRIANGLE, UPTRIANGLE } from "../../constants"

import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";


export const FirstSection = (props) => {

    return <Container withScroll={true} className='top-container d-flex h-100vh'>
        <Container className='d-flex column container-lg m-auto'>
            <Container className='head-wrapper'>
                <Text type='130' fontWeight={500} color='veryLightBlue'>
                    Heyo!
                </Text>
                <Text type='80' className='waving-hand'>
                    👋🏻
                </Text>
            </Container>

            <Container className='about-wrapper mt-30'>
                <Text type='30' fontWeight={500} lineHeight={1.5} color='darkGray'>
                    My name is Aniket. I am a frontend engineer
                    (
                    <a className='href-link' href='https://www.primathon.in' target='_blank'>
                        @Primathon
                    </a>
                    ) focused on improving myself. Always looking to learn new skills and improve on existing knowledge,
                    hoping to contribute to making the world a better place.
                </Text>
            </Container>

            <Container className='social-links d-flex text-wrap align-center gap-60 mt-90'>
                <a href='https://www.github.com/aniket-hue' target='_blank'>
                    <GithubIcon />
                </a>
                <a href='https://www.linkedin.com/in/aniket-saxena1998/' target='_blank'>
                    <LinkedinIcon />
                </a>
                <a href='https://www.instagram.com/baskaraniket_' target='_blank'>
                    <InstagramIcon />
                </a>
                <Text type='30' fontWeight={600} color='darkGray'>
                    <a
                        href='https://drive.google.com/u/0/uc?id=1IrgIlXzr7C0WIo35kP4NFsEDbMFFtWZY&export=download'
                        download
                        target='_blank'
                    >
                        Résumé
                    </a>
                </Text>
            </Container>
        </Container>

        <Container style={{ top: 0, zIndex: -1 }} className='p-absolute moveUpDown h-100vh w-100pct t-0'>
            <Shapes type={RING} width={200} color='razorBlue' top={30} left={10} />
            <Shapes type={RING} width={60} color='yellow' bottom={40} right={5} />
            <Shapes type={RING} width={40} color='razorBlue' top={9} left={0} />
            <Shapes type={SQUARE} width={200} color='darkRazorBlue' top={0} right={7} />
            <Shapes type={SQUARE} width={40} color='violet' top={10} right={40} />
            <Shapes type={SQUARE} width={30} color='green' bottom={10} left={30} />
            <Shapes type={HEXAGON} width={60} color='razorBlue' bottom={10} right={40} />
            <Shapes type={HEXAGON} width={50} color='darkRazorBlue' top={2} left={39} />
            <Shapes type={TRIANGLE} width={100} color='darkRazorBlue' bottom={0} left={0} />
            <Shapes type={TRIANGLE} width={100} color='darkRazorBlue' bottom={20} right={30} />
            <Shapes type={TRIANGLE} width={40} color='darkRazorBlue' top={30} right={30} />
            <Shapes type={UPTRIANGLE} width={40} color='lightGreen' top={2} left={10} />
        </Container>
    </Container>
}