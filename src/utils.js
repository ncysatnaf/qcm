
export const curry = (f, ...fn) => fn.length === f.length ? f(...fn) : curry.bind(this, f, ...fn)

export const compose = (f,...fn) => fn.length === 0 ? f : (...args) => f(compose(...fn)(...args))

export const take  = (take,arr) => arr.slice(0,take)

const match = (pattern, str) => {
  return str.match(pattern)
}

const getHexPattern = (size) => {
  return new RegExp(`#?([\\da-fA-F]{${size}})`,'g')
}

export const matchHex = compose(curry(match), getHexPattern)
