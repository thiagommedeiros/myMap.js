import test from 'ava'
import myMaps from '../src'

test('should have markers function', t => {
  t.true(myMaps.markers instanceof Function)
})
