# Arrays + Hashing

This block trains the first interview stage: use an array scan plus a `Map` or `Set`
to remove repeated work.

The task files are starters. Implement them yourself, then run `npm test` to check
the expected behavior.

## Recognition

Reach for this pattern when the task asks for one of these:

- find a pair, duplicate, complement, or previous occurrence;
- group items by a stable key;
- count frequencies;
- answer "have I seen this before?" in one pass;
- turn repeated range sums into constant-time lookups.

## Checklist

For each task:

1. State the brute-force solution and its complexity.
2. Define the key stored in `Map` or `Set`.
3. Decide whether to check before or after storing the current item.
4. Cover empty input, duplicates, negative numbers, and no-answer cases.
5. Re-run the solution with the tests and explain `time` and `space`.

## Tasks

| Order | File                    | Main idea                    | Target complexity         |
| ----- | ----------------------- | ---------------------------- | ------------------------- |
| 1     | `validAnagram.js`       | frequency counter            | `O(n)` time, `O(k)` space |
| 2     | `groupAnagrams.js`      | group by canonical key       | `O(n * m log m)` time     |
| 3     | `productExceptSelf.js`  | prefix and suffix products   | `O(n)` time               |
| 4     | `subarraySumEqualsK.js` | prefix sum frequency map     | `O(n)` time, `O(n)` space |
| 5     | `longestConsecutive.js` | start only at sequence heads | `O(n)` average time       |

`targetSum.js` and `ArrayAnagrams.js` in the repo already cover early versions of
the first and third ideas. Do not read them before solving this block if you want
to keep the first pass clean.

## Interview Follow-Ups

- Can the answer be returned in one pass?
- What changes if the array is already sorted?
- What if multiple answers are valid?
- What does the key look like for Unicode strings or very long strings?
- What changes if values arrive as a stream?
