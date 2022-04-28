import React from "react";
import { useTheme } from "styled-components";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";

import {
  customMarkerIcon,
  TextHeader,
  ArrowDown,
  TextParagraph,
  ErrorMessage,
} from "components/Lib";
import InputSearch from "components/InputSearch";
import {
  getStores,
  InputStores,
  Point,
  ResultStores,
} from "utils/calculateDistance";
import StoreRow from "components/StoreRow";

import { useMediaQuery } from "hooks/useMediaQuery";
import { useAsync } from "hooks/useAsync";
import PrimaryLayout from "layouts/PrimaryLayout";
import { client } from "utils/api-client";

import {
  Container,
  InputSearchContainer,
  MapWrapper,
  ResultsContainer,
  ResultsHeader,
  StoresContainer,
} from "./styles";

function isValidCoordinate(input: string) {
  const regex =
    /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
  return regex.test(input);
}

function StoresScreen() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.device.mobile);

  const [userPosition, setUserPosition] = React.useState<Point>([0, 0]);
  const [queried, setQueried] = React.useState(false);
  const [stores, setStores] = React.useState<ResultStores>([]);

  const { data, error, run, setError, isLoading, isError, isSuccess } =
    useAsync<InputStores>();

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    run(client("geolocation-api/stores"));
  }, [queried, run, userPosition]);

  React.useEffect(() => {
    setStores(getStores(data || [], userPosition, [100, 100]));
  }, [data, userPosition]);

  const handleSearch = (coordinate: string) => {
    if (isValidCoordinate(coordinate)) {
      const userInput = coordinate.split(",");
      setUserPosition([Number(userInput[0]), Number(userInput[1])]);
      setQueried(true);
    } else {
      setError(
        new Error(
          "Por favor insira uma coordenada válida. Por exemplo: -14, -53"
        )
      );
    }
  };

  return (
    <PrimaryLayout>
      <Container>
        <TextHeader>Lojas</TextHeader>
        <InputSearchContainer>
          <InputSearch
            isError={isError}
            isLoading={isLoading}
            onSearchSubmit={handleSearch}
            placeholder="Busque por endereço ou CEP. Ex.: -14, -53"
            renderSearchButton={!isMobile}
            ariaLabel="search-store"
          />
        </InputSearchContainer>
        {isError && <ErrorMessage error={error as Error} variant="inline" />}
        {isSuccess && (
          <StoresContainer>
            <ResultsContainer>
              <ResultsHeader>
                <TextParagraph>Menor distância</TextParagraph>
                <ArrowDown />
              </ResultsHeader>
              {stores.map((store) => (
                <StoreRow store={store} isMobile={isMobile} key={store.name} />
              ))}
            </ResultsContainer>
            {!isMobile && (
              <MapWrapper>
                <MapContainer
                  center={userPosition}
                  zoom={4}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={userPosition} key="user">
                    <Popup>Você está aqui!</Popup>
                  </Marker>
                  {stores.map((store) => (
                    <Marker
                      position={store.position}
                      icon={customMarkerIcon}
                      key={store.name}
                    >
                      <Popup>{store.adress}</Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </MapWrapper>
            )}
          </StoresContainer>
        )}
      </Container>
    </PrimaryLayout>
  );
}

export default StoresScreen;
