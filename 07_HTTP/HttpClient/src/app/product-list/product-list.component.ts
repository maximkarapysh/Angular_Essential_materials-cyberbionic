import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ["./../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class ProductListComponent implements OnInit {

	public products;
	public errorMessage: string;

	constructor(private productService: ProductService,
		private router: Router) { }

	ngOnInit() {
		this.getProducts();
	}

	public refresh() {
		this.getProducts();
	}

	public editProduct(product: Product) {
		this.router.navigate(["products", "edit", product.id]);
	}

	public deleteProduct(product: Product) {
		this.router.navigate(["products", "delete", product.id]);
	}

	public createProduct() {
		this.router.navigate(["products", "create"]);
	}

	private getProducts() {
		this.productService.getProducts().subscribe(
			prod => this.products = prod,
			error => this.errorMessage = error
		)
	}

}
