import assert from 'power-assert'
import { world } from '../src/index'

describe('Entry point', () => {
  it('exports world', () => {
    assert(world === 'Hello World!')
  })
})
