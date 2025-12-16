# Santa’s Magic Word Workshop — Anagram Groups

## Story

Santa’s elves are preparing Christmas decorations, but their magic word machine has **scrambled the letters** of many festive words! Your job is to **help Santa group together all the words that are made of the same letters** — only rearranged differently.

Each group represents **one magical decoration pattern.**

## Task

Write a function that **groups together all Christmas word anagrams.**

Two words belong in the same group if:

* They contain **exactly the same letters**
* The order of letters may differ

### Input

An array of scrambled Christmas-related words:

```ts
["eat", "tea", "tan", "ate", "nat", "bat"]
```

### Output

Return an array of grouped anagram words:

```ts
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

Each inner array represents one anagram family created by the elves.

### Bonus (Optional for Extra Elf Points)

* Sort each group alphabetically
* Sort all groups by group size (largest first)

### Rules

* Do not use built-in anagram check libraries
* The solution should be efficient for large word lists

---

## Usage

### CLI

```bash
npx ts-node cli.ts <filename>
```

### Arguments

`<filename>` - name of the file with words

### Example

```bash
npx ts-node cli.ts test.in
```

### File example

```bash
evil live veil vile
enlist listen silent
notes stone tones
dusty 
lemon art tar stop tops finder friend gogole google dare read strawberry
melon study tones
```

### Expected output

Sorted and grouped anagrams
