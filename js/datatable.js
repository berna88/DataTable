$(document).ready(function() {
 var collapsedGroups = {};

    var table = $('#example').DataTable({
      searching: false,
      ordering:  false,
      paging: false,
      info: false,
      order: [[2, 'asc']],
      rowGroup: {
        // Uses the 'row group' plugin
        dataSrc: 2,
        startRender: function (rows, group) {
            var collapsed = !!collapsedGroups[group];

            rows.nodes().each(function (r) {
                r.style.display = collapsed ? 'none' : '';
                
            });

            // Add category name to the <tr>. NOTE: Hardcoded colspan
            return $('<tr/>')
                .append('<td onclick="color()"  class="name-group" colspan="8">'+ group + '<span class="icon-politicas glyphicon glyphicon-chevron-down"></span></td>')
                .attr('data-name', group)
                .toggleClass('collapsed', collapsed);
        }
      }
    });

   $('#example tbody').on('click', 'tr.group-start', function () {
        var name = $(this).data('name');
        collapsedGroups[name] = !collapsedGroups[name];
        table.draw(false);

    });

});
/*
function color(){
  var names = document.getElementsByClassName('name-group');
  console.log("Hola berna"+names);
}
*/
