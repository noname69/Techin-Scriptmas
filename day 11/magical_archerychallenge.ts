export class Target {
  constructor(
    public xc: number,
    public yc: number,
    public radius: number[],
    public points: number[]
  ) {}

  scoreShot(x: number, y: number): number {
    const dx = x - this.xc;
    const dy = y - this.yc;
    const distance = Math.sqrt(dx * dx + dy * dy);

    for (let i = 0; i < this.radius.length; i++) {
      const r = this.radius[i]!;
      const p = this.points[i]!;

      if (distance < r) return p;
      if (distance === r) return p / 2;
    }

    return 0;
  }

  scoreAll(shots: { x: number; y: number }[]) {
    return shots.map((s) => this.scoreShot(s.x, s.y));
  }

  scoreSum(scores: number[]) {
    return scores.reduce((acc, score) => acc + score, 0);
  }
}
