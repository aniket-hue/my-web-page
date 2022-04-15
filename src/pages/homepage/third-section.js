
import { Container } from "../../components/container";
import { Shapes } from "../../components/shapes";
import { Text } from "../../components/text";
import { RING, SQUARE, CUBE, HEXAGON, TRIANGLE, UPTRIANGLE } from "../../constants"

import data from "../../data.json";

export const ThirdSection = (props) => {
    return <Container withScroll={true} className='top-container'>
        <Container className='d-flex column container-lg mh-auto'>
            <Text type='130' fontWeight={400} color='veryLightBlue' className='mb-80'>
                timeline
            </Text>
            <div className='d-flex column w-100pct gap-25'>
                {Object.entries(data.timeline).map(([k, v], i) => {
                    return (
                        <div key={i} className='d-flex column gap-8'>
                            <Text type='30' fontWeight={600} color='darkYellow' className='mb-9'>
                                {k}
                            </Text>
                            {v.map((e, i) => (
                                <Text key={i} type='25' color='lightGray'>
                                    {e}
                                </Text>
                            ))}
                        </div>
                    );
                })}
            </div>
        </Container>

        <Container style={{ top: 0, zIndex: -1 }} className='p-absolute moveUpDown h-100vh w-100pct t-0'>
            <Shapes type={HEXAGON} width={60} color='razorBlue' bottom={10} right={40} />
            <Shapes type={HEXAGON} width={50} color='darkRazorBlue' top={2} left={39} />
            <Shapes type={TRIANGLE} width={100} color='darkRazorBlue' bottom={0} left={0} />
            <Shapes type={TRIANGLE} width={100} color='darkRazorBlue' bottom={20} right={30} />
            <Shapes type={TRIANGLE} width={40} color='darkRazorBlue' top={30} right={30} />
            <Shapes type={UPTRIANGLE} width={40} color='lightGreen' top={2} left={10} />
        </Container>
    </Container>
}