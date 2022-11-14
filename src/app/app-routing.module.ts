import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./game-page/game-page.component";
import { HomeComponentComponent } from "./home-component/home-component.component";

const routes: Routes = [
    { path: 'home', component: HomeComponentComponent },
    { path: '', component: HomeComponentComponent },
    { path: 'features', component: HomeComponentComponent },
    { path: 'pricing', component: HomeComponentComponent },
    { path: 'about', component: HomeComponentComponent },
    { path: 'game-page-test', component: GamePageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }