import mt from '../render/base/matrix-transform'
import Matrix2D from '../render/base/matrix2d'

function parse(a) {
  a = a.replace(/,/g, ' ').replace(/\s+/g, ',')
  const data = {}
  const order = []
  for (let i in (a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g))) {
    let c = a[i].match(/[\w\.\-]+/g)
    const key = c.shift()
    c = c.map(item => Number(item))
    order.push(key)
    data[key] = c
  }
  return {
    order: order,
    data: data
  }
}

export function transform(props, target, x, y) {
  if (!props) return
  const args = []
  if (arguments.length > 2) {
    args.push(mt['translate'].apply(null, [x, y]))
    target.originX = x * -1
    target.originY = y * -1
  }
  if (props.transform) {
    const obj = parse(props.transform)

    obj.order.forEach(prop => {
      if (prop === 'rotate') {
        obj.data[prop][0] *= Math.PI / 180
        //svg rotate 2、3个参数不影响 position，origin会影响position，所以注释
        //if (obj.data[prop].length > 1) {
        // target.originX = obj.data[prop][1] * -1
        // target.originY = obj.data[prop][2] * -1
        //}
      }
      args.push(mt[prop].apply(null, obj.data[prop]))
    })
  }
  
  const mts = args.length > 0 ? mt.compose.apply(null, args) : {a:1,b:0,c:0,d:1,e:0,f:0}

  const t = {}
  Matrix2D.decompose(mts.a, mts.b, mts.c, mts.d, mts.e, mts.f, t)

  target.rotation = (t.rotation * 180) / Math.PI

  target.x = parseFloat(t.x) + target.originX
  target.y = parseFloat(t.y) + target.originY

  target.scaleY = t.scaleY
  target.scaleX = t.scaleX
  target.skewX = t.skewX
  target.skewY = t.skewY

  if (props.width && props.height) {
    target.width = parseFloat(props.width)
    target.height = parseFloat(props.height)
  }

  if (props['bounds-x']) {
    target.boundsX = parseFloat(props['bounds-x'])
  }
  if (props['bounds-y']) {
    target.boundsY = parseFloat(props['bounds-y'])
  }
}
