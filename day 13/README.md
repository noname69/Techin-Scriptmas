# Christmas School – Student Name Magic

At the North Pole Christmas School, Santa keeps a magical student list. He wants to know **how many students are girls**, based on a simple Christmas rule:

_**Girls’ first names end with the letter ‘a’ Boys’ names do not**_

You are given the list of students in the form:

_**LastName FirstName**_

written exactly like Santa keeps them in his book.

Your task is to help Santa count all girls and then list them.

---

## Your Task

Write a program that:

1. Stores all student names in an **array or object**.

2. Counts how many students are **girls** (their first name ends with ‘a’).

3. Prints:

    * First line: **number of girls**
    * Next lines: **each girl’s full name** written in the same “LastName FirstName” format

---

### Input

For example:

```typescript
const students = [
  "Petraitis Rokas",
  "Augė Artūras",
  "Mikalauskaitė Aušra",
  "Šlivka Donatas",
  "Stakėnaitė Ieva",
  "Skrėbė Domas",
  "Bruzgaitė Akvilė"
];
```

Output Example

```typescript
3
Mikalauskaitė Aušra
Stakėnaitė Ieva
Bruzgaitė Akvilė
```

---

## Usage

### CLI

To use names from file:

```bash
npx ts-node cli.ts <filename>
```

### Arguments

`<filename>` - name of the file with students names

### Example

```bash
npx ts-node cli.ts test.in
```

### Test file example

```bash
  Petraitis Rokas
  Augė Artūras
  Mikalauskaitė Aušra
  Šlivka Donatas
  Stakėnaitė Ieva
  Skrėbė Domas
  Bruzgaitė Akvilė
```

### Output

```bash
3
Mikalauskaitė Aušra
Stakėnaitė Ieva
Bruzgaitė Akvilė
```
