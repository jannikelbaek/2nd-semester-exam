import { Injectable } from '@angular/core';

/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/*

  this was in our code, kept giving error when removed, it doenst do anything as far as we know, but it still here seemed
  like it was easier than sit and find all the stuff. :D



*/











@Injectable()
export class UtilitiesProvider {

  constructor() {
    console.log('Hello UtilitiesProvider Provider');
  }
  getStuff () {
    return [
      {
        title: '',
        skills: '',
      img: ''
  },
{
  title: '',
  skills: '',
  img: ''
},
{
  title: '',
    skills: '',
  img: ''
},
{
  title: '',
    skills: '',
  img: ''
}
    ]
  }
}
