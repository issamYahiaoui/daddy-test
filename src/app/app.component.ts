import {Component, OnInit} from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-test';
  pokemonForm: FormGroup;
  submitted = false;
  loading = null ;
  Null = null
  pokemons = []
  pokemon = {
    name : '',
    num : '',
    type : ''
  }
  data = []


  constructor(
    private pokemonService: PokemonService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log('Getting list of pokemons ....')

    this.pokemons = this.pokemonService.pokemons
    this.data = this.pokemons
    this.onChanges();
    console.log('fetched pokemons list' , this.data)
  }


  async onChanges(){
    this.pokemonForm.valueChanges.subscribe(val => {
      // this.filterName()
      // this.filterNum()
      // this.filterType()
       this.filter()
    });
  }

  createForm() {
    this.pokemonForm = this.fb.group({
      name: [''],
      num: [''],
      type: ['']
    });
  }



  changeType(e) {
    this.pokemonForm.get('type').setValue(e.value, {
       onlySelf: true
    }) ;
  }






  async filter () {
    let name  =  this.pokemonForm.get('name').value
    let num  =  this.pokemonForm.get('num').value
    let type  =  this.pokemonForm.get('type').value
    console.log('Filtering name | num | type ....',name,num,type)
    if(!name && !num && type) {
      console.log('No Filter !')
      this.data = this.pokemons ;
      return
    }
    let nameData = await this.pokemons.filter(p =>( (p.name).toLowerCase().includes(name.toLowerCase()) ) )
    let numData = await this.pokemons.filter(p => ( (parseInt(p.id)) === (num) ) )
    let typeData = await this.pokemons.filter(p=>p.type.includes((this.pokemon.type)) )

    console.log('num data' , numData)
    console.log('name data' , numData)
    console.log('type data' , typeData)

    // let data1= [nameData,numData]
    // let temp = data1.reduce((nameData, numData) => nameData.filter(c => numData.includes(c)))
    // let data2 = [ temp , typeData];
    // return data2.reduce((temp, typeData) => temp.filter(c => typeData.includes(c)))

  }
  async filterName (){
    console.log('Filtering name ....',this.pokemonForm.get('name').value)
    let value= this.pokemonForm.get('name').value
    if(!this.pokemonForm.get('name').value) {
      this.data = this.pokemons ;
      return
    }
    console.log('Res ...',(this.data[0].name).toLowerCase().includes(value.toLowerCase()))
    this.data = await this.pokemons.filter(p =>( (p.name).toLowerCase().includes(value.toLowerCase()) ) )
    console.log(this.data)
  }
  async filterNum (){
    console.log('Filtering Num ....',this.pokemonForm.get('num').value)
    let value= this.pokemonForm.get('num').value
    if(!this.pokemonForm.get('num').value) {
      this.data = this.pokemons ;
      return
    }
     this.data = await this.pokemons.filter(p => ( (parseInt(p.id)) === (value) ) )
     console.log(this.data)



  }


  filterType (){
    console.log('Filtering Type ....',this.pokemonForm.get('type').value)
    if(!this.pokemonForm.get('type').value) {
      this.data = this.pokemons ;
      return
    }
    console.log(this.data)
    this.data = this.pokemons.filter(p =>{
      return p.type.includes((this.pokemon.type));
    })
  }



}
