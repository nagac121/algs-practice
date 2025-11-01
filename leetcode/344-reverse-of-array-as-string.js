/**
 * 344. Reverse String
 * Easy
 * https://leetcode.com/problems/reverse-string/description/?utm_source=chatgpt.com
 * interview: docler
 * The print function will return a comma separated list of the brands.
 * You have to make the print function work by only modifying the class.
 */

class BrandCollector {
  get brands() {
    return ["Docler", "LiveJasmin", "Oranum", "Google", "Apple", "Coca-Cola"]
      .reverse()
      .toString();
  }

  // The constructor cannot be changed! DO NOT EDIT IT!
  constructor() {
    return this;
  }
}
/* DO NOT EDIT TAIL */

function main() {
  function print() {
    return Array.from(new BrandCollector()).join(",");
  }
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const result = print();
  ws.write(result + "\n");
  ws.end();
}
