import { Container } from "../../components/container"
import { Shapes } from "../../components/shapes"
import { Text } from "../../components/text";

import { RING, SQUARE, CUBE, HEXAGON, TRIANGLE, UPTRIANGLE } from "../../constants"

import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as JsIcon } from "../../assets/js.svg";
import { ReactComponent as TsIcon } from "../../assets/ts.svg";
import { ReactComponent as EmberIcon } from "../../assets/ember.svg";
import { ReactComponent as JavaIcon } from "../../assets/java.svg";
import { ReactComponent as SassIcon } from "../../assets/sass.svg";
import { ReactComponent as ReduxIcon } from "../../assets/redux.svg";
import { ReactComponent as OpenlayersIcon } from "../../assets/openlayers.svg";
import { ReactComponent as GitIcon } from "../../assets/git.svg";
import { ReactComponent as LinuxIcon } from "../../assets/linux.svg";

const skillIconWidth = 100;
const skillIconHeight = 80;

export const SecondSection = (props) => {
    return <Container withScroll={true} className='top-container mb-90'>
        <Container className='d-flex column container-lg mh-auto'>
            <Text type='130' fontWeight={400} color='veryLightBlue' className='mb-80'>
                my skills
            </Text>
            <div className='d-flex flex-wrap gap-10'>
                <JavaIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <JsIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <TsIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <ReactIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <ReduxIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <EmberIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <SassIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <GitIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <LinuxIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
                <OpenlayersIcon className='mb-10' width={skillIconWidth} height={skillIconHeight} />
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