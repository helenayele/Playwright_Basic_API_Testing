import { test, expect, request } from '@playwright/test'

test('API Get Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/collections/products/records?project_id=33769',
        { headers: { "x-api-key": 'Replace your api key here" } }
    )

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Wireless Headphones')

})
test('API Post Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/collections/products/records?project_id=33769',
        {
            headers: {
                "x-api-key": "Replace your api key here",
                'X-Reqres-Env': 'prod',
                'Content-Type': 'application/json'
            },
            data:
            {
                "name": "Helen Wired Headphones",
                "price": 60.90,
                "category": "Electronics",
                "in_stock": true
            }
        })

    expect(response.status()).toBe(201)
    const text = await response.text()
    expect(text).toContain('Helen')

})
test('API Put Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/collections/products/records/9272cbb8-48e2-4307-aa05-8488970c9789?project_id=33769',
        {
            headers: {
                "x-api-key": "Replace your api key here",
                'X-Reqres-Env': 'prod',
                'Content-Type': 'application/json'
            },
            data:
            {
                "name": "Helen Wired Headphones",
                "price": 60.90,
                "category": "Electronics",
                "in_stock": true
            }
        })

    expect(response.status()).toBe(200)
    const text = await response.text()
    console.log(text)
    expect(text).toContain('Helen')

})

test.only('API Delete Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/collections/products/records/9272cbb8-48e2-4307-aa05-8488970c9789?project_id=33769',
        {
            headers: {
                "x-api-key": "Replace your api key here",
                'X-Reqres-Env': 'prod',
                'Content-Type': 'application/json'
            }
        })

    expect(response.status()).toBe(204)
})
