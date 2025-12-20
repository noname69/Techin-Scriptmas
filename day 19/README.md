# Santa’s Toy Collection – Trading Duplicates

Santa has a full collection of **100 different Christmas toys**. Each toy has its own number from **1 to 100**.

One of Santa’s elves, **Binky Frostynose**, has his own box of toys. Some toy numbers may appear **several times** in his box – these are duplicates. **Binky Frostynose** wants to **trade only the extra copies** of toys he already has, so he can get toys he is missing.

Your job is to help him find **which toy numbers she can trade away.**

## Task

Write a program that:

1. Reads how many toys Binky Frostynose currently has.
2. Reads all the toy numbers he owns.
3. Finds all toys that appear more than once.
4. For each such toy, adds it to the “for trade” list.
5. Prints all toy numbers for trade in increasing order.

## Input

- First line: n – the number of toys in Binky Frostynose’s box.
- Second line: n integers – the toy numbers (between 1 and 100). Some numbers may repeat.

## Output

Print all toy numbers Binky Frostynose will trade, in ascending order, separated by spaces.

---

## Example

### Example Input

```bash
17
5 12 6 7 13 7 9 10 12 17 5 16 2 2 5 4 6
```

### Example Output

```bash
2 5 6 7 12
```

## Usage

### CLI

```bash
npx ts-node cli.ts <input_file>
```

### Input File Format

- first line: n – the number of toys in Binky Frostynose’s box.
- second line: n integers – the toy numbers (between 1 and 100). Some numbers may repeat.
