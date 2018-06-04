import { By } from '@angular/platform-browser';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { of } from 'rxjs/observable/of';
import { HeroService } from './../hero.service';
import { NO_ERRORS_SCHEMA, Input, Component } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { Hero } from '../hero';

describe('Hero Component Shallow Test', () => {
  let fixture:ComponentFixture<HeroesComponent>;
  let mockService;
  let HEROES;

  @Component({
    selector: 'app-hero',
    template: '<div></div>'
  })
   class FakeHeroComponent {
    @Input() hero: Hero;
    //@Output() delete = new EventEmitter();
  }

  beforeEach(()=>{
    HEROES=[
      {id:1,name:'Govind',strength:8},
      {id:2,name:'Vartika',strength:9},
      {id:3,name:'Siaa',strength:10}
  ]
    mockService=jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
    TestBed.configureTestingModule(
      {
        declarations:[HeroesComponent,FakeHeroComponent],
        providers:[{provide:HeroService,useValue:mockService}],
        schemas:[NO_ERRORS_SCHEMA]
      })
      fixture=TestBed.createComponent(HeroesComponent)

        })

        it('true should be false',()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          expect(fixture.componentInstance.heroes.length).toBe(3)
        })

        it('should create on li for each hero',()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3)
        })


})
