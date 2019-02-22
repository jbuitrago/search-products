# Test Front End Mercado Libre

# Requerimientos

- Sistema Operativo LInux Ubuntu 18
- Node 8.10.0
- Administrador de dependencias Yarn 1.12.3


# Instalación

- Clonar el proyecto

git clone https://github.com/jbuitrago/test-front-end-ml.git

- Ingresar al directorio

cd test-front-end-ml

- Instalar las dependencias

yarn  install

- Ejecutar la aplicación con el comando

yarn run start 


# Entregables

## BackEnd

El Backend esta desarrollado con el siguiente stack Tecnológico:

- NodeJs
- Express 
- Webpack

Se crearon los siguientes EndPoint:

    api/items?q= :query
    https://api.mercadolibre.com/sites/MLA/search?q= :query

    api/items/:id
    https://api.mercadolibre.com/items/ :id
    https://api.mercadolibre.com/items/ :id /description



# FrontEnd

El FrontEnd esta desarrollado con el siguiente stack Tecnológico:

- CSS
- Html
- JavaScript 
- ReactJs
- Redux
- Sass
- Jest (Testing)
- ESLint + Prettier

Al ejecutar el comando:

    yarn run start
    
A través de la configuración de Webpack y Package json se levanta la aplicación en la url:

    http://localhost:3000

