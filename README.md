# Proyecto de Automatización - Sauce Demo
## Descripción
<p>Este proyecto automatiza el flujo principal de la aplicación web Sauce Demo (https://www.saucedemo.com/) utilizando Playwright y Cucumber. Se validan escenarios clave como el inicio de sesión, el manejo del carrito de compras y la finalización de una compra, considerando tanto usuarios estándar como usuarios bloqueados.</p>
## Tecnologías utilizadas
- Playwright para la ejecución de pruebas en navegadores.
- Cucumber para la definición de escenarios en lenguaje Gherkin.
- TypeScript para el desarrollo de las pruebas.
- Node.js como entorno de ejecución.
Requisitos previos
- Tener instalado Node.js.
- Tener instalado Visual Studio Code.
- Instalar el plugin de Cucumber en Visual Studio Code.
Instalación y configuración inicial
1. Configurar permisos de ejecución en la terminal (PowerShell):
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

2. Inicializar el proyecto con Playwright:
 Clonar el repositorio

   npm init playwright@latest
   npm install

5. Organizar la estructura de carpetas:
   - Seguir la misma organización que el repositorio

6. Instalar el generador de reportes HTML:
   npm install cucumber-html-reporter
Ejecución de las pruebas
Para correr todos los escenarios de prueba:

npx cucumber-js
Generar reporte HTML
Después de correr las pruebas, para generar un reporte en HTML:

npm run generate-report

(Se debe configurar un script generate-report dentro de package.json para automatizar esta tarea.)
Usuarios utilizados en las pruebas
- Usuario estándar:
  - Username: standard_user
  - Password: secret_sauce

- Usuario bloqueado:
  - Username: locked_out_user
  - Password: secret_sauce
Notas adicionales
- Los escenarios se encuentran escritos en Gherkin para facilitar la lectura y mantenimiento de las pruebas.
- La automatización considera distintos tipos de usuarios y cubre flujos completos de compra.
- Se priorizó la claridad, la organización del proyecto y la legibilidad del código.

