import * as React from "react";

import { Inner } from "@/components/atoms";
import { Container, Record, Key, Value, ListValue, GoogleMapBox } from "./styles";
import { COMPANY_DATA, GOOGLE_MAP_ADDRESS } from "./const";

export const CompanyProfile: React.FC = () => {
  return (
    <Container>
      <Inner>
        {COMPANY_DATA.map(({ key, value }) => (
          <Record key={key}>
            <Key>{key}</Key>
            {typeof value === "string" && value.split("\n").length > 1 ? (
              <ListValue>
                {value.split("\n").map((txt) => (
                  <li key={txt}>{txt}</li>
                ))}
              </ListValue>
            ) : (
              <Value>{value}</Value>
            )}
          </Record>
        ))}
      </Inner>

      <GoogleMapBox>
        <iframe src={GOOGLE_MAP_ADDRESS} width="100%" height="450" allowFullScreen loading="lazy" />
      </GoogleMapBox>
    </Container>
  );
};
