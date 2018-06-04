import { StrengthPipe } from "./strength.pipe";

describe('strengthPipe',()=>{
    it('should display weak if strenth is 5',()=>{
        let sut=new StrengthPipe();
        let value=sut.transform(5);
        expect(value).toEqual('5 (weak)');
    })

    it('should not display weak if strength is greater 20',()=>{
        let sut=new StrengthPipe();
        let value=sut.transform(50);
        expect(value).not.toEqual('5 (weak)');
    })
})