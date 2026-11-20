import { describe, expect, it } from "vitest";
import { getAcademicClass, academicBoards } from "./catalog";

describe("public academic catalogue", () => {
  it("provides the documented board and class example paths", () => {
    expect(academicBoards.map((board) => board.slug)).toEqual(["cbse", "icse"]);
    expect(getAcademicClass("cbse", "class-9")?.name).toBe("Class 9");
    expect(getAcademicClass("icse", "class-10")?.name).toBe("Class 10");
  });

  it("returns subject details for a valid class and no result for unknown paths", () => {
    const classPage = getAcademicClass("cbse", "class-9");

    expect(classPage?.subjects[0]).toMatchObject({
      name: "Science",
      description: expect.any(String),
      mode: expect.any(String),
      duration: expect.any(String),
      fees: expect.any(String),
      image: expect.any(String),
    });
    expect(getAcademicClass("unknown", "class-9")).toBeUndefined();
    expect(getAcademicClass("cbse", "class-99")).toBeUndefined();
  });
});
