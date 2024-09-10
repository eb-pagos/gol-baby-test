import { expect, test } from "@playwright/test";
import { Data } from "../src/type";
import { getGOLBoard } from "../src";

const data: Data[] = [
    { 
        title: 'still', 
        lifes: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}], 
        expected: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}]  
    },
    { 
        title: 'blinker', 
        lifes: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}],
        expected: [{x: 1,y: 1}, {x: 2,y: 1}, {x: 3,y: 1}]
    },
    { 
        title: 'glider', 
        lifes: [{x: 1,y: 1}, {x: 1,y: 2}, {x: 2,y: 1}, {x: 2,y: 2}],
        expected: [{x: 1,y: 1}, {x: 2,y: 2}, {x: 3,y: 1}, {x: 3,y: 2}, {x: 2,y: 3}]
    },
];

test.describe("Test", async () => {
    data.forEach(({ title, lifes, expected }) => {
      test(`Test '${title} patter'`, async () => {
        expect(getGOLBoard(lifes)).toEqual(expected);
      });
    });
});
