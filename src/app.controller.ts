import { Controller, Get } from "@nestjs/common"; 

@Controller('/app')
export class AppController{
    @Get('getmeth')
    getRootRoute() {
      return 'hi there!';
    }

    @Get('/byemeth')
    getByeThere(){
        return 'bye there'
    }
}