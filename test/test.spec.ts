import { test } from "@playwright/test";
import { Data } from "../src/type";

const data: Data[] = [
    { title: 'still', lifes: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}] },
    { title: 'blinker', lifes: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}] },
    { title: 'glider', lifes: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}] },
];

test.describe("Test", async () => {
    data.forEach(({ title }) => {
      test(`Test '${title} patter'`, async () => {
      });
    });
});
