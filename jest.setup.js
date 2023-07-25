import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";

const server = setupServer();

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error",
  })
);

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
