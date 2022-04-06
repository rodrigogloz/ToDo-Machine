const strand = "ATTGC";

const dna = text.split("");

function DNAStrand(dna) {
  return dna.replace("A", "T");
}

console.log(DNAStrand);
