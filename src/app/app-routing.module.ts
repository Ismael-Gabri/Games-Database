import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponentComponent } from "./home-component/home-component.component";

const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'features', component: HomeComponentComponent },
    { path: 'pricing', component: HomeComponentComponent },
    { path: 'about', component: HomeComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }