import test from "node:test";
import assert from "node:assert/strict";
import { randomAnimalName, randomAnimalNames } from "./index";

test("randomAnimalName returns a single animal", () => {
    const result = randomAnimalName();
    assert.ok(result);
    assert.ok(result.ja);
    assert.ok(result.en);
});

test("randomAnimalName respects filter", () => {
    const result = randomAnimalName(n => n.en.includes("Cat"));
    assert.ok(result);
    assert.ok(result.en.includes("Cat"));
});

test("randomAnimalNames returns N items", () => {
    const results = randomAnimalNames(5);
    assert.equal(results.length, 5);
    for (const r of results) {
        assert.ok(r.ja);
        assert.ok(r.en);
    }
});

test("randomAnimalNames respects filter", () => {
    const results = randomAnimalNames(3, n => n.ja.includes("ねこ"));
    assert.equal(results.length, 3);
    for (const r of results) {
        assert.ok(r.ja.includes("ねこ"));
    }
});

test("filter producing empty results returns null or []", () => {
    const r1 = randomAnimalName(() => false);
    assert.equal(r1, null);

    const r2 = randomAnimalNames(5, () => false);
    assert.deepEqual(r2, []);
});
