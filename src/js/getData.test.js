import {getData} from "./getData.js";

it('get data valid should return an object', ()=>{
    expect(getData('atlanta')).toBeInstanceOf(Object)
})