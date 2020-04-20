import { useEffect, useState } from 'react'

const flagTunning = (data, country) => {
  const mapping = {
    india: () => [data[1]],
  }

  return mapping[country.toLowerCase()]
    ? mapping[country.toLowerCase()]()
    : data
}

const countryTunning = (country) => {
  const c = country.toLowerCase()
  const mapping = {
    uk: () => 'GB',
    czechia: () => 'czech',
  }
  return mapping[c] ? mapping[c]() : country
}

export default (country) => {
  const [flag, setFlag] = useState('#')
  useEffect(() => {
    const cached = localStorage.getItem(country)
    if (cached) {
      return setFlag(JSON.parse(cached).flag)
    }
    fetch(
      `https://restcountries.eu/rest/v2/name/${countryTunning(
        country
      )}?fields=name;flag`
    )
      .then((res) => res.json())
      .then((data) => flagTunning(data, country))
      .then(
        (res) =>
          (res[0] && localStorage.setItem(country, JSON.stringify(res[0]))) ||
          res
      )
      .then((data) => data[0] && setFlag(data[0].flag))
  }, [country])
  return {
    flag,
    setFlag,
  }
}
