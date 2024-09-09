import { Sequence } from './Sequence';

export class FibonacciSequence implements Sequence {
    private current: number = 1;
    private next: number = 1;

    public reset(): void {
        this.current = 1;
        this.next = 1;
    }

    public getNext(): number {
        const value = this.current;
        this.current = this.next;
        this.next = value + this.next;
        return value;
    }
}
