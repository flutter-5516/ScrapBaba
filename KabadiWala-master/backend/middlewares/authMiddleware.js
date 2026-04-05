export async function authenticateUser(req, res, next) {
  // For now, skip authentication
  return next();
}