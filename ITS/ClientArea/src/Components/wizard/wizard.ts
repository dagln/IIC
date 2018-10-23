export interface IWizard {
    name: () => string;
    apply_view: () => void;
}

export class CompositeWizard implements IWizard {
    steps: IWizard[];
    _name: string;
    name(): string {
        return this._name;
    }
    apply_view(): void {
        this.apply_stepbar();
        for(let _wizard of this.steps) {
            _wizard.apply_view();
        }
    }
    apply_stepbar(): void {

    }
}

export class LeafWizard implements IWizard {
    _name: string;
    name(): string {
        return this._name;
    }
    apply_view(): void {

    }
}
