(function(exports){
    function ViewList(noteList){
        this.viewlist = noteList.listNotes();
    }

    ViewList.prototype.returnNotesHtml = function(){
        var htmlstring = ""     
        this.viewlist.forEach(function(note){
           htmlstring += `<li><div>${note.getText()}</div></li>` 

        })

        return "<ul>" + htmlstring + "</ul>"
    }







    exports.ViewList = ViewList;
})(this);