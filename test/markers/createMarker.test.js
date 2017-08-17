import test from 'ava'
import myMap from '../../src'

test('should have createMarker as function', t => {
  t.true(myMap.createMarker instanceof Function)
})

test('should return error with no options', t => {
  const error = t.throws(() => {
    myMap.createMarker()
  }, Error)
  t.is(error.message, 'No options defined.')
})

test('should return error with no map param', t => {
  const error = t.throws(() => {
    myMap.createMarker({})
  }, Error)
  t.is(error.message, 'No map defined.')
})

test('should return error with no position param', t => {
  const error = t.throws(() => {
    myMap.createMarker({
      map: 'foo'
    })
  }, Error)
  t.is(error.message, 'No position defined.')
})

test('should return error with no position lat param', t => {
  const error = t.throws(() => {
    myMap.createMarker({
      map: 'foo',
      position: {
        lng: 'foo'
      }
    })
  }, Error)
  t.is(error.message, 'No latitude defined.')
})

test('should return error with no position lng param', t => {
  const error = t.throws(() => {
    myMap.createMarker({
      map: 'foo',
      position: {
        lat: 'foo'
      }
    })
  }, Error)
  t.is(error.message, 'No longitude defined.')
})

test('should return something TODO', t => {
  const marker = myMap.createMarker({
    map: 'foo',
    position: {
      lat: 'foo',
      lng: 'foo'
    }
  })

  console.log(marker)
})
