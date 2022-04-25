import { describe, expect, it } from "vitest";
import { getTimeDifference } from "./getTimeDifference";

describe("GetTimeDifference fn", () => {
  it("should give me a nice formatted time difference", () => {
    const now = new Date("2022 feb 02 13:00:00").getTime();

    expect(
      getTimeDifference(new Date("2021 feb 02 12:00:00").toString(), now)
    ).toBe("a year ago");

    expect(
      getTimeDifference(new Date("2022 feb 02 12:00:00").toString(), now)
    ).toBe("an hour ago");

    expect(
      getTimeDifference(new Date("2021 dec 02 12:00:00").toString(), now)
    ).toBe("2 months ago");
  });
});
