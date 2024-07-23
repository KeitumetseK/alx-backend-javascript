export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // This task is block-scoped
    let task2 = false;  // This task2 is block-scoped
  }

  return [task, task2];
}
