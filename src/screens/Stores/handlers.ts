import { rest } from "msw";

import { buildStore } from "test/test-utils";

const delay = 200;
const geoLocationURL = `${process.env.REACT_APP_API_URL}geolocation-api/stores`;

const stores = Array.from({ length: 3 }, (_e, i) =>
  buildStore({
    overrides: {
      name: `Loja ${i + 1}`,
    },
  })
);

const handlers = [
  rest.get(geoLocationURL, async (_req, res, ctx) =>
    res(ctx.delay(delay), ctx.json(stores))
  ),
];

export { handlers, geoLocationURL };
