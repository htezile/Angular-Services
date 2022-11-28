Servicios en Angular 

Los servicios son clases que se encargan de acceder a los datos para entregarlos a los componentes. Los componentes dependerán de la complejidad de la aplicación. La ventaja de los servicios es su reaprovechamiento para distintos componentes, por lo que básicamente un servicio es un proveedor de datos, que mantiene la lógica de acceso a ellos, la operativa relacionada con el negocio y las cosas que se hacen con los datos dentro de una aplicación.  

Con la creación de servicios en realidad lo que hacemos es una inyección de dependencias que en realidad es inyectar en el componente los datos que necesite. 

Cómo crear un servicio 

Para crear un servicio mediante nos apoyaremos en Angular CLI usando el comando “generate service”, indicando a continuación el nombre del servicio que queremos generar.  

ng generate service omdb 

Esto generará el servicio llamado “OmdbService”. La coletilla “Service” al final del nombre lo agrega Angular CLI, así como también nombra al archivo generado con la finalización  “.service” para dejar claro que se trata de un servicio. 

Agregar la declaración de un servicio a un módulo 

Para poder usar un servicio es necesario agregarlo a un módulo e inmediatamente se podrá usar en cualquiera de los componentes que pertenecen al módulo. Para ello hay que declarar el servicio manualmente en el módulo y se hace mediante el decorador del módulo (@NgModule) en el array de “providers”. 

@NgModule({ 
  imports: [ 
    CommonModule 
  ], 
  declarations: [Component], 
  providers: [OmdbService] 
}) 

A continuación, hay que realizar la correspondiente importación al módulo: 

import { OmdbService } from './omdb.service'; 

 

Código básico de un servicio en Angular 

Este sería el código del recién creado servicio “OmdbService”. 

import { Injectable } from '@angular/core'; 
 
@Injectable() 
export class OmdbService { 
 
  constructor() { } 
 
} 

El decorador @injectable indica a Angular que la clase que se decora, en este caso la clase  OmdbService, puede necesitar dependencias que puedan ser entregadas por inyección de dependencias. 

El import { Injectable } from ‘@angular/core’, lo que hace es que la clase conozca y sea capaz de usar el decorador @injectable. 

Por lo demás el servicio está vacío. De momento agregaremos una simple propiedad con un dato que luego vamos a poder consumir desde algún componente. 

export class ClientesService { 
 	api_personajes = '"https://rickandmortyapi.com/api/character'; 
  constructor() { } 
} 

Cómo inyectar dependencias de servicios 

La inyección de dependencias se realiza por medio del constructor. En el constructor de un componente se puede declarar cualquiera de los servicios que se vaya a usar y Angular se encargará de proporcionarlo, para ello declaramos como parámetro la dependencia en el constructor del componente. 

constructor(public omdbService: OmdbService) { } 

De esta manera estamos indicando a Angular que vamos a usar un objeto “clientesService” que es de la clase “OmdbService”. A partir de entonces, dentro del componente existirá ese objeto, proporcionando los datos y funcionalidad definida en el servicio. 

Usando el servicio en el componente 

Usando el servicio dentro de la clase del componente 

	Dentro de la clase del componente, tendremos el servicio a partir de la propiedad usada en 	su declaración. En el constructor definimos al constructor como “omdbService”. Pues 		como 	cualquier otra propiedad se accede a ella mediante la variables “this”. 

	export class SearchComponent implements OnInit { 
 
  	constructor(public omdbService: OmdbService) { } 
 
  		ngOnInit() { 
    		console.log(this.omdbService); 
  		} 
 
	} 

	El primer sitio donde podría usarse el servicio es en el método ngOnInit(), si se necesitara del 	servicio para inicializar propiedades en el componente. 

Usando el servicio en el template de un componente 

	En el template de un componente también se puede acceder a un servicio para mostrar 	propiedades o incluso invocar sus métodos como respuesta a un evento, por ejemplo. 

	Como el servicio está en una propiedad del componente se puede acceder a él mediante ese 	nombre de propiedad. Pero hay que tener en cuenta que el acceso desde el template sólo 	será posible si el servicio se declaró con visibilidad “public”. 

	<p> 
  		URL De acceso: {{omdbService.api_personajes}} 
	</p> 
