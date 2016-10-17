function buildList(data, isSub){
    var html = (isSub)?'<div>':''; // Wrap with div if true
    html += '<ul>';
    for(item in data){
        html += '<li>';
        if(typeof(data[item].sub) === 'object'){ // An array will return 'object'
            if(isSub){
                html += '<a href="' + data[item].link + '">' + data[item].name + '</a>';
            } else {
                html += data[item].id; // Submenu found, but top level list item.
            }
            html += buildList(data[item].sub, true); // Submenu found. Calling recursively same method (and wrapping it in a div)
        } else {
            html += data[item].id // No submenu
        }
        html += '</li>';
    }
    html += '</ul>';
    html += (isSub)?'</div>':'';
    return html;
}
