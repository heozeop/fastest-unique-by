export function checkExecutionTime(call: () => unknown) {
  const start = process.hrtime();
  call();
  const end = process.hrtime(start);

  return end[0] + end[1] / 1e9;
}
