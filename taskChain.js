const taskChain = (task1, task2, task3) => {
  console.log(task1, task2, task3);
};

function curry(callback) {
  const count = callback.length;

  return function find(...args) {
    if (args.length >= count) {
      return callback(...args);
    }

    return function (...nextArgs) {
      return find(...args, ...nextArgs);
    };
  };
}

const curriedTaskChain = curry(taskChain);

curriedTaskChain()()()(1, 2, 3);
curriedTaskChain()()()(2)(3);
curriedTaskChain(1, 2, 3);
curriedTaskChain(1)()(2, 3);
