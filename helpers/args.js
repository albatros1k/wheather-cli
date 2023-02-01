const getArgs = (args) => {
  const res = {};

  args.forEach((arg, index, arr) => {
    if (index > 1) {
      if (arg[0] === '-') {
        if (index === arr.length - 1) {
          res[arg.substring(1)] = true;
        } else if (arr[index + 1][0] !== '-') {
          res[arg.substring(1)] = arr[index + 1];
        } else {
          res[arg.substring(1)] = true;
        }
      }
    }
  });

  return res;
};

export { getArgs };
