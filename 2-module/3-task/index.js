let calculator = {
  value_a: 0,
  value_b: 0,
  read: function(a, b) {
    this.value_a = a;
    this.value_b = b;
  },
  sum: function() {
    return this.value_a + this.value_b;
  },
  mul: function() {
    return this.value_a * this.value_b;
  }

  // ваш код
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
