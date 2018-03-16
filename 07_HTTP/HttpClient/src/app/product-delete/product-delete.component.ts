import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
	selector: 'app-product-delete',
	templateUrl: './product-delete.component.html',
	styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class ProductDeleteComponent implements OnInit {

	public currentProduct;
	public errorMessage: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private productService: ProductService
	) { }

	ngOnInit() {
		let id = this.activatedRoute.snapshot.params["id"];
		if (id) {
			this.productService.getProduct(id)
				.subscribe(
					product => this.currentProduct = product,
					error => this.errorMessage = error
				);
		}
	}

	deleteProduct() {
		this.productService.deleteProduct(this.currentProduct)
			.subscribe(
				() => this.goBack(),
				error => this.errorMessage = error
			);
	}

	goBack() {
		this.router.navigate(["/products"]);
	}

}
