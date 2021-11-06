# Archivo que representa la información para la creación de
# una imagen para Docker, indicando todos los parametros necesarios.

# Probando el concepto de Multi-stage.
# Instalando Gradle para compilar al aplicación y luego lo necesario a una imagen completa.
FROM gradle:7.2.0-jdk11 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle bootJar --no-daemon

# El comando FROM indica la imagen base.
# openjdk:8-jdk-alpine es una imagen de Java 8 muy ligera.
FROM openjdk:11.0.12-jre-slim-buster

# Quien mantiene la versión.
LABEL maintainer="Robert Dominguez <20180840@ce.pucmm.edu.do>"
# Indicando variable de ambiente para pasar el nombre
# de la base de datos.
ENV NOMBRE_APP = 'mocky-clone-app'
# forma estandar para cambiar la configuracion
ENV DB_NAME=mocky_db
# Puedo pasar las variables directas que serán tomadas por Spring Boot.
ENV spring.datasource.username='root'
ENV spring.datasource.password='123456789'
# ENV spring.datasource.url='jdbc:mysql://192.168.77.10:3306/micro_estudiante'

# Puertos que estarán disponibles de nuestra aplicación.
EXPOSE 8080

# Copiando el archivo jar generado luego de la ejecución del comando
# gradle task bootjar, se crean el jar y se copia a la imagen.
COPY --from=build /home/gradle/src/build/libs/*.jar mi_app.jar

#Comando que se ejecuta una vez es iniciada la aplicación.
ENTRYPOINT ["java", "-jar", "mi_app.jar"]