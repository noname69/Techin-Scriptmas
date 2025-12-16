# Santa’s Spinning Clock Mystery

Santa looks at his magical clock, which currently shows **h hours** and **m minutes**. But this isn’t an ordinary clock — the minute hand can magically spin a full **360° turn** in an instant!

Your job is to determine **what time the clock will show** after the **minute hand completes one full rotation.**

The hand spins all the way around, but the time still advances just like on a real clock! That means: even though the hand spins super fast, we still treat it as if real time passed normally during that rotation.

Help Santa keep track of time as he prepares for Christmas Eve!

## Usage

### CLI

```bash
npx ts-node cli.ts <hours> <minutes>
```

### Arguments

- `<hours>` - hours on the clock
- `<minutes>` - minutes on the clock

### Example

```bash
npx ts-node cli.ts 12 30
```

### Output

```bash
Time after magical spin: 13:30
```
