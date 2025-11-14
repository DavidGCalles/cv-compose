# TODO - Pasos posteriores

1. Configurar Traefik como reverse proxy/API gateway para enrutar tráfico HTTP/HTTPS y gestionar certificados TLS. ✅
2. Implementar endpoints reales en los servicios Flask y Express.
3. Crear esquemas y tablas en MariaDB según las necesidades de las aplicaciones.
4. Añadir endpoints de métricas en los servicios para Prometheus.
5. Configurar dashboards personalizados en Grafana.
6. Mejorar el portal web con documentación y enlaces útiles.
7. Agregar scripts de inicialización y variables de entorno seguras.
8. Probar la integración entre todos los servicios usando Traefik.
9. Documentar el flujo de acceso y uso para nuevos usuarios.


Proyecto A: Acortador de URLs
Un servicio clásico y muy completo para demostrar habilidades de backend. Un servicio crea URLs cortas y otro podría mostrar estadísticas.

Qué demuestras:

Diseño de APIs RESTful (POST, GET).

Operaciones CRUD (Crear, Leer, Actualizar, Borrar) con la base de datos.

Lógica de negocio y algoritmos simples (generación de códigos únicos).


---

## Hitos para alojar los proyectos

### Hito 0: nginx y landing page funcionando tras Traefik
1. ✅Configurar Traefik para enrutar el tráfico HTTP hacia el portal web (nginx). 
2. ✅Verificar que la landing page (index.html) se muestra correctamente solo tras pasar por Traefik. 
3. ✅Añadir login http
4. ✅Transfrir usuario logeado a nginx para su uso

### Hito 1: Acortador de URLs
**(En progreso)**
1. Crear el servicio Node.js Express para la API de acortador.
2. Definir endpoints RESTful (POST para crear, GET para redirigir y consultar).
3. Implementar lógica de generación de códigos únicos.
4. Conectar con MariaDB para persistencia de URLs y estadísticas.
5. Añadir endpoints de métricas para Prometheus.
6. Documentar el flujo en el portal web.

### Hito 2: Dashboard de Métricas del Entorno
1. Crear el servicio Python Flask para exponer métricas del sistema (CPU, RAM, etc.).
2. Implementar endpoints de health check y métricas.
3. Configurar Prometheus para recolectar estas métricas.
4. Crear dashboards personalizados en Grafana.
5. Documentar el acceso y visualización en el portal web.

### Hito 3: Proxy Inteligente de APIs Públicas
1. Crear un servicio (Node.js o Python) que actúe como proxy a una API pública.
2. Implementar gestión segura de claves y secretos.
3. Añadir lógica de caching en MariaDB para respuestas frecuentes.
4. Exponer métricas de uso y rendimiento para Prometheus.
5. Documentar ejemplos de uso en el portal web.

### Hito 4: Simulador de Procesamiento Asíncrono
1. Crear el servicio para recibir y encolar tareas (API REST).
2. Implementar un worker (servicio separado) que procese tareas en segundo plano.
3. Usar MariaDB como cola de trabajos simple.
4. Exponer estado y métricas de las tareas para Prometheus.
5. Documentar el flujo y ejemplos en el portal web.
