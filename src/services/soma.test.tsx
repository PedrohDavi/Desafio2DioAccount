import { multi, soma } from './soma'

describe ('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

})


describe('multi', () => {
    it('Deve multiplicar os numeros informados', () => {
        const value = multi(5, 2)
        expect(value).toBe(10)
    })
})