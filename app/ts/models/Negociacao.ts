class Negociacao {

    constructor(private _cidade: string, private _data: Date, private _quantidade: number, private _valor: number) {}

    get cidade() {

        return this._cidade;

    }

    get data() {

        return this._data;

    }

    get quantidade() {

        return this._quantidade;

    }

    get valor() {

        return this._valor;

    }

    get volume() {

        return this._quantidade * this._valor;

    }
}