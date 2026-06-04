## UnaHur Anti-Social Net

Backend desarrollado para la materia de Estrategias de Persistencia.

El proyecto consiste en una red social estilo anti-social donde los usuarios pueden:

1. crear publicaciones
2. comentar posts
3. subir imágenes
4. usar tags
5. seguir usuarios.
_________________________________________________________

# Tecnologías utilizadas

Node.js
Express.js
Sequelize
SQLite
Swagger
Multer
Dotenv
_________________________________________________________

# Instalacion

1. Clonar proyecto
   - git clone URL_DEL_REPOSITORIO

2. Entrar a la carpeta 
   - cd antiSocialRelationalGrupoIndividual

3. Instalar dependecias
   - npm install

4. Ejecutar proyecto
   - npm run dev
_________________________________________________________

# Swagger

La documentación Swagger se encuentra en:
   -   http://localhost:3000/api-docs
_________________________________________________________

# Funcionalidades

1. Users
   - Crear usuario
   - Obtener usuarios
   - Editar usuario
   - Eliminar usuario
2. Posts
   - Crear publicaciones
   - Obtener publicaciones
   - Editar publicaciones
   - Eliminar publicaciones
3. Comments
   - Crear comentarios
   - Obtener comentarios
   - Eliminar comentarios
4. Tags
   - Crear tags
   - Asociar tags a posts
   - Obtener tags
5. Upload de imágenes
Los posts permiten:
   - subir imágenes
   - asociar imágenes
   - almacenar URLs
Las imágenes se guardan en:   src/uploads
_________________________________________________________

# Relaciones implementadas

1:N

User → Posts
User → Comments
Post → Comments
Post → Images

N:M

Posts ↔ Tags
Users ↔ Followers
_________________________________________________________

# Comentarios invisibles

Los comentarios antiguos no se muestran automáticamente.

La cantidad de meses visibles se configura mediante:
   - COMMENT_VISIBLE_MONTHS=6
_________________________________________________________

# Base de datos

El proyecto utiliza SQLite mediante Sequelize.

Archivo generado: database.sqlite
_________________________________________________________

# Endpoints principales

   - Users:
      GET /users
      POST /users
      PUT /users/:id
      DELETE /users/:id

   - Posts: 
      GET /posts
      POST /posts
      PUT /posts/:id
      DELETE /posts/:id

   - Comments:
      GET /comments
      POST /comments
      DELETE /comments/:id

   - Tags:
      GET /tags
      POST /tags

   - Upload imagenes:
      POST /posts/:id/images

   - Asociacion tags:
      POST /posts/:id/tags
_________________________________________________________

# Estructura del proyecto

 src/
 ├── config/
 ├── models/
 ├── routes/
 ├── uploads/
 ├── swagger/
 └── server.js

 _________________________________________________________

 # Integrantes
   - Abby Miramon

# Diagrama Entidad Relación

Ver archivo: assets/DER.png

# Coleccion de PostMan

Ver archivo: assets/Unahur Anti Social Net.postman_collection.json