import { MOCK_EXECUTIVES } from "../mock/executive";

export async function fetchExecutives(limit?: number) {
  await new Promise((res) => setTimeout(res, 1000));
  return limit ? MOCK_EXECUTIVES.slice(0, limit) : MOCK_EXECUTIVES;
}
