
export interface Iterator<Item> {
       next: () => void;
       current: () => Item;
       is_done: () => boolean;
}
class ArrayIterator<T> implements Iterator<T> {
    items : T[];
    _current : number;

    constructor(items : T[]) {
        this.items = items;
    }
    next(): void {
        this._current++;
    }
    current(): T {
        return this.items[this._current];
    }
    is_done(): boolean {
        return this._current == this.items.length - 1;
    }
}


 export interface AggregateIterationBuilder<T> {
     create_iterator() : Iterator<T>;
 }
 export class ArrayIterationBuilder<T> implements AggregateIterationBuilder<T> {
     items: T[];
     constructor(items: T[]) {
         this.items = items;
     }
     create_iterator(): ArrayIterator<T> {
        return new ArrayIterator<T>(this.items);
     }
 }

 