
$(document).ready(function () {
    if (obj) {
        $('#formCadastro #CPF').val(obj.CPF);
        $('#formCadastro #Nome').val(obj.Nome);
    }

    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "CPF": $(this).find("#CPF").val(),
                "NOME": $(this).find("#Nome").val()

            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (r) {
                    ModalDialog("Sucesso!", r)
                    $("#formCadastro")[0].reset();
                    window.location.href = urlRetorno;
                }
        });
    })

})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '';

    $('body').append(texto);
    $('#' + random).modal('show');
}
