# Utiliza la imagen base de Node.js
FROM node:lts-alpine

# Instala la última versión de npm de forma global
RUN npm install -g npm@latest

# Instala Python y pip en el contenedor
RUN apk add --no-cache python3 py3-pip

# Crea un entorno virtual y actívalo
RUN python3 -m venv /venv
RUN source /venv/bin/activate

# Establece la variable de entorno PATH para incluir /venv/bin
ENV PATH="/venv/bin:$PATH"

# Copia el archivo de requisitos de Python al contenedor
COPY ./utils/requirements.txt .

# Actualiza pip y instala los paquetes de Python en el entorno virtual
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt
