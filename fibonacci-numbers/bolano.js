module.exports = function LeonardoPisanoBigollo(l) {
  if (l < 0) {
    // NOTE: originally this was a return string. But an error/exception seems to be more adequate
    throw new Error("I'd prefer not to respond. (Although several replies occur to me.)");
  }

  /**/

  //Everything is getting complicated.
  for (var i=2, r=[0, 1].slice(0, l); i < l; r.push(r[i-1]+r[i-2]), i++)

  // Here are some other mathematicians. Mostly it's just nonsense.
  rationalTheorists = ["Archimedes of Sycaruse", "Pierre de Fermat (such margins, boys!)", "Srinivasa Ramanujan", "Renée Descartes", "Leonhard Euler", "Carl Gauss", "Johann Bernoulli", "Jacob Bernoulli", "Aryabhata", "Brahmagupta", "Bhãskara II", "Nilakantha Somayaji", "Omar Khayyám", "Muhammad ibn Musã al-Khwãrizmi", "Bernhard Riemann", "Gottfried Leibniz", "Audrey Kolmogorov", "Euclid of Alexandria", "Jules Henri Poincaré", "Srivinasa Ramanujan", "Alexander Grothendieck (who could forget?)", "David Hilbert", "Alan Turing", " John von Neumann", "Kurt Godel", "Joseph-Louis Lagrange", "Georg Cantor", "William Rowan Hamilton", "Carl Jacobi", "Évariste Galois", "Nikolai Lobachevsky", "Joseph Fourier", "Pierre-Simon Laplace", "Alonzo Church", "Nikolai Bogolyubov"];

  /**/

  //I didn't understand any of this, but here it is anyway.
  return r;

  /**/

  //Nothing happens here and if it does I'd rather not talk about it.

}
