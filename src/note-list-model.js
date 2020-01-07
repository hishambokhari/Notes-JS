(function(exports){
    function NoteList(){
        this.list = [];
    }

    NoteList.prototype.listNotes = function(){
        return this.list 
    }

    NoteList.prototype.create = function(notetext){
        var note = new Note(notetext);
        this.list.push(note);
    }

    exports.NoteList = NoteList;
})(this);