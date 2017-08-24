const validate = options =>
  !options ? new Error('No options defined.') :
  !options.map ? new Error('No map defined.') :
  !options.position ? new Error('No position defined.') :
  !options.position.lat ? new Error('No latitude defined.') :
  !options.position.lng ? new Error('No longitude defined.') : null

export default function createMarker (options) {
  const error = validate(options)
  if (error) throw error

  const {
    map,
    position,
    title
  } = options

  return new google.maps.Marker({
    map,
    position,
    title
  })
}
