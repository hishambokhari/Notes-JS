

function noteListViewWhenEmpty() {
    var notelist = new NoteList();
    var viewlist = new ViewList(notelist);

        assert.isTrue(viewlist.returnNotesHtml() === "<ul></ul>")
        
};



    noteListViewWhenEmpty()

function noteListViewWithOneNote() {
    var notelist = new NoteList();
    notelist.create("first note");
    var viewlist = new ViewList(notelist);

    assert.isTrue(viewlist.returnNotesHtml() === "<ul><li><div>first note</div></li></ul>")
    
    }

    noteListViewWithOneNote()

    function noteListViewWithSeveralNotes() {
        var notelist = new NoteList();
        notelist.create("first note");
        notelist.create("second note");
        var viewlist = new ViewList(notelist);
    
        assert.isTrue(viewlist.returnNotesHtml() === "<ul><li><div>first note</div></li><li><div>second note</div></li></ul>")
    }

    noteListViewWithSeveralNotes()