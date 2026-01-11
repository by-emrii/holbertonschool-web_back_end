export default function guardrail(mathFunction) {
  const queue = [];
  try {
    // execute func
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    // if it throws, push error msg
    queue.push(err.toString());
  } finally {
    // always append this msg regardless of success or error
    queue.push('Guardrail was processed');
  }

  return queue;
}
