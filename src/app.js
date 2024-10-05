let domain = ["Facebook", "Google", "Instagram"];
let end = [".com", ".net", ".org"];

// randon domain math.floor and math.random //

function domainGenerator() {
  let randonDomain = domain[Math.floor(Math.random() * domain.length)];
  let randonEnd = end[Math.floor(Math.random() * end.length)];

  let completeDomain = randonDomain + randonEnd;
  return completeDomain;
}
console.log(domainGenerator());
