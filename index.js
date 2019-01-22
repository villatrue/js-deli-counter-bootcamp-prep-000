function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length) {

    return `Currently serving ${line.shift()}.`
  } else {
    "The line is currently empty." 
  }
}