let calculator = {
  number_a: 0,
  number_b: 0,
  read: function(a, b) {
    this.number_a = a;
    this.number_b = b;
  },
  sum: function() {
    return this.number_a + this.number_b;
  },
  mul: function() {
    return this.number_a * this.number_b;
  }

  // ваш код
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
