# Semana 04 · Laboratorio independiente: Pedidos de cafetería

**DSY1102 · Constructores, estado válido y colaboración entre objetos · Java 21**

## Caso
Una pequeña cafetería registra pedidos de sus clientes. Cada `Pedido` tiene código, un `Cliente` y un total; admite aumentar el monto y aplicar descuentos válidos. Un pedido no debe terminar con total negativo. **Sin herencia, interfaces, colecciones, excepciones ni persistencia**: eso corresponde a contenidos futuros.

## Proyecto autónomo
Abre un proyecto Java **nuevo**, `PedidosCafeteriaS04`. No reutilices CuentaSimpleS02, CuentaSeguraS03, Veterinaria ni PetCare.

## Archivos finales
```text
PedidosCafeteriaS04/src/
  Main.java
  Cliente.java
  Pedido.java
```

## Ruta con checkpoints
1. [01 · Proyecto y Cliente](01-cliente.md)
2. [02 · Pedido con colaboración](02-pedido.md)
3. [03 · Integrar desde Main](03-integracion.md)
4. [04 · Casos de prueba y entrega](04-pruebas.md)

## Listo cuando
- [ ] Un Cliente nace con todos sus datos.
- [ ] Pedido recibe un Cliente ya construido, sin copiar sus atributos.
- [ ] `agregarMonto` y `aplicarDescuento` respetan reglas de negocio.
- [ ] Un descuento inválido no altera el total.
- [ ] La consola muestra operaciones reproducibles.

## Talleres históricos opcionales de profundización

Las secuencias **[Evolución de Cuenta](../../ejercicios/semana-04/evolucion-cuenta/)** y **[Scanner → LectorConsola](../../ejercicios/semana-04/evolucion-scanner/)** son talleres de refactorización por etapas conservados para consulta. **No se consideran ejercicios mínimos obligatorios**, ni sustituyen el laboratorio oficial de Pedidos de cafetería.
