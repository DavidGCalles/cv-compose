# Arquitectura de Servicios - cv-compose

Este proyecto contiene una arquitectura compuesta por 8 servicios principales:

## Servicios

1. **Traefik**: Reverse proxy y API Gateway, enruta tráfico interno y gestiona certificados TLS y autenticación.
2. **Python API (Flask)**: Backend con Flask (Hello World).
3. **Node.js API (Express)**: Backend con Express (Hello World).
4. **Portal Web (Nginx)**: Página de bienvenida estática.

## Cómo iniciar

1. Instala Docker y Docker Compose.
2. Ejecuta `docker-compose up --build` en la raíz del proyecto.
3. Accede a los servicios por sus respectivos puertos.

## Estructura de carpetas

- `traefik/` - Configuración Traefik
- `python-api/` - Backend Flask
- `node-api/` - Backend Express
- `portal-web/` - Portal web estático

## Próximos pasos

Consulta el archivo TODO.md para ver las tareas recomendadas para continuar el desarrollo.