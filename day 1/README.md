# Task: Santa’s Tiling Trouble

Santa is renovating one of the rooms in his workshop! You are given the dimensions of the room — its **length** and **width**, both in meters, and both whole numbers.

Your job is to calculate **how much money Santa must pay** for the tiles needed to cover the entire floor.

The price of one square meter of tiles is **m2price** coins.

But there's a twist! Because elves occasionally drop tiles, break tiles, or use them as sled ramps, Santa always buys **5% extra tiles** to cover possible losses.

**Your task:** Compute the total amount **totalCost** Santa needs to pay for all the tiles, including the extra 5%.

## Usage

### CLI

```bash
npx ts-node cli.ts <length> <width> <m2price>
```

### Arguments

- `<length>` - length of the room in meters
- `<width>` - width of the room in meters
- `<m2price>` - price of one square meter of tiles in coins

### Example

```bash
npx ts-node cli.ts 5 10 20
```

### Output

```bash
120
```

## Validations rules

- All arguments must be numbers
- All arguments must be positive
- All arguments must be float or integer
