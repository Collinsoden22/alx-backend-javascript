const taskFirst = () => {
  const task = 'I prefer const when I can.';
  return task;
};

const getLast = () => ' is okay';

const taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
};

console.log(`${taskFirst()} ${taskNext()}`);
