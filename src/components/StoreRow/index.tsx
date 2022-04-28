import React from "react";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";

import {
  CloseIcon,
  customMarkerIcon,
  PinLinkIcon,
  TextHeader,
  TextParagraph,
} from "components/Lib";
import { ResultStore } from "utils/calculateDistance";

import {
  CloseContainer,
  Container,
  Header,
  InfoContainer,
  MapButton,
  MapLinkContainer,
  MapWrapper,
} from "./styles";

interface Props {
  store: ResultStore;
  isMobile: boolean;
}

const formatDistance = (distance: number) =>
  `${String(distance.toFixed(1)).replace(".", ",")} Km`;

function StoreRow({ store, isMobile }: Props) {
  const [isMapOpen, setIsMapOpen] = React.useState(false);
  const { name, adress, distanceFromClient } = store;

  return (
    <>
      <Container>
        <Header>
          <TextHeader>{name}</TextHeader>
          <TextHeader className="distance">
            {formatDistance(distanceFromClient)}
          </TextHeader>
        </Header>
        {isMobile && (
          <MapLinkContainer>
            <PinLinkIcon />
            <MapButton onClick={() => setIsMapOpen(true)} aria-label="open-map">
              Ver no mapa
            </MapButton>
          </MapLinkContainer>
        )}
        <InfoContainer>
          <TextParagraph>{adress}</TextParagraph>
          <TextParagraph>
            Atendimento: <br />
            Segunda a Sábado 10h às 22h | Domingo 11h às 20h
          </TextParagraph>
          <TextParagraph className="availability">
            Disponível em 4 dias úteis
          </TextParagraph>
        </InfoContainer>
      </Container>
      {isMapOpen && (
        <MapWrapper>
          <CloseContainer>
            <CloseIcon role="button" onClick={() => setIsMapOpen(false)} />
          </CloseContainer>
          <MapContainer
            center={store.position}
            zoom={16}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={store.position}
              icon={customMarkerIcon}
              key={store.name}
            >
              <Popup>{store.adress}</Popup>
            </Marker>
          </MapContainer>
        </MapWrapper>
      )}
    </>
  );
}

export default StoreRow;
