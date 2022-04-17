import { ContactForm } from '../../components/contact-form'
import { Container } from '../../components/container'
import { Shapes } from '../../components/shapes'
import { Text } from '../../components/text'
import { RING, CUBE, HEXAGON, SQUARE, TRIANGLE, UPTRIANGLE } from '../../constants'


export const FourthSection = (props) => {
    return <Container withScroll={true} className='top-container '>
        <Container className='d-flex column container-lg mh-auto'>
            <Text type='130' fontWeight={400} color='veryLightBlue' className='mb-80'>
                ping me
            </Text>
            <div className='d-flex flex-wrap gap-10'>

                <ContactForm />
            </div>
        </Container>

        <Container style={{ top: 0, zIndex: -1 }} className='p-absolute moveUpDown h-100vh w-100pct t-0'>
            <Shapes type={RING} width={150} color='lightGreen' top={30} left={10} />
            <Shapes type={RING} width={40} color='razorBlue' top={9} left={0} />
            <Shapes type={SQUARE} width={200} color='darkRazorBlue' top={0} right={7} />
            <Shapes type={SQUARE} width={40} color='violet' top={10} right={40} />
            <Shapes type={HEXAGON} width={50} color='darkRazorBlue' bottom={50} left={39} />
        </Container>
    </Container>
}