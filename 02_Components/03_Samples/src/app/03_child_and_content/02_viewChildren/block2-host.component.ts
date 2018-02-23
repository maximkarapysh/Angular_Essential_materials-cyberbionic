import { Component, ViewChildren, QueryList } from "@angular/core";
import { Block2Component } from "./block2.component";

@Component({
    selector: "block2-host",
    templateUrl: "block2-host.component.html"
})
export class Block2HostComponent {
    @ViewChildren(Block2Component) // для получения доступа ко всем дочерним компонентам указанного типа
    blocks: QueryList<Block2Component>;

    showAll() {
        this.blocks.forEach(x => x.show());
    }
}