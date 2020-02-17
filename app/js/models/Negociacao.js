class Negociacao {
    constructor(_cidade, _data, _quantidade, _valor) {
        this._cidade = _cidade;
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
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
