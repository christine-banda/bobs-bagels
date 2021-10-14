class Basket {
    constructor(basketList = []) {
        this.items = basketList;
    }

    addItem(newItem) {
        this.items.push(newItem);
    }
};

module.exports = Basket;