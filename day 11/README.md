# Task: Santa’s Magical Archery Challenge

The annual **North Pole Archery Tournament** is underway! Santa’s target is mounted on a special board equipped with magical electronic sensors. The lower-left corner of the board has coordinates **(0, 0)**.

At the center of the target there is a **black circle**, and around it Santa has drawn **three additional rings**, each worth a different number of points. When an elf shoots an arrow, the sensors detect exactly where it lands.

Your task is to write a program that calculates **how many points** the elf earns based on the arrow’s landing position.

You are given:

- **(xc, yc)** — the coordinates of the target’s center
- The **radius** of each ring
- The **(x, y)** coordinates where the arrow landed
- The **point values** for each ring

**Scoring rule:** If the arrow lands **exactly on a ring boundary**, the elf earns **half** of the points that would be awarded if the arrow had landed inside that ring.

Help Santa score the competition correctly so he can award the Golden Candy Cane Trophy!

## Modifications

- Target can have n rings
- Can be any number of shots

## Usage

### CLI

```bash
npx ts-node cli.ts <filename>
```

### Arguments

`<filename>` - name of the file with target parameters

### Example

```bash
npx ts-node cli.ts test.in
```

### File example

- line 1: target center coordinates (xc, yc)
- line 2: ring radius
- line 3: ring point values
- line 4: shots coordinates

```bash
0 0
3 5 7 10
10 5 2 1
(-5,0) (-1,2) (3,0) (05,1) (0,7) (3,0) (3,0)
```

### Output

```bash
30.5
```
