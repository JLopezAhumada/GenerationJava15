# Ejercicio de JavaScript

## ¿Qué hace el ejercicio?

Este ejercicio simula un pedido a domicilio. Se crean datos del cliente, la ciudad y una lista de productos con su nombre y precio. Luego se practican operaciones con arrays como `forEach`, `map`, `reduce`, `push` y `pop`.

También se calcula el subtotal, una propina del 10 %, el costo del domicilio y el total del pedido. Finalmente, se muestra la información del pedido en la consola con diferentes estados.

## ¿Por qué la propina se guarda como `const` y no como `let`?

La propina se guarda como `const` porque su valor se calcula una sola vez:

```js
const propina = subtotal * 0.10;
```

Después de calcularla, no se vuelve a cambiar la variable. `let` se usaría si necesitáramos reasignar su valor.

**Regla:** usar `const` cuando la variable no necesita ser reasignada y `let` cuando sí va a cambiar.

## ¿Qué tipo de dato tenía el subtotal cuando dio mal el resultado?

Cuando el `subtotal` da un resultado incorrecto por un problema de entrada de datos, normalmente puede estar llegando como **string (cadena de texto)** en lugar de **number (número)**.

Por ejemplo:

```js
"8000" + "6500"
```

produce:

```js
"80006500"
```

porque JavaScript está concatenando textos.

Para realizar operaciones matemáticas, el subtotal debe ser de tipo **number**:

```js
8000 + 6500
```

produce:

```js
14500
```

Por eso es importante revisar y convertir los datos a `number` cuando vienen como texto, por ejemplo usando `Number()`.

## Conceptos practicados

- `const` y `let`
- Arrays y objetos
- `forEach()`
- `map()`
- `reduce()`
- `push()` y `pop()`
- `length`
- Operaciones matemáticas
- Tipos de datos en JavaScript
