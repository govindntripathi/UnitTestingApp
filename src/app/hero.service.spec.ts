import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from './message.service';
import { HttpClientTestingModule,HttpTestingController  } from "@angular/common/http/testing";
import { HeroService } from './hero.service';

describe('Test Hero Service',(() =>{
  let mockObject;
  let httpTestingController:HttpTestingController;

  beforeEach(()=>{
    mockObject=jasmine.createSpyObj(['add'])
    TestBed.configureTestingModule(
      {
        imports:[HttpClientTestingModule],
        providers:[{provide:MessageService,useValue:mockObject},HeroService]
      }
    );
  })
 // httpTestingController=TestBed.get(httpTestingController);
 //let herosvc=TestBed.get(HeroService);

 describe('Get Hero Check URL',()=>{
   it('should check url',inject(
     [HeroService,HttpTestingController],
     (service:HeroService,httpcontroller:HttpTestingController)=>{

      service.getHero(4).subscribe();
      let req=httpcontroller.expectOne('api/heroes/4')
      req.flush({id:4,name:'Govind Tripathi',strength:85});
      httpcontroller.verify();

   }))

 })

}))
