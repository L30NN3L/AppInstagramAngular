import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

  constructor(
    private progresso: Progresso
  ) {}

  public publicar(publicacao: any): void {



    console.log(publicacao);

    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
                .push( { titulo: publicacao.titulo } )
                  .then((resposta: any) => {

                    const nomeImagem = resposta.key;

                     firebase.storage().ref()
                     .child(`imagens/${nomeImagem}`)
                     .put(publicacao.imagem)
                     .on(firebase.storage.TaskEvent.STATE_CHANGED,
                         // acompanhamento do progresso do upload
                         (snapshot: any) => {
                           this.progresso.status = 'andamento';
                           this.progresso.estado = snapshot;
                        // console.log(' Snapchot capturado no on() ', snapshot);
                         },
                         (error) => {
                           this.progresso.status = 'erro';
                           console.log(error);
                         },
                         () => {
                           // finalização do processo
                           this.progresso.status = 'concluido';
                        //   console.log('upload completo');

                         }
                     );

                  });







   // console.log('Chegamos até o serviço responsável pelo controle de dados');
  }
}