# React + Vite


[Enlace de Producción](https://peaceful-narwhal-cf3bd4.netlify.app/)

Este es el enlace al entorno de producción del proyecto. Aquí puedes acceder a la versión desplegada y funcional de la aplicación.

## Instalación del Proyecto

Para instalar y ejecutar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/ivancuadra2/challenge-rewards-eth.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd chalenge-rewards-eth
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

Esto iniciará el servidor en modo de desarrollo y podrás acceder al proyecto en el puerto que tengas disponible.


# Resumen de Consultas y Respuestas del Proyecto

## 1. Consulta sobre Error GraphQL
**Pregunta:** "Field 'Transfers' of type '[EVM_Transfer_Cube!]' must have a sub selection"

**Respuesta:** Se explicó que en GraphQL es necesario especificar los campos que se quieren obtener dentro de un objeto o lista. Se proporcionó un ejemplo de cómo estructurar correctamente la consulta especificando los campos necesarios.

## 2. Consulta sobre Bitquery
**Pregunta:** "Conoces bitquery tengo una apikey para consumir un servicio que parece ser de graph ql que me podés contar al respecto?"

**Respuesta:** Se explicaron las características principales de Bitquery:
- Plataforma para obtener datos de diferentes blockchains
- Uso de GraphQL como lenguaje de consulta
- Capacidad de obtener datos históricos y en tiempo real
- Métricas y análisis de DeFi, NFTs, tokens

## 3. Consulta sobre Rewards de Ethereum
**Pregunta:** "Los rewards totales de bloques en USD de la red Ethereum a lo largo del tiempo."

**Respuesta:** 
- Se proporcionó una consulta GraphQL funcional
- Se explicó el significado de los rewards en Ethereum
- Se detallaron los componentes del reward:
  * Recompensa base del bloque
  * Comisiones por transacciones
  * MEV
  * Tips

## 4. Consulta sobre Filtros de Fecha
**Pregunta:** "Me gustaría poder hacer el filtro por fechas y con un limite de 30 registros"

**Respuesta:** Se proporcionó una consulta modificada incluyendo:
```graphql
query {
  ethereum {
    blocks(
      options: {limit: 30}
      date: {since: "2024-01-01", till: "2024-02-01"}
    ) {
      date {
        date
      }
      reward
    }
  }
}
```

## 5. Consulta sobre Acumulación de Rewards
**Pregunta:** "Estos rewards son acumulables para calcular el reward total en el mes?"

**Respuesta:** 
- Se confirmó que los rewards diarios son acumulables
- Se explicó cómo calcular totales mensuales
- Se proporcionó un ejemplo de cálculo con datos reales

## 6. Consulta sobre Visualización con React
**Pregunta:** "Quiero visualizar la información que me está devolviendo el api endpoint y quiero hacerlo utilizando react"

**Respuesta:**
- Se proporcionó un componente completo usando Apollo Client
- Se incluyeron ejemplos de visualización de datos
- Se explicaron las diferentes opciones de implementación

## 7. Consulta sobre D3.js
**Pregunta:** "Quiero hacer los gráficos con d3 js"

**Respuesta:**
- Se proporcionó una implementación usando SVG nativo
- Se explicaron las limitaciones de las librerías
- Se ofreció una solución alternativa compatible

## 8. Consulta sobre Integración D3 y React
**Pregunta:** "Como puedo integrar un grafico de d3 dentro de react, me recomendas alguna librería en particular?"

**Respuesta:**
Se recomendaron varias librerías:
1. @visx/visx (Airbnb)
2. react-d3-library
3. recharts
4. victory

Se proporcionó un ejemplo detallado usando @visx incluyendo:
- Configuración completa
- Implementación de gráficos
- Manejo de interactividad
- Tooltips y estilos

## Evolución del Proyecto
La conversación muestra una progresión lógica desde:
1. Entendimiento inicial de la API
2. Configuración correcta de consultas
3. Manipulación de datos
4. Implementación de visualizaciones
5. Mejoras y optimizaciones

Este intercambio demuestra un proceso de desarrollo iterativo, donde cada pregunta llevó a una mejora o refinamiento del proyecto, culminando en una solución completa de visualización de datos blockchain.
