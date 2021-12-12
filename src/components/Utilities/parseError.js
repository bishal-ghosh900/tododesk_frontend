export function parseError(message) {
  let errorMessage = message.replace(/"/g, "");
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}
