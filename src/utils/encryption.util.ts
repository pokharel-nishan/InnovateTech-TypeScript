const bcrypt = require("bcrypt");

export function encrypt(data: string) {
  const saltRounds = 12;
  const encryptedData = bcrypt.hashSync(data, saltRounds);
  return encryptedData;
}

export function compare(data: string, encryptedData: string) {
  const isVerified = bcrypt.compareSync(data, encryptedData);
  return isVerified;
}
