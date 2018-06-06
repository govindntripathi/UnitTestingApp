import { HeroComponent } from './../hero/hero.component';
import { By } from '@angular/platform-browser';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { of } from 'rxjs/observable/of';
import { HeroService } from './../hero.service';
import { NO_ERRORS_SCHEMA, Input, Component } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { Hero } from '../hero';

describe('Hero Component Deep Test', () => {
  let fixture:ComponentFixture<HeroesComponent>;
  let mockService;
  let HEROES;

  beforeEach(()=>{
    HEROES=[
      {id:1,name:'Govind',strength:8},
      {id:2,name:'Vartika',strength:9},
      {id:3,name:'Siaa',strength:10}
  ]
    mockService=jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
    TestBed.configureTestingModule(
      {
        declarations:[HeroesComponent,HeroComponent],
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

        it('Check Hero Call to Child Component',()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          let heroDE=fixture.debugElement.queryAll(By.directive(HeroComponent));
          expect(heroDE.length).toBe(3);
        })

        it('Check Hero Data [0] to Child Component',()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          let heroDE=fixture.debugElement.queryAll(By.directive(HeroComponent));
          expect(heroDE[0].componentInstance.hero.name).toBe("Govind");
        })

        it('Check Hero Data [0] - [3] to Child Component',()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          let heroDE=fixture.debugElement.queryAll(By.directive(HeroComponent));
          for(let i=0;i<heroDE.length;i++)
          {
            expect(heroDE[i].componentInstance.hero.name).toBe(HEROES[i].name);
          }

        })

        it(`should call heroServiceDelete when Delete hero button clicked`,()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          spyOn(fixture.componentInstance,'delete')
          let heroDE=fixture.debugElement.queryAll(By.directive(HeroComponent));
            heroDE[0].query(By.css('button'))
            .triggerEventHandler('click',{stopPropagation:()=>{}});
            expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0])

        })

        it(`should call heroServiceDelete when Delete hero button clicked
            without click event`,()=>{
          mockService.getHeroes.and.returnValue(of(HEROES))
          fixture.detectChanges()
          spyOn(fixture.componentInstance,'delete')
          let heroDE=fixture.debugElement.queryAll(By.directive(HeroComponent));

          (<HeroComponent>heroDE[0].componentInstance).delete.emit(undefined)
            expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0])

        })



})
