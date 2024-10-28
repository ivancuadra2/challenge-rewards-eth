# Prueba Técnica React/GraphQL
Registro de preguntas y respuestas durante la entrevista técnica.

## 🔍 Resolución de Problemas

### 1. TypeError: Cannot add property dia
**Q:** "App.jsx:51 Uncaught (in promise) TypeError: Cannot add property dia, object is not extensible"

**R:** Error al intentar modificar un objeto no extensible en React. Solución:
```javascript
// Correcto
const nuevoObjeto = { ...objetoOriginal, dia: nuevoValor };
// Usando setState
setEstado(prevEstado => ({ ...prevEstado, dia: nuevoValor }));
```

### 2. Apollo Client Error
**Q:** "apollo_client.js?v=0ef761c0:183 Uncaught Invariant Violation"

**R:** Error en Apollo Client causado por:
- Consultas GraphQL mal formadas
- Errores del servidor
- Problemas con variables
- Conflictos de caché

### 3. GraphQL Variables
**Q:** Implementación de variables dateStart y dateEnd en consulta GraphQL

**R:** Estructura correcta de consulta:
```javascript
const GET_ETH_REWARDS = gql`
  query GetEthRewards($since: ISO8601DateTime!, $till: ISO8601DateTime!) {
    ethereum {
      blocks(date: {since: $since, till: $till}) {
        date {
          date
        }
        reward
      }
    }
  }
`;
```

### 4. defaultProps Warning
**Q:** "Warning: EthereumChart: Support for defaultProps will be removed"

**R:** Migración a sintaxis moderna:
```javascript
// Antes ❌
function Component(props) {}
Component.defaultProps = { data: [] };

// Después ✅
function Component({ data = [] }) {}
```

### 5. Tooltip Implementation
**Q:** Implementación de tooltip en gráfico

**R:** Solución usando @visx/tooltip:
- Estilos personalizados
- Manejo de eventos mouse
- Formato de datos
- Integración con el gráfico existente

### 6. React Context
**Q:** Implementación de Context en la aplicación

**R:** Estructura implementada:
```javascript
// context/EthereumContext.jsx
const EthereumContext = createContext();

export function EthereumProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // ... lógica del contexto

  return (
    <EthereumContext.Provider value={value}>
      {children}
    </EthereumContext.Provider>
  );
}
```

### 7. Material UI List
**Q:** Implementación de List con separadores y labels

**R:** Componente desarrollado usando:
- List/ListItem
- Dividers verticales
- Typography para labels
- Stack para layout

## 🛠️ Tecnologías Utilizadas

- ⚛️ React
- 🔄 Apollo Client
- 📊 GraphQL
- 🎨 Material UI
- 📈 @visx
- 📅 dayjs

## 💡 Competencias Demostradas

- Manejo de errores en React
- Implementación de GraphQL
- Uso de Material UI
- Gestión de estado (Context)
- Visualización de datos
- Buenas prácticas

## 🎯 Objetivos Cumplidos

- ✅ Implementación de consultas GraphQL
- ✅ Manejo de estado global
- ✅ Visualización de datos
- ✅ Componentes reutilizables
- ✅ UI/UX con Material UI

## 📝 Notas Adicionales

- Código mantenible y escalable
- Buenas prácticas de React
- Manejo eficiente de estados
- Componentes modulares

---
*Entrevista realizada el 27 de Octubre, 2024*