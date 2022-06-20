import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { getSports } from "../../features/sports/sportsSlice";
import { Sport } from "../../models/models";
import { useAppSelector } from "../../redux/hooks";

import { Container, LoadingSpinner } from "./styles";
import { likeSport, unlikeSport } from "../../features/sports/sportsSlice";

import { AntDesign } from "@expo/vector-icons";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const List = () => {
  const dispatch = useDispatch();
  const sportsList = useAppSelector((state) => state.sports.list);
  const loading = useAppSelector((state) => state.sports.loading);

  useEffect(() => {
    dispatch(getSports() as any as AnyAction);
  }, [dispatch]);

  const handleFavoritePress = (sport: Sport, isFavorite: boolean) => {
    isFavorite ? dispatch(likeSport(sport)) : dispatch(unlikeSport(sport));
  };

  return (
    <>
      <ScrollView>
        <Header name="Sport List" />

        <View>
          {loading ? (
            <LoadingSpinner>
              <AntDesign name="loading1" size={24} color="#0082c3" />
            </LoadingSpinner>
          ) : (
            <Container>
              {sportsList.map((sport: Sport) => {
                return (
                  <Card
                    key={sport.id}
                    sport={sport}
                    onPressFavorite={handleFavoritePress}
                  />
                );
              })}
            </Container>
          )}
        </View>
      </ScrollView>
    </>
  );
};
