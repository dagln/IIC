
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
class ResponderIterator<T> implements Iterator<T> {
    _iterator: Iterator<T>;
    public successor: Iterator<T>;
    constructor(iterator: Iterator<T>, successor: Iterator<T>) {
        this._iterator = iterator;
        this.successor = successor;
    }
    next(): void {
        this._iterator.next();
    }
    current(): T {
        return this._iterator.current();
    }
    is_done(): boolean {
        return this._iterator.is_done();
    }
}
class CombinationResponderIterator<T> extends ResponderIterator<T> {
    _iterator: Iterator<T>;
    _successor: Iterator<T>;
    // constructor(iterator: Iterator<T>, successor: Iterator<T>) {
    //     this._iterator = iterator;
    //     this._successor = successor;
    // }
    next(): void {
        if(this.is_done()){
            this._successor.next();
        }
    
    }
    current(): T {
        return this._successor.current();
    }
    is_done(): boolean {
        return this._successor.is_done();
    }
   
}
class CombinationIterator<T,K extends AggregateIterationBuilder<T>> implements Iterator<T>{
    _responderIterator: ResponderIterator<T>;
    _combined: Iterator<T>;
    _current: T;
    constructor(combinator: Iterator<K>, combined: Iterator<T>){
        this._combined = combined;
        this._responderIterator = 
        new ResponderIterator<T>(combined, combinator.current().create_iterator());
    }
    next(): void {
        if(!this._combined.is_done()) {
            this._combined.next();
        } else {
            if(this._responderIterator.is_done()) {
                return;
            }
            let _internalIterator = new this.    
            
        }
    }
    current(): T {
        return this._combined.current();
    }
    is_done(): boolean {
        return (this._combined.is_done() && this._responderIterator.is_done());
    }

}

class CompositeIterator<T> implements AggregateIterator<T> {
    public iterators: Iterator<T>[];
    _current: Iterator<T>;
    _counter: number;
    constructor() {

    }
    new(iterators: Iterator<T>[]) : CompositeIterator<T> {
        let _iterator =  new CompositeIterator<T>();
        _iterator.iterators = iterators;
        return _iterator;
    }
    next(): void {
        this._current = this.iterators[this._counter++];
    }
    current(): Iterator<T> {
        return this._current as Iterator<T>;
    } 
    is_done(): boolean {
        return this._counter == this.iterators.length;
    }
    next_level(): AggregateIterator<T> {
        
    }
}
interface AggregateIterator<T> implements Iterator<Iterator<T>> {
    iterators: Iterator<T>[];
    next_level: () => AggregateIterator<T>;
    next: () => void;
    current: () => Iterator<T>
    is_done: () => boolean;
}
interface SingleIterator<T> implements Iterator<T> {

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

 