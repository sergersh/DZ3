import Route from '@ember/routing/route';

export default class BookRoute extends Route {
   async mode() {
       const response = await fetch('http://localhost:3000/boors')
       return response.json();
   }
}
