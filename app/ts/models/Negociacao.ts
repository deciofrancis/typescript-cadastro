class Negociacao {

    private _cidade;
    private _data;
    private _quantidade;
    private _valor;

    constructor(cidade, data, quantidade, valor) {
        
        this._cidade = cidade;
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

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