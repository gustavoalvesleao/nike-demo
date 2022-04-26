// The distance between the client and the plan will be consider to be the radius (taking the client position as the center)
// Therefore only stores within this radius will be considered to be in the plan

type Point = [number, number];
type InputStores = Array<Store>;
type ResultStores = Array<ResultStore>;

interface Store {
  name: string;
  number: number;
  latitude: string;
  longitude: string;
  adress: string;
}

interface ResultStore extends Store {
  distanceFromClient: number;
  position: Point;
}

const sortByDistance = (storeA: ResultStore, storeB: ResultStore) =>
  storeA.distanceFromClient - storeB.distanceFromClient;

const getEuclideanDistance = (pointA: Point, pointB: Point) => {
  const a = (pointA[0] - pointB[0]) ** 2;
  const b = (pointB[1] - pointA[1]) ** 2;
  return Math.sqrt(a + b);
};

const getStoresWithDistanceFromClient = (
  stores: InputStores,
  client: Point
): ResultStores =>
  stores.map((store) => {
    const position: Point = [Number(store.latitude), Number(store.longitude)];
    return {
      distanceFromClient: getEuclideanDistance(position, client),
      position,
      ...store,
    };
  });

const getStoresInsidePlan = (
  stores: ResultStores,
  radius: number
): ResultStores => stores.filter((store) => store.distanceFromClient <= radius);

const getNearStores = (
  stores: ResultStores,
  numberOfStores: number
): ResultStores => {
  const numStores =
    numberOfStores > stores.length ? stores.length : numberOfStores;
  return [...stores].sort(sortByDistance).slice(0, numStores);
};

const getStores = (
  stores: InputStores,
  client: Point,
  plan: Point,
  numberOfStores = 3
): ResultStores => {
  const radius = getEuclideanDistance(client, plan);
  const mappedStores = getStoresWithDistanceFromClient(stores, client);
  const filteredStores = getStoresInsidePlan(mappedStores, radius);
  return getNearStores(filteredStores, numberOfStores);
};

export { getStores };
export type { InputStores, Point };
