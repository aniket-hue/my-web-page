import React from "react";
import { ColorVariants } from "../../../../colors";
import { Container } from "../../../../components/container";
import { Section } from "../../../../components/section";
import { SectionHeading } from "../../../../components/section-heading";
import { FontType, Text } from "../../../../components/text";
import { TimelineShapes } from "./constants";

import data from "./data.json";

export const Timeline = () => {
  return (
    <Section
      shapes={TimelineShapes}
      containerProps={{
        className: "height-pct-100",
      }}
    >
      <Container>
        <SectionHeading>timeline</SectionHeading>
      </Container>

      <Container flexDirection='column' width='100' margin={{ top: 12 }} gap={6}>
        {Object.entries(data.timeline)
          .sort((a, b) => +b[0] - +a[0])
          .map(([k, v], i) => {
            return (
              <Container key={i} flexDirection='column' gap={3}>
                <Text font={FontType.TITLE_TEXT_1_SEMIBOLD} weight={500} color={ColorVariants.DARKYELLOW}>
                  {k}
                </Text>

                {v.map((e, i) => (
                  <Text
                    key={i}
                    font={FontType.TITLE_TEXT_2_SEMIBOLD}
                    mobileFont={FontType.DESCRIPTION_TEXT_REGULAR}
                    weight={400}
                    color={ColorVariants.BODYPRIMARY}
                  >
                    {e}
                  </Text>
                ))}
              </Container>
            );
          })}
      </Container>
    </Section>
  );
};
