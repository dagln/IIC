
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
class CombinationIterator<T> implements Iterator<T> {
    _combinator: Iterator<Iterator<T>>;
    _comnbined: Iterator<T>;
    _chain: Iterator<T>[];

    constructor(combinator: Iterator<Iterator<T>>, combined: Iterator<T>) {
        this._combinator = combinator;
        this._comnbined = combined;
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

 