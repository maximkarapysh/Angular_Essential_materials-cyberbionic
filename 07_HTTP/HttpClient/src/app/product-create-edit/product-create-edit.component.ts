import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
	selector: 'app-product-create-edit',
	templateUrl: './product-create-edit.component.html',
	styleUrls: ["./../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class ProductCreateEditComponent implements OnInit {

	public currentProduct; //: Product;
	public errorMessage: string;
	public productForm: FormGroup


	constructor(
		private productService: ProductService,
		private activatedRoute: ActivatedRoute,
		private fb: FormBuilder,
		private router: Router
	) { }

	ngOnInit() {
		this.buildForm();
		this.getProductFromRoute();
	}

	public onSubmit(productForm: FormGroup) {
		this.currentProduct.name = productForm.value.name;
		this.currentProduct.price = productForm.value.price;


		if (this.currentProduct.id) {
			this.productService.updateProduct(this.currentProduct)
				.subscribe(
					() => this.goBack(),
					error => this.errorMessage = error
				);
		} else {
			this.productService.addProduct(this.currentProduct)
				.subscribe(
					() => this.goBack(),
					error => this.errorMessage = error
				);
		}
	}

	public checkError(element: string, errorType: string) {
		return this.productForm.get(element).hasError(errorType) &&
			this.productForm.get(element).touched
	}

	private getProductFromRoute() {
		this.activatedRoute.params.forEach((params: Params) => {
			let id = params["id"];

			if (id) {
				this.productService.getProduct(id).subscribe(
					product => {
						this.currentProduct = product;
						this.productForm.patchValue(this.currentProduct);
					},
					error => this.errorMessage = error
				);
			}
			else {
				this.currentProduct = new Product(null, null, null);
				this.productForm.patchValue(this.currentProduct);
			}
		});
	}

	public goBack() {
		this.router.navigate(["/products"]);
	}

	private buildForm() {
		this.productForm = this.fb.group({
			name: ["", Validators.required],
			price: ["", Validators.required]
		});
	}
}
