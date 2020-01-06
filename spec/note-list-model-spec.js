function noteListIsEmpty() {
    var notelist = new NoteList();
        assert.isTrue(notelist.all.length === 0);
};

noteListIsEmpty()