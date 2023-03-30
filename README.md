
# Proyecto IA de aplicación web con backend y frontend

Este proyecto es una aplicación web con backend realizado con Express y frontend con React. La aplicación permite subir un video a través de la web, y enviarlo a AssemblyAI, que responde con el texto correspondiente a lo que se habló en el video. Luego, se puede resumir o obtener los puntos más importantes del texto, enviándolo a ChatGPT.

![Transcript YM IMG](https://github.com/yef-marcano/transcript-ia/blob/main/client/src/style/media/proyecto.png?raw=true)

## Instalación y configuración

Para instalar y configurar el proyecto, sigue los siguientes pasos:

1.  Clona el repositorio desde GitHub:

bashCopy code

`git clone https://github.com/yef-marcano/transcript-ia` 

2.  Instala las dependencias necesarias para el backend y el frontend:

bashCopy code

`cd transcript-ia
npm install
cd client
npm install` 

3.  Crea un archivo `.env` en la raíz del proyecto, y agrega las siguientes variables de entorno:

makefileCopy code

`ASSEMBLYAI_API_KEY=<tu clave API de AssemblyAI>
CHATGPT_API_KEY=<tu clave API de ChatGPT>` 

## Funcionamiento

Una vez que hayas instalado y configurado el proyecto, puedes ejecutarlo con los siguientes comandos:

1.  Para iniciar el backend, desde la raíz del proyecto, ejecuta:

sqlCopy code

`npm start` 

2.  Para iniciar el frontend, desde la carpeta `client`, ejecuta:

sqlCopy code

`npm start` 

3.  Ahora, desde tu navegador, ingresa a la URL `http://localhost:3000` para acceder a la interfaz de usuario.
    
4.  En la interfaz de usuario, ingresa el video que deseas analizar en el campo correspondiente y haz clic en el botón "Enviar".
    
5.  Una vez que AssemblyAI haya procesado el video, el texto resultante se mostrará en pantalla. Puedes resumir o obtener los puntos más importantes del texto enviándolo a ChatGPT, utilizando los botones correspondientes.
    
6.  El resultado de la operación se mostrará en pantalla.
    

## Créditos

Este proyecto fue creado por Yeferson Marcano. Si deseas contribuir a él, por favor haz una solicitud de extracción en GitHub.