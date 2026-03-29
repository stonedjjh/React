# date-fns

date-fns proporciona el conjunto de herramientas más completo, a la vez que simple y consistente, para manipular fechas de JavaScript en el navegador y en Node.js.

## Instalación

```bash
npm install date-fns --save
# or
yarn add date-fns
```

## Ejemplo

```javascript
import { formatDistance, subDays } from "date-fns";

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
//=> "3 days ago"
```
