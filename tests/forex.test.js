import { getForexPrice } from "../lib/forex.js";

const MOCK_RATE = 4.5
const MOCK_JSON_RESP = {
  rates:{ 
    MYR: MOCK_RATE }
}

global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve(MOCK_JSON_RESP)
}));

test("Returns the USDMYR Price if successful", async () => {
    expect(await getForexPrice()).toBe(MOCK_RATE);
  });

