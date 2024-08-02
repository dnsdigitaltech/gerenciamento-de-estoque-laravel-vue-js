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
}

export default Notification = new Notification()