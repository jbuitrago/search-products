const express = require('express')
const axios = require('axios')
const { parseItemsResponse, parseItemDetailResponse } = require('./parser')

const router = express.Router()

// Axios instance for MercadoLibre API Requests
const Request = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

// /api/items?q= :query
// https://api.mercadolibre.com/sites/MLA/search?q= :query
router.get('/items', async ({ query: { q } }, res, next) => {
  try {
    const { data: { results, filters } } = await Request.get(
      `sites/MLA/search?q=${q}&limit=4`
    )

    res.send(parseItemsResponse({ results, filters }))
  } catch (err) {
    next(err.data)
  }
})


///api/items/ :id
// https://api.mercadolibre.com/items/ :id
// https://api.mercadolibre.com/items/ :id /description

router.get('/items/:id', async ({ params: { id } }, res, next) => {
  try {
    const [{ data: itemDetail }, { data: itemDescription }] = await Promise.all(
      [
        Request.get(`items/${id}`),
        Request.get(`items/${id}/description`)
      ]
    )

    const { data: itemCategory } = await Request.get(
      `/categories/${itemDetail.category_id}`
    )

    res.send(
      parseItemDetailResponse({ itemDetail, itemDescription, itemCategory })
    )
  } catch (err) {
    next(err.data)
  }
})

module.exports = router
