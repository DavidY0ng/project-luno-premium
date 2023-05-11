import { getLunoMYRPrice } from "../lib/luno";
import { getLunoUSDPrice } from "../lib/luno";

const MOCK_STATUS_CODE = 500

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_STATUS_CODE,
  json: () => { }
}));



test("Returns Message for Failed Luno BTCMYR Response", async () => {
  expect(await getLunoMYRPrice()).toBe("Failed to retrieve price");
});

test("Returns Message for Failed Luno BTCUSD Response", async () => {
    expect(await getLunoUSDPrice()).toBe("Failed to retrieve price");
  });