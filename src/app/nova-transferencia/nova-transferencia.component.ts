import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

    // @Output()
    aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    constructor(private service: TransferenciaService, private router: Router) { }

    transferir() {
        console.log('Transferindo...');
        // this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
        this.service.adicionar({ valor: this.valor, destino: this.destino })
            .subscribe(resultado => {
                console.log(resultado);
                this.limparCampos();
                this.router.navigateByUrl('extrato');
            }, error => console.log(error));
    }

    limparCampos() {
        this.valor = null;
        this.destino = null;
    }
}
