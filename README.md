# Tienda de Zapatos - Proyecto React

## Descripción del Sistema

Tienda de Zapatos es una aplicación web de comercio electrónico desarrollada en React que permite a los usuarios explorar un catálogo de productos, filtrarlos por categoría y precio, buscar productos específicos y gestionar un carrito de compras.

## Características

- Visualización de catálogo de productos
- Filtrado por categoría (Deportivo, Formal, Casual, Botas)
- Filtrado por rango de precio
- Búsqueda de productos por nombre
- Carrito de compras funcional
- Total dinámico del carrito

## Estructura del Proyecto

```
tienda-zapatos/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ShoppingCart.jsx
│   │   ├── FilterBar.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Instrucciones de Instalación

1. Asegúrate de tener Node.js instalado (versión 18+)
2. Clona o descarga el proyecto
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en http://localhost:5173

## Objetivo Académico

Este proyecto fue creado como ejercicio práctico para la materia "Configuración y Mantenimiento de Software". El objetivo es que los estudiantes identifiquen y corrijan errores de diferentes tipos:

- Errores de lógica en el código
- Malas prácticas de desarrollo
- Problemas de estructura de componentes
- Errores en el manejo de estados
- Problemas de rendimiento
- Código duplicado
- Nombres de variables poco claros
- Manejo incorrecto de props
- Falta de validaciones
- Problemas de estilos

## Tecnológico

- React 18
- Vite (herramienta de build)
- Hooks (useState, useEffect)
- CSS básico

---

**Nota para estudiantes**: El sistema contiene errores intencionales que deben ser identificados y corregidos. ¡Éxito en tu evaluación!

---

# Resolviendo parcial:

## Problemas de estilos:

### Filtros no se pueden leer si no estan seleccionados

![alt text](src/assets/error_estilo_1.png)

### Carrito de compras ilegible

![alt text](src/assets/error_estilo_2.png)

#### Solucion propuesta:

Se plantea una tableta nueva de estilos siguiendo los principios de material design manteniendo los colores azul y gris como principales

### Problemas de imagenes:

#### Solucion propuesta

El recurso de imagenes que se estaba usando esta obsoleto, se cambia por el servicio actualizado

## Problemas de logica en el codigo

### Precio total de los items se recalcula cada que se abre el shopping cart pero no si se agregan mas items del mismo producto desde el, no se esta usando el prop total que ya recibe el componente

![alt text](src/assets/error_logica_1.png)

#### Solucion propuesta

- Eliminar useState(cartTotal) y useEffect con dependencia vacía
- El total se calculaba solo al montar el componente, ignorando cambios
- Usar el prop `total` que llega desde App.jsx en lugar de recalcular

### El carrito nunca se vaciaba visualmente al finalizar la compra, se esta mutando el prop cart en checkout (lo cual viola principios de react)

![alt text](src/assets/error_logica_2.png)

#### Solucion propuesta

- Agregar prop onCheckout y función clearCart en App.jsx

### El filtro de busqueda y el de categoria se sobreponen, es decir cuando se filtra por categoria y luego se busca el de busqueda toma prioridad e ignora el de categoria

![alt text](src/assets/error_logica_3.png)

#### Solucion propuesta

- Unificar en un solo useEffect con dependencias [filter, searchTerm]
