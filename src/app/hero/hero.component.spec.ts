import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { AppRoutingModule } from "../app-routing.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { expand } from "rxjs/operators/expand";
import { By } from "@angular/platform-browser";


describe('Hero Component Testing',()=>{
    let fixuture:ComponentFixture<HeroComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule(
        {declarations:[HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        }           
        );
        fixuture=TestBed.createComponent(HeroComponent);  
    })

    it('should have the correct hero',()=>{
        fixuture.componentInstance.hero={id:1,name:'GT',strength:3}
        expect(fixuture.componentInstance.hero.name).toEqual('GT');
    })

    it('should render hero name in anchor tag',()=>{
      fixuture.componentInstance.hero={id:1,name:'GT',strength:3}
      fixuture.detectChanges();
      
      expect(fixuture.nativeElement.querySelector('a').textContent).toContain('GT');  
    })

    it('should render hero name in anchor tag with debug element',()=>{
        fixuture.componentInstance.hero={id:1,name:'GT',strength:3}
        fixuture.detectChanges();
        let de=fixuture.debugElement.query(By.css('#myanchor'));
        // let de=fixuture.debugElement.query(By.css('a'));
        expect(de.nativeElement.textContent).toContain('GT');
    })

})