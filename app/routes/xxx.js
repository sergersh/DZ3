import Route from '@ember/routing/route';

export default class XxxRoute extends Route {
    model(){
    //async mode() {
        //<!--const response = await fetch('http://localhost:3000/books')
        //return response.json();-->
        returen [
            
                { 
                    Name: '1',
                    Authors: 'А',
                    Pages: '100',
                },
                {                   
                    Name: '2',
                    Authors: 'А',
                    Pages: '100',
                },
                {                    
                    Name: '3',
                    Authors: 'А',
                    Pages: '100',
                }
            
              ];
         }
}
