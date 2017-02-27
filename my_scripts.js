function hello(name) {
  console.log("Hello, " + name + "!")
};

function say_n_times(word, n) {
  for (i = 0; i < n; i++) {
    if (i % 2 == 0) {
      console.log(i + "th time saying: even!")
    } else {
      console.log(i + "th time saying: odd!")
    }
  };
};

function sum(a, b) {
  return a + b
};

function mul(a, b) {
  return a * b
};
