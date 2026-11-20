import { describe, expect, it } from "vitest";
import { getServerEnvironment } from "./env";

describe("getServerEnvironment", () => {
  it("accepts an intentionally unconfigured local environment", () => {
    expect(() => getServerEnvironment()).not.toThrow();
  });

  it("validates a supplied application URL", () => {
    const previous = process.env.NEXT_PUBLIC_APP_URL;
    process.env.NEXT_PUBLIC_APP_URL = "not-a-url";

    expect(() => getServerEnvironment()).toThrow();

    if (previous === undefined) delete process.env.NEXT_PUBLIC_APP_URL;
    else process.env.NEXT_PUBLIC_APP_URL = previous;
  });
});
