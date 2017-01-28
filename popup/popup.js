var url = browser.extension.getURL("sqlpayloads.json");
$(document).ready(function() {
    $('#moreSQLPayloads').DataTable({
        "ajax": url
    });
});


