function noteListIsEmpty() {
    var notelist = new NoteList();
        assert.isTrue(notelist.all.length === 0);
};

noteListIsEmpty()

function noteListWithSingleNotes() {
    var notelist = new NoteList();
    notelist.create('my favourite language is ruby');
    assert.isTrue(notelist.all.length === 1);
};

noteListWithSingleNotes()