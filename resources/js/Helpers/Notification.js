import 'vuejs-noty/dist/vuejs-noty.css'

class Notification {
   success(){
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Feito com sucesso',
            timeout: 1000,
        }).show();
   }

   alert(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Tem certeza?',
            timeout: 1000,
        }).show();
    }

    error(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Algo deu errado',
            timeout: 1000,
        }).show();
   }

   warning(){
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: 'Opps tente novamente',
            timeout: 1000,
        }).show();
    }

    image_validation(){
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: 'Carregue uma imagem menor que 1 MB',
            timeout: 2000,
        }).show();
    }

    image_format(){
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: 'Carregue uma imagem no format (PNG, JPG, JPEG)',
            timeout: 2000,
        }).show();
    }
}

export default Notification = new Notification()