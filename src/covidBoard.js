import React from 'react'
import Card from './card'
import Header from './header'
import Chart from './chart'
import useCovidHook from './useCovidHook'

export default () => {
  const {
    search,
    setSearch,
    sort,
    setSort,
    show,
    setShow,
    sortedCards
  } = useCovidHook()

  return (
    <div>
      <Header
        onChangeSearch={setSearch}
        search={search}
        sort={sort}
        onChangeSort={setSort}
        setShow={setShow}
        show={show}
      />
      <div>
        {show === 'grid' ? (
          sortedCards.map((c, index) => (
            <Card key={c.country} {...c} index={index + 1} />
          ))
        ) : (
          <Chart data={sortedCards} sortedKey={sort} />
        )}
      </div>
    </div>
  )
}
