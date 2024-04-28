function emptinessCheck(input) {
  if (input === null || input === undefined || input === "") {
    return true;
  }
  if (Array.isArray(input) && input.length === 0) {
    return true;
  }
  if (typeof input === "object" && Object.keys(input).length === 0) {
    return true;
  }

  return false;
}

module.exports = emptinessCheck;
