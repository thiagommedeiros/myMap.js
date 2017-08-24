const validate = options =>
  !options ? new Error('No options defined.') :
  !options.el ? new Error('No element defined.') : null

export default function create (options) {
  const error = validate(options)
  if (error) throw error

  const {
    el,
    zoom = 14,
    center = {
      lat: 29.978311,
      lng: 31.1329229
    },
    click
  } = options

  const map = new google.maps.Map(document.getElementById(el), {
    zoom,
    center
  })

  if (click instanceof Function) {
    map.addListener('click', click)
  }

  map.click = fn => map.addListener('click', fn)

  return map
}
