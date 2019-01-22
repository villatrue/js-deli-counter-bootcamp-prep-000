function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(name) {
  if (name.length) {

    return `Currently serving ${name.shift()}.`
  } else {
    return "There is nobody waiting to be served!" 
  }
}
