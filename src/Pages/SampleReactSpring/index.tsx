import * as React from "react";
import styles, { colorScehmes } from "./style";
import { useSprings, useSpring } from "react-spring";

//react springの見本　飛ばしてOK

const { WrapperDiv, GridContainer, AnimatedItem, AnimatedBox } = styles;

export const SampleReactSpring: React.FC = ({}) => {
  const [index, setIndex] = React.useState<number | null>(null);

  const springs = useSprings(
    colorScehmes.length,
    colorScehmes.map((item, i) => ({
      background: item.hex,
      color: item.fontColor,
      opacity: index === null || i === index ? "1" : "0.6",
      height: index === null ? "120px" : "60px",
      from: {
        opacity: "0",
        height: "120px",
      },
    }))
  );

  const [springProps, setSpringProps] = useSpring(() => ({
    from: { height: "0px", opacity: "0" },
  }));

  const onItemClick = (i: number) => {
    const { name, hex, fontColor } = colorScehmes[i];
    setSpringProps({
      name,
      background: hex,
      color: fontColor,
      height: "400px",
      opacity: "1",
    });
  };

  return (
    <WrapperDiv>
      <AnimatedItem style={springProps}>
        <AnimatedBox>{springProps.name}</AnimatedBox>
        <AnimatedBox>
          {index !== null ? colorScehmes[index].hex : ""}
        </AnimatedBox>
      </AnimatedItem>
      <GridContainer>
        {springs.map((props, i: number) => {
          return (
            <AnimatedItem
              key={i}
              onClick={() => {
                setIndex(i);
                onItemClick(i);
              }}
              style={props}
            ></AnimatedItem>
          );
        })}
      </GridContainer>
    </WrapperDiv>
  );
};
