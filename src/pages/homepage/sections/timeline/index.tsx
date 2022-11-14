import React from "react";
import { ColorVariants } from "../../../../colors";
import { Container } from "../../../../components/container";
import { ShapesBackdrop } from "../../../../components/shapes-backdrop";
import { FontType, Text } from "../../../../components/text";
import { TimelineShapes } from "./constants";

import data from "./data.json";

export const Timeline = () => {
  return (
    <Container withScroll position='relative' height='h-100vh'>
      <Container width='w-60pct' margin='auto' flexDirection='column' zIndex={5}>
        <Text font={FontType.H1_TEXT_BOLD} weight={500} color={ColorVariants.VERYLIGHTBLUE}>
          timeline
        </Text>

        <Container flexDirection='column' width='w-100pct' margin={{ top: 12 }} gap={6}>
          {Object.entries(data.timeline)
            .sort((a, b) => +b[0] - +a[0])
            .map(([k, v], i) => {
              return (
                <Container key={i} flexDirection='column' gap={3}>
                  <Text font={FontType.TITLE_TEXT_1_SEMIBOLD} weight={500} color={ColorVariants.DARKYELLOW}>
                    {k}
                  </Text>

                  {v.map((e, i) => (
                    <Text key={i} font={FontType.TITLE_TEXT_1_SEMIBOLD} weight={500} color={ColorVariants.DARKGRAY}>
                      {e}
                    </Text>
                  ))}
                </Container>
              );
            })}
        </Container>
      </Container>

      <ShapesBackdrop shapes={TimelineShapes} />
    </Container>
  );
};
