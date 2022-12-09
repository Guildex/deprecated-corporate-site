import * as React from "react";

import { Inner } from "@/components/atoms";
import config from "@/lib/config";
import { Container, Heading, Break, TextBox, Text } from "./styles";

export const KeyVisualImage: React.FC = () => {
  return (
    <Container>
      <Inner>
        <TextBox>
          <Heading>
            開発者こそ開拓者であれ
            <br />
          </Heading>
          <Text>
            {config.site_description.split("、").map((txt, index, self) => (
              <span key={txt}>
                {txt}
                {index !== self.length - 1 && "、"}
                <Break />
              </span>
            ))}
          </Text>
        </TextBox>
      </Inner>
    </Container>
  );
};
