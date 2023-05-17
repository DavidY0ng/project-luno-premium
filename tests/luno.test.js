import { getLunoMYRPrice } from "../lib/luno.js";
import { getLunoUSDPrice } from "../lib/luno.js";

const MOCK_PRICE = 99
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve(MOCK_JSON_RESP)
}));

test("Returns the BTCMYR Price if successful", async () => {
    expect(await getLunoMYRPrice()).toBe(MOCK_PRICE);
  });

test("Returns the BTCUSD Price if successful", async () => {
    expect(await getLunoUSDPrice()).toBe(MOCK_PRICE);
  });
