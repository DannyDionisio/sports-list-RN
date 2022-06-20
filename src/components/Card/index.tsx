import React from "react";
import { TouchableOpacity } from "react-native";

import {
  ContainerWrapper,
  Title,
  FooterWrapper,
  Logo,
  IconWrapper,
  FavoriteButton,
} from "./styles";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import coverImg from "../../assets/sports-image.png";
import { Sport } from "../../models/models";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface CardProps {
  sport: Sport;
  onPressFavorite: (sport: Sport, isFavorite: boolean) => void;
}

export const Card: React.FC<CardProps> = ({ sport, onPressFavorite }) => {
  const isFavorite = useSelector((state: RootState) =>
    state.sports.favorites.includes(sport.id)
  );

  return (
    <ContainerWrapper>
      <TouchableOpacity>
        {sport.attributes.icon ? (
          <Logo source={coverImg} />
        ) : (
          <IconWrapper>
            <MaterialIcons name="sports-kabaddi" size={24} color="#0082c3" />
          </IconWrapper>
        )}

        <FooterWrapper>
          <Title>{sport.attributes.name}</Title>

          <FavoriteButton onPress={() => onPressFavorite(sport, !isFavorite)}>
            {isFavorite ? (
              <FontAwesome name="heart" size={24} />
            ) : (
              <FontAwesome name="heart-o" size={24} />
            )}
          </FavoriteButton>
        </FooterWrapper>
      </TouchableOpacity>
    </ContainerWrapper>
  );
};
