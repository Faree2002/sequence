import { Sequence } from './Sequence';

export class SquaredSequence implements Sequence {
    private current: number = 1;

    public reset(): void {
        this.current = 1;
    }

    public getNext(): number {
        const value = this.current * this.current;
        this.current++;
        return value;
    }
}
