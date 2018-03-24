(function ($) {
    $.fn.confirm = function (title, message) {

        var element = this;

        var dialog = $('<div class="modal" role="dialog" />');
        dialog.html(`
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title"">${title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ${message}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" role="action-ok">OK</button>
              </div>
            </div>
          </div>

        `);

        return new Promise((resolve, reject) => {
            var isConfirmed = false;

            $(dialog).on('hidden.bs.modal', function (e) {
                if (isConfirmed)
                    resolve();
                else
                    reject();
            })

            dialog.find('button[role="action-ok"]').click(function () {
                isConfirmed = true;
                dialog.modal('hide');
            });

            dialog.modal({
                backdrop: 'static',
                keyboard: false
            });
        });
    }

})(jQuery);

// USAGE
$('button').click(function () {
    $('body').confirm('กรุณายืนยัน', 'ต้องการลบข้อมูล abcd ?')
        .then(function () {
            alert('ok confirm !');
        })
        .catch(function () {
            alert('cancel');
        });
});