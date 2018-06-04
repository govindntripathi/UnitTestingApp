
import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs/observable/of";

describe('HeroComponent',()=>{
let comp:HeroesComponent;
let HEROES;
let mockHero;

beforeEach(()=>{
    HEROES=[
        {id:1,name:'Govind',strength:8},
        {id:2,name:'Vartika',strength:9},
        {id:3,name:'Siaa',strength:10}
    ]
    
})

mockHero=jasmine.createSpyObj(['getHeros','addHero','deleteHero'])
comp=new HeroesComponent(mockHero);
describe('delete',()=>{
    it('should delete heros',()=>
    {
        mockHero.deleteHero.and.returnValue(of(true))
        comp.heroes=HEROES;
        comp.delete(HEROES[2])
        expect(comp.heroes.length).toBe(2);
    })

    it('should have id 1 after delete',()=>{
        let heroid1=comp.heroes[0];
        expect(heroid1.name).toBe('Govind');
    })

    it('should called delete hero',()=>{
        mockHero.deleteHero.and.returnValue(of(true))
        comp.heroes=HEROES;
        comp.delete(HEROES[2])
        expect(mockHero.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })
    
})

})