import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto'
 
@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  listaProdutos: Produto[]

  produto: Produto = new Produto()

  ngOnInit() {
    
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((res: Produto[])=>{
      this.listaProdutos = res
    })
  }
}
