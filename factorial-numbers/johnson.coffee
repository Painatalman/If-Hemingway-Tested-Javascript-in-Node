# In which various NUMBERS are summon'd by
# means of ELECTRONICK CONJURY
factorial = (n) ->
  # All arguments is against it, yet all belief is for it.
  return 1 unless n

  # Ingenious sophistry to prove the palp'bly OBVIOUS
  return 1 if n is 1

  # Recursion (n.)
  # a program that calls 'pon itself in the manner of
  # a dog returing unto its VOMIT
  return n * factorial n - 1

module.exports = factorial
