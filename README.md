# Proyecto Contador

Este es un proyecto de React que implementa un contador con funcionalidades de incremento y restablecimiento, utilizando el hook `useState` para manejar el estado. La interfaz está diseñada con Tailwind CSS, asegurando que el diseño sea limpio, responsivo y fácil de usar.

## Características

- Contador: Un número que puede ser incrementado y restablecido.
- Componentes Reutilizables: El proyecto está dividido en componentes reutilizables como `Header`, `Section`, y `Counter`.
- Diseño Responsivo: Usando Tailwind CSS, el diseño se adapta a diferentes tamaños de pantalla.

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio
Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/Counter.git

```


### 2. Instala las dependencias necesarias con npm
```bash
 npm install
 ```

### 3.  Configurar Tailwind CSS

```bash

npm install -D tailwindcss 
npx tailwindcss init

```

https://tailwindcss.com/docs/installation consulta en su documentacion

- Luego, agrega las directivas de Tailwind en el archivo src/index.css

```bash

@tailwind base;
@tailwind components;
@tailwind utilities;

```

### 4. Ejecuta el proyecto

```bash

npm start

```


## Estructura 

src/
├── components/
│   ├── Counter.js
│   ├── Section.js
│   └── Header.js
├── App.js


### Autora : Dania Merari Urias

