function nowServing(name) {
  if (!name.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${name.shift()}.`
}