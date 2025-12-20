# Santa’s Shopping Trip

Santa Claus is preparing for Christmas Eve! He visited **n different stores**, and in each store he bought **m magical items** needed for gifts, decorations, or reindeer treats.

For every store, you are given **m real numbers** — the prices of the items Santa bought in that store.

## Your task

For **each store**, calculate:

1. Store number (starting from 1)
2. How many items Santa bought in that store
3. How much money Santa spent in that store (rounded to two decimal places)

At the end, calculate:

4. **The total money Santa spent across all stores**, rounded to two decimal places

## Input

The data is given directly inside the program as arrays/lists.

## Output format

For each store, print:

```code
storeNumber itemCount totalSpent
```

After all stores, print:

```code
totalSpentInAllStores
```

## Example

If Santa bought these items:

Store 1: 1.07 2.92 3.45 1.09 0.89

Store 2: 1.08 2.35 3.75 1.12 0.69

Store 3: 0.98 2.48 3.62 1.10 0.72

Your program should output:

```bash
1 5 9.42
2 5 8.99
3 5 8.90
27.31
```

## Usage

### CLI

```bash
npx ts-node cli.ts
```
