import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Container, Title } from "./styles";
import { Sport } from "../../models/models";

interface HeaderProps {
  name: string;
}

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <FontAwesome5 name="grin-hearts" size={35} color="#fff" />
    </Container>
  );
};
