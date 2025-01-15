# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de Angular
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación para producción (especificando el nombre del proyecto)
RUN npm run build -- --configuration production --project EstadisticasProgramacion

# Etapa 2: Servidor
FROM nginx:alpine

# Copiar los archivos compilados de la etapa de construcción a la carpeta de Nginx
COPY --from=build /app/dist/estadisticas-programacion /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
