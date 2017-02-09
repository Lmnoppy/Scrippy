var url = chrome.extension.getURL("sqlpayloads.json");
$(document).ready(function () {
    $('#moreSQLPayloads').DataTable({
        "ajax": url
        , scrollY: '35vh'
        , scrollCollapse: true
    });
});
