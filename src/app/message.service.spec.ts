import { MessageService } from "./message.service";

describe('Message Service Test',()=>{
    it('it should add a message',()=>{

        let sut=new MessageService();

        sut.add('message1');
        let value=sut.messages.length;

        expect(value).toBe(1);

    })

    it('it should clear a message',()=>{
        let sut=new MessageService();

        sut.add('m2');
        sut.clear();

        let value=sut.messages.length;

        expect(value).toBe(0)
    })
})