let ladder = {
    value: 0,
    up: function () {
        this.value++;
        return this;
    },
    down: function () {
        this.value--;
        return this;
    },
    showStep: function () {
        console.log(this.value);
        return this;
    },
};

ladder.up().up().down().showStep(); // 1