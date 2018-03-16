import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateEditComponent } from './product-create-edit/product-create-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const routes: Routes = [
	{
		path: "",
		redirectTo: "products",
		pathMatch: "full"
	},
	{ path: "products", component: ProductListComponent },
	{ path: "products/edit/:id", component: ProductCreateEditComponent },
	{ path: "products/create", component: ProductCreateEditComponent },
	{ path: "products/delete/:id", component: ProductDeleteComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
